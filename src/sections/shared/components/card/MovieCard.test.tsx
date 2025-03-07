import { render } from '../../../../../test/utils.ts'
import { MovieCard } from './MovieCard.tsx'
import { Movie } from '../../../../modules/movies/domain/Movie.ts'

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

        const { getByText, getByAltText } = render(<MovieCard movie={movie} />)

        expect(getByText('Inception')).toBeInTheDocument()
        expect(getByText('☆ 5')).toBeInTheDocument()
        expect(getByAltText('Inception')).toBeInTheDocument()
    })
})
