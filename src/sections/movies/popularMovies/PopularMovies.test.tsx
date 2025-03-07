import { render, waitFor } from '@testing-library/react'
import { PopularMovies } from './PopularMovies.tsx'
import { MovieRepository } from '../../../modules/movies/domain/MovieRepository.ts'
import { MoviesView } from '../../../modules/movies/domain/MoviesView.ts'
import { Movie } from '../../../modules/movies/domain/Movie.ts'
import { vi } from 'vitest'

describe('Popular Movies', () => {
    let repository: MovieRepository

    beforeEach(() => {
        repository = {} as MovieRepository
    })

    it('should render movies', async () => {
        repository.getPopular = vi.fn().mockResolvedValue({
            data: [
                {
                    id: 1,
                    title: 'Inception',
                    rating: 5,
                    img: 'inception.jpg',
                    releaseDate: new Date(),
                    popularity: 5,
                } as Movie,
            ],
        } as MoviesView)

        const { getByText, getByAltText } = render(
            <PopularMovies repository={repository} />
        )

        await waitFor(() => {
            expect(getByText('Inception')).toBeInTheDocument()
            expect(getByText('☆ 5')).toBeInTheDocument()
            expect(getByAltText('Inception')).toBeInTheDocument()
        })
    })
})
