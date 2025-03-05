import { PropsWithChildren } from 'react'
import './Section.css'

interface SectionProps {
    title: string
    amountElements: number
}

export function Section({
    title,
    amountElements,
    children,
}: PropsWithChildren<SectionProps>) {
    return (
        <section className="section">
            <h2 className="section__title">
                {title}
                <span className="section__amount-elements">
                    {' (' + amountElements})
                </span>
            </h2>
            <div className="section__content">{children}</div>
        </section>
    )
}
