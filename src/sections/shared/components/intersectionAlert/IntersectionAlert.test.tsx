import { render } from '@testing-library/react'
import { IntersectionAlert } from './IntersectionAlert.tsx'
import { vi } from 'vitest'

describe('Intersection Alert', () => {
    it('should execute callback', () => {
        window.IntersectionObserver = vi
            .fn()
            .mockImplementation((callback) => ({
                observe: () => {
                    callback()
                },
            }))
        const callback = vi.fn()
        render(
            <IntersectionAlert callback={callback}>
                <div>Content</div>
                <div>Content</div>
                <div>Content</div>
            </IntersectionAlert>
        )
        expect(callback).toHaveBeenCalled()
    })
})
