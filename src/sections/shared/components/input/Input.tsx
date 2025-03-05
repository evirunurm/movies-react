import { InputHTMLAttributes } from 'react'
import './Input.css'

export function Input(props: InputHTMLAttributes<HTMLInputElement>) {
    return <input className="input" {...props} type="text" />
}
