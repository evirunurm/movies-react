import { createApiMovieRepository } from './modules/movies/infrastructure/ApiMovieRepository.ts'
import { MovieRepository } from './modules/movies/domain/MovieRepository.ts'

import { MoviesContextProvider } from './sections/movies/popularMovies/MoviesContext.tsx'
import { PopularMovies } from './sections/movies/popularMovies/PopularMovies.tsx'

function App() {
    const moviesRepository: MovieRepository = createApiMovieRepository()

    return (
        <>
            <MoviesContextProvider repository={moviesRepository}>
                <PopularMovies />
            </MoviesContextProvider>
        </>
    )
}

export default App
