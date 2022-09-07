import { ReactNode } from 'react'
import './button.scss'

interface IProps {
    /* NB: children are required */
    children: ReactNode
}

export const PrimaryButton = ({ children }: IProps): JSX.Element => (
    <button className="primary-button">{children}</button>
)
