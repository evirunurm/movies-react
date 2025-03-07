import { Movie } from '../../../../modules/movies/domain/Movie.ts'
import { render } from '@testing-library/react'
import { Card } from './Card.tsx'

describe('Card', () => {
    it('should render movie details', () => {
        const movie: Movie = {
            id: 1,
            title: 'Inception',
            rating: 5,
            img: 'inception.jpg',
            releaseDate: new Date(),
            popularity: 5,
        }

        const { getByText } = render(<Card movie={movie} />)

        expect(getByText('Inception')).toBeInTheDocument()
    })
})
