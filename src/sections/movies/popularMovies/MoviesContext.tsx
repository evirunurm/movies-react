import React, { useContext, useEffect, useState } from 'react'
import { Movie } from '../../../modules/movies/domain/Movie.ts'
import { MovieRepository } from '../../../modules/movies/domain/MovieRepository.ts'
import { getPopularMovies } from '../../../modules/movies/application/getPopular/getPopularMovies.ts'

export interface ContextState {
    movies: Movie[]
    totalMovies: number
}

export const MoviesContext = React.createContext({} as ContextState)

export const MoviesContextProvider = ({
    children,
    repository,
}: React.PropsWithChildren<{ repository: MovieRepository }>) => {
    const [movies, setMovies] = useState<Movie[]>([])
    const [totalMovies, setTotalMovies] = useState<number>(0)

    async function getPopular() {
        const popularMovies = await getPopularMovies(repository)
        setTotalMovies(popularMovies.pagination?.total)
        setMovies(popularMovies.data)
    }

    useEffect(() => {
        getPopular()
    }, [])

    return (
        <MoviesContext.Provider value={{ movies, totalMovies }}>
            {children}
        </MoviesContext.Provider>
    )
}

export const useMoviesContext = () => useContext(MoviesContext)
