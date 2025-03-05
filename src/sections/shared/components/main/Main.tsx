import { PropsWithChildren } from 'react'
import './Main.css'

export function Main({ children }: PropsWithChildren) {
    return <main className="main">{children}</main>
}
