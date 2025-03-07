import { render } from '../../../../../test/utils.ts'
import { MyRoute, Nav } from './Nav.tsx'
import { userEvent } from '@testing-library/user-event'

describe('Nav', () => {
    it('should render routes', () => {
        const routes: MyRoute[] = [
            {
                route: '/',
                name: 'Home',
            } as MyRoute,
        ]

        const { getByText } = render(<Nav routes={routes} />)

        const homeLink = getByText('Home')
        expect(homeLink).toBeInTheDocument()
        expect(homeLink).toHaveAttribute('href', '/')

        userEvent.click(homeLink)
        expect(homeLink).toHaveClass('nav__link--active')
    })
})
