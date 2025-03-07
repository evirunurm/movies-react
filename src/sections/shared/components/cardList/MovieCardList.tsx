import { Movie } from '../../../../modules/movies/domain/Movie.ts'
import { Card } from '../card/Card.tsx'
import styles from './MovieCardList.module.css'

type MoviesListProps = {
    movies: Movie[]
}

export function MovieCardList({ movies }: MoviesListProps) {
    return (
        <div className={styles['card-list']}>
            {movies.map((movie: Movie) => (
                <Card key={movie.id} movie={movie} />
            ))}
        </div>
    )
}
