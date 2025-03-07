import { MovieView } from '../../../../modules/movies/domain/MovieView.ts'
import { render } from '@testing-library/react'
import { MovieCardList } from './MovieCardList.tsx'

describe('MovieView MovieCard List', () => {
    it('should render movies', () => {
        const movies: MovieView[] = [
            {
                id: 1,
                title: 'Inception',
                rating: 5,
                img: 'inception.jpg',
                releaseDate: new Date(),
                popularity: 5,
            } as MovieView,
        ]

        const { getByText, getByAltText } = render(
            <MovieCardList movies={movies} />
        )

        expect(getByText('Inception')).toBeInTheDocument()
        expect(getByText('☆ 5')).toBeInTheDocument()
        expect(getByAltText('Inception')).toBeInTheDocument()
    })
})
