import { render, waitFor } from '@testing-library/react'
import { PopularMovies } from './PopularMovies.tsx'
import { MovieRepository } from '../../../modules/movies/domain/MovieRepository.ts'
import { MoviesView } from '../../../modules/movies/domain/MoviesView.ts'
import { MovieView } from '../../../modules/movies/domain/MovieView.ts'
import { vi } from 'vitest'
import { userEvent } from '@testing-library/user-event'

describe('Popular Movies', () => {
    let repository: MovieRepository

    beforeEach(() => {
        repository = {
            getFavorite: vi.fn(),
            postPopular: vi.fn(),
            deletePopular: vi.fn(),
            getPopular: vi.fn().mockResolvedValue({
                data: [
                    {
                        id: 1,
                        title: 'Inception',
                        rating: 5,
                        img: 'inception.jpg',
                        releaseDate: new Date(),
                        popularity: 5,
                    } as MovieView,
                ],
            } as MoviesView),
        } as MovieRepository
    })

    it('should render movies', async () => {
        const { getByText, getByAltText } = render(
            <PopularMovies repository={repository} />
        )

        await waitFor(() => {
            expect(getByText('Inception')).toBeInTheDocument()
            expect(getByText('☆ 5')).toBeInTheDocument()
            expect(getByAltText('Inception')).toBeInTheDocument()
        })
    })

    it('should allow add movies to favorites', async () => {
        repository.postPopular = vi.fn()

        const { getByText } = render(<PopularMovies repository={repository} />)

        await waitFor(() => {
            const heart = getByText('♥')
            expect(heart).toBeInTheDocument()
            userEvent.click(heart)
            expect(repository.postPopular).toHaveBeenCalled()
        })
    })
})
