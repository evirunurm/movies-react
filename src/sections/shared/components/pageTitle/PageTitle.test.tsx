import { render } from '../../../../../test/utils.ts'
import { PageTitle } from './PageTitle.tsx'

describe('Page Title', () => {
    it('should render title', () => {
        const { getByText } = render(<PageTitle>Title</PageTitle>)

        expect(getByText('Title')).toBeInTheDocument()
    })
})
