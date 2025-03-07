import { PropsWithChildren } from 'react'
import { BrowserRouter } from 'react-router'

const AllTheProviders = ({ children }: PropsWithChildren) => {
    return <BrowserRouter>{children}</BrowserRouter>
}
export default AllTheProviders
