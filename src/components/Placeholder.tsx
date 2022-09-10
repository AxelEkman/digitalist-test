import './placeholder.scss'

interface IProps {
    className?: string
}

export const Placeholder = ({ className = 'default' }: IProps) => (
    <svg
        width="auto"
        height="auto"
        viewBox="0 0 242 146"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        opacity="0.4"
    >
        <path d="M1 1L241 145" stroke="black" />
        <path d="M241 1L1 145" stroke="black" />
        <rect x="1.5" y="1.5" width="239" height="143" stroke="black" />
    </svg>
)
