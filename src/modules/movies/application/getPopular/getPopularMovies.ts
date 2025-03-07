import { MovieRepository } from '../../domain/MovieRepository.ts'
import { Movies } from '../../domain/Movies.ts'
import { Movie } from '../../domain/Movie.ts'

export async function getPopularMovies(
    movieRepository: MovieRepository,
    limit?: number
): Promise<Movies> {
    const moviesView = await movieRepository.getPopular(limit)
    return {
        data: moviesView.data.map((movie) => ({ ...movie }) as Movie),
        pagination: moviesView.pagination,
    }
}
