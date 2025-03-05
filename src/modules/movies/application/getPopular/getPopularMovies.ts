import { MoviesView } from '../../domain/MoviesView.ts'
import { MovieRepository } from '../../domain/MovieRepository.ts'

export async function getPopularMovies(
    movieRepository: MovieRepository
): Promise<MoviesView> {
    return await movieRepository.getPopular()
}
