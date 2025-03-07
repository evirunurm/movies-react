import { MovieView } from './MovieView.ts'
import { Pagination } from './Pagination.ts'

export interface MoviesView {
    data: MovieView[]
    pagination: Pagination
}
