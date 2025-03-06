import { Movie } from '../../../../modules/movies/domain/Movie.ts'
import './Card.css'

type MovieCardProps = {
    movie: Movie
}

export function Card({ movie }: MovieCardProps) {
    return (
        <div className="card">
            <div className="card__poster">
                <p className="card__rating">☆ {movie.rating}</p>
                <img src={movie.img} alt={movie.title} />
                <div className="card__heart">♥</div>
            </div>
            <p className="card__title">{movie.title}</p>
        </div>
    )
}
