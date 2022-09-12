import './logo.scss'

interface IProps {
    style?: {}
    className?: string
}

export const LogoSmall = ({
    style = {},
    className = 'logo',
}: IProps): JSX.Element => (
    <svg
        className={className}
        viewBox="0 0 49 49"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={style}
    >
        <path
            d="M22 0C36.6667 0 44 8.16667 44 24.5C44 40.8333 36.6667 49 22 49C7.33333 49 0 40.8333 0 24.5C0 8.16667 7.33333 0 22 0Z"
            fill="url(#paint0_linear)"
        />
        <defs>
            <linearGradient
                id="paint0_linear"
                x1="8.1168"
                y1="-43.1717"
                x2="-18.6157"
                y2="35.1344"
                gradientUnits="userSpaceOnUse"
            >
                <stop />
                <stop offset="1" stopColor="#060B27" />
            </linearGradient>
        </defs>
    </svg>
)
