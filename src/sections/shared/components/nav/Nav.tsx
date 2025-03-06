import { Link } from 'react-router-dom'
import './Nav.css'

export interface MyRoute {
    route: string
    name: string
}

interface NavProps {
    routes: MyRoute[]
}

export function Nav({ routes }: NavProps) {
    return (
        <nav className="nav">
            <img src="/src/assets/logo.png" alt="Logo" />
            <ul className="nav__list">
                {routes.map((route: MyRoute, key: number) => (
                    <Link key={key} to={route.route} className="nav__link">
                        {route.name}
                    </Link>
                ))}
            </ul>
        </nav>
    )
}
