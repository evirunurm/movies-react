import { MovieRepository } from '../domain/MovieRepository.ts'
import { MoviesView } from '../domain/MoviesView.ts'

export function createApiMovieRepository(): MovieRepository {
    return {
        getPopular,
        postPopular,
    } as MovieRepository
}

async function getPopular(limit?: number): Promise<MoviesView> {
    const apiUrl = 'http:\\\\localhost:3000/api/movies/popular'
    const queryParam = limit ? `?limit=${limit}` : ''
    const response = await fetch(apiUrl + queryParam, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    return (await response.json()) as MoviesView
}
async function postPopular(movieId: number, userId: number): Promise<void> {
    const apiUrl = 'http:\\\\localhost:3000/api/user/favorites'
    await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ movieId, userId }),
    })
    console.log('sent')
}
