import { Movie } from '../../../../modules/movies/domain/Movie.ts'
import { Card } from '../card/Card.tsx'
import './CardList.css'

type MoviesListProps = {
    movies: Movie[]
}

export function CardList({ movies }: MoviesListProps) {
    return (
        <div className="card-list">
            {movies.map((movie: Movie) => (
                <Card key={movie.id} movie={movie} />
            ))}
        </div>
    )
}
