import { MoviesView } from './MoviesView.ts'

export interface MovieRepository {
    getFavorite(limit?: number): Promise<MoviesView>
    getPopular(limit?: number): Promise<MoviesView>
    postPopular(movieId: number, userId: number): Promise<void>
    deletePopular(movieId: number, userId: number): Promise<void>
}
