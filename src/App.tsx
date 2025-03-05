import { createApiMovieRepository } from './modules/movies/infrastructure/ApiMovieRepository.ts'
import { MovieRepository } from './modules/movies/domain/MovieRepository.ts'
import { MoviesContextProvider } from './sections/movies/popularMovies/MoviesContext.tsx'
import { PopularMovies } from './sections/movies/popularMovies/PopularMovies.tsx'
import { Nav, MyRoute } from './sections/shared/components/nav/Nav.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React from 'react'

// ComponentRoute has all properties from MyRoute and adds the component property
interface ComponentRoute extends MyRoute {
    component: React.FC
}

function App() {
    const moviesRepository: MovieRepository = createApiMovieRepository()
    const routes: ComponentRoute[] = [
        { route: '/', name: 'Home', component: PopularMovies },
        { route: '/popular', name: 'Popular', component: PopularMovies },
    ]

    return (
        <>
            <MoviesContextProvider repository={moviesRepository}>
                <BrowserRouter>
                    <Nav routes={routes} />
                    <Routes>
                        {routes.map((route: ComponentRoute, key: number) => (
                            <Route
                                key={key}
                                path={route.route}
                                element={<route.component />}
                            />
                        ))}
                    </Routes>
                </BrowserRouter>
            </MoviesContextProvider>
        </>
    )
}

export default App
