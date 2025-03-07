import { Pagination } from './Pagination.ts'
import { Movie } from './Movie.ts'

export interface Movies {
    data: Movie[]
    pagination: Pagination
}
