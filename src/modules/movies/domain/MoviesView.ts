import { Movie } from './Movie.ts'

interface Pagination {
    page: number
    perPage: number
    total: number
}

export interface MoviesView {
    data: Movie[]
    pagination: Pagination
}
