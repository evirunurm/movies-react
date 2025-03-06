import './Nav.css'
import { NavLink } from 'react-router'
import classNames from 'classnames'

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
                    <NavLink
                        key={key}
                        to={route.route}
                        className={({ isActive }) =>
                            classNames('nav__link', {
                                'nav__link--active': isActive,
                            })
                        }
                    >
                        {route.name}
                    </NavLink>
                ))}
            </ul>
        </nav>
    )
}
