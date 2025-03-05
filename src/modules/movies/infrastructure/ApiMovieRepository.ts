import { MovieRepository } from '../domain/MovieRepository.ts'
import { MoviesView } from '../domain/MoviesView.ts'

export function createApiMovieRepository(): MovieRepository {
    return {
        getPopular,
    } as MovieRepository
}

async function getPopular(): Promise<MoviesView> {
    const apiUrl = 'http:\\\\localhost:3000/api/movies/popular'
    const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    return (await response.json()) as MoviesView
}
