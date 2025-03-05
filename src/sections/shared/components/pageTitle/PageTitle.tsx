import { PropsWithChildren } from 'react'
import './PageTitle.css'

export function PageTitle({ children }: PropsWithChildren) {
    return <h1 className="page-title">{children}</h1>
}
