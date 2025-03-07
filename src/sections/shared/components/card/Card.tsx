import { Movie } from '../../../../modules/movies/domain/Movie.ts'
import styles from './Card.module.css'

type MovieCardProps = {
    movie: Movie
}

export function Card({ movie }: MovieCardProps) {
    return (
        <div className={styles.card}>
            <div className={styles.card__poster}>
                <p className={styles.card__rating}>☆ {movie.rating}</p>
                <img src={movie.img} alt={movie.title} />
                <div className={styles.card__heart}>♥</div>
            </div>
            <p className={styles.card__title}>{movie.title}</p>
        </div>
    )
}
