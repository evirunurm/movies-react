import React from 'react'
import { createApiMovieRepository } from './modules/movies/infrastructure/ApiMovieRepository.ts'
import { MovieRepository } from './modules/movies/domain/MovieRepository.ts'
import { PopularMovies } from './sections/movies/popular/PopularMovies.tsx'
import { Nav, MyRoute } from './sections/shared/components/nav/Nav.tsx'
import { BrowserRouter, Route, Routes } from 'react-router'

// ComponentRoute has all properties from MyRoute and adds the component property
interface ComponentRoute extends MyRoute {
    component: React.FC
}

function App() {
    const moviesRepository: MovieRepository = createApiMovieRepository()
    const routes: ComponentRoute[] = [
        {
            route: '/',
            name: 'Home',
            component: () => (
                <PopularMovies repository={moviesRepository}></PopularMovies>
            ),
        },
        {
            route: '/popular',
            name: 'Popular',
            component: () => (
                <PopularMovies repository={moviesRepository}></PopularMovies>
            ),
        },
    ]

    return (
        <>
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
        </>
    )
}

export default App
