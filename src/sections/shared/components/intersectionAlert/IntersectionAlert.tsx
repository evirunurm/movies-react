import { PropsWithChildren, useEffect, useRef } from 'react'

type IntersectionAlertProps = {
    callback: (entries: IntersectionObserverEntry[]) => void
    stopAlert?: boolean
}

export function IntersectionAlert({
    children,
    callback,
    stopAlert = false,
}: PropsWithChildren<IntersectionAlertProps>) {
    const observerTarget = useRef(null)

    useEffect(() => {
        if (!stopAlert) {
            const observer = new IntersectionObserver(callback, {
                threshold: 1,
            })

            if (observerTarget.current) observer.observe(observerTarget.current)

            return () => {
                if (observerTarget.current)
                    observer.unobserve(observerTarget.current)
            }
        }
    }, [observerTarget, callback, stopAlert])

    return (
        <>
            {children}
            <div ref={observerTarget}></div>
        </>
    )
}
