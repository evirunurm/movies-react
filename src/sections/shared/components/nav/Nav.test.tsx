import { render } from '../../../../../test/utils.ts'
import { MyRoute, Nav } from './Nav.tsx'

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

        const clickEvent = new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
        })
        homeLink.dispatchEvent(clickEvent)
        expect(homeLink).toHaveClass('nav__link--active')
    })
})
