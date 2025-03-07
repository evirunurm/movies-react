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

        const { getByLabelText, queryByLabelText } = render(
            <PopularMovies repository={repository} />
        )

        await waitFor(async () => {
            const heartButton = getByLabelText('Add to favorites')
            let nonFavoriteIcon = queryByLabelText('Not favorite')
            let favoriteIcon = queryByLabelText('Favorite')

            // Check that the heart button is rendered with the correct icon
            expect(nonFavoriteIcon).toBeInTheDocument()
            expect(favoriteIcon).toBeNull()

            // Check that the postPopular method is called when the heart button is clicked
            await userEvent.click(heartButton)
            expect(repository.postPopular).toHaveBeenCalled()

            // Check that the heart button is rendered with the correct icon after clicking
            nonFavoriteIcon = queryByLabelText('Not favorite')
            favoriteIcon = queryByLabelText('Favorite')
            expect(nonFavoriteIcon).toBeNull()
            expect(favoriteIcon).toBeInTheDocument()
        })
    })
})
