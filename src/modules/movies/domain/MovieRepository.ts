import { MoviesView } from './MoviesView.ts'

export interface MovieRepository {
    getPopular(limit?: number): Promise<MoviesView>
}
