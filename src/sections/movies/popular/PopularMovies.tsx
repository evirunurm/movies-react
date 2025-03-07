import { MovieCardList } from '../../shared/components/cardList/MovieCardList.tsx'
import { Input } from '../../shared/components/input/Input.tsx'
import { Section } from '../../shared/components/section/Section.tsx'
import { Main } from '../../shared/components/main/Main.tsx'
import { PageTitle } from '../../shared/components/pageTitle/PageTitle.tsx'
import { IntersectionAlert } from '../../shared/components/intersectionAlert/IntersectionAlert.tsx'
import { useCallback, useEffect, useReducer, useState } from 'react'
import { getPopularMovies } from '../../../modules/movies/application/getPopular/getPopularMovies.ts'
import { MovieRepository } from '../../../modules/movies/domain/MovieRepository.ts'
import { Movie } from '../../../modules/movies/domain/Movie.ts'

interface PopularMoviesProps {
    repository: MovieRepository
}

const MoviesReducer = (currentMovies: Movie[], action: MovieAction) => {
    switch (action.type) {
        case 'favorite':
            return currentMovies.map((movie) =>
                movie.id === action.movieId
                    ? { ...movie, isFavorite: true }
                    : movie
            )
        case 'reset':
            return action.newValue ?? []
        default:
            throw new Error()
    }
}

type MovieAction = {
    type: 'favorite' | 'reset'
    movieId?: number
    newValue?: Movie[]
}

export function PopularMovies({ repository }: PopularMoviesProps) {
    const [isLoading, setIsLoading] = useState(false)
    const [movies, dispatchMoviesAction] = useReducer(MoviesReducer, [])
    const [totalMovies, setTotalMovies] = useState<number>(0)
    const moviesLoadStep = 10

    async function fetchPopularMovies(limit?: number) {
        const amountMoviesToFetch = limit ?? moviesLoadStep
        const popularMovies = await getPopularMovies(
            repository,
            amountMoviesToFetch
        )
        dispatchMoviesAction({
            type: 'reset',
            newValue: popularMovies.data.map(mapMovieAddingFavoriteAction),
        })
        setTotalMovies(popularMovies.pagination?.total ?? 0)
    }

    const onHeartClick = async (movieId: number) => {
        await repository.postPopular(movieId, 1)
        dispatchMoviesAction({
            type: 'favorite',
            movieId,
        })
    }

    const mapMovieAddingFavoriteAction = (movie: Movie) => {
        movie.onFavoriteClick = async () => {
            await onHeartClick(movie.id)
        }
        return movie
    }

    const areThereMoreMoviesToLoad = movies.length < totalMovies

    const loadMoviesAfterIntersection = useCallback(
        (entries: IntersectionObserverEntry[]) => {
            if (entries[0].isIntersecting && areThereMoreMoviesToLoad) {
                setIsLoading(true)
                fetchPopularMovies(movies.length + moviesLoadStep).then(() =>
                    setIsLoading(false)
                )
            }
        },
        [movies]
    )

    useEffect(() => {
        const loadMovies = async () => {
            await fetchPopularMovies()
            setIsLoading(false)
        }
        setIsLoading(true)
        loadMovies().catch((error) =>
            console.error('Error loading movies', error)
        )
    }, [])

    return (
        <Main>
            <PageTitle>Popular Movies</PageTitle>
            <Input placeholder="Seach Movies" />
            <Section title="All" amountElements={totalMovies}>
                <IntersectionAlert
                    callback={loadMoviesAfterIntersection}
                    stopAlert={!areThereMoreMoviesToLoad || isLoading}
                >
                    <MovieCardList movies={movies} />
                </IntersectionAlert>
            </Section>
            <p>{isLoading}</p>
        </Main>
    )
}
