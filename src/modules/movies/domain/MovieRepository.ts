import { MoviesView } from './MoviesView.ts'

export interface MovieRepository {
    getPopular(): Promise<MoviesView>
}
