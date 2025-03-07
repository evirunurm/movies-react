import styles from './MovieCard.module.css'
import { Movie } from '../../../../modules/movies/domain/Movie.ts'

type MovieCardProps = {
    movie: Movie
}

export function MovieCard({ movie }: MovieCardProps) {
    return (
        <div className={styles.card}>
            <div className={styles.card__poster}>
                <p className={styles.card__rating}>☆ {movie.rating}</p>
                <img src={movie.img} alt={movie.title} />
                <div
                    onClick={movie.onFavoriteClick}
                    className={styles.card__heart}
                >
                    ♥
                </div>
            </div>
            <p className={styles.card__title}>{movie.title}</p>
        </div>
    )
}
