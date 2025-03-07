import { MovieCard } from '../card/MovieCard.tsx'
import styles from './MovieCardList.module.css'
import { Movie } from '../../../../modules/movies/domain/Movie.ts'

type MoviesListProps = {
    movies: Movie[]
}

export function MovieCardList({ movies }: MoviesListProps) {
    return (
        <div className={styles['card-list']}>
            {movies.map((movie: Movie) => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
    )
}
