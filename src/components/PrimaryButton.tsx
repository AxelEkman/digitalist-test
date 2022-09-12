import { ReactNode } from 'react'
import './button.scss'

interface IProps {
    /* NB: children are required */
    children: ReactNode
    onClick: () => void
}

export const PrimaryButton = ({
    children,
    onClick = () => {},
}: IProps): JSX.Element => (
    <button onClick={onClick} className="primary-button">
        {children}
    </button>
)
