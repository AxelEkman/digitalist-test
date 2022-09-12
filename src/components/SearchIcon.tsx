import './navbar.scss'

interface IProps {
    onClick: () => void
    className?: string
    height?: string | number
    width?: string | number
    style?: any
    fill?: string
}

export const SearchIcon = ({
    onClick = () => {},
    className = 'navbar-icon',
    height = 32,
    width = 32,
    style,
    fill = 'rgba(0, 0, 0, 0.45)',
}: IProps): JSX.Element => (
    <button className={className} onClick={onClick} style={style}>
        <svg
            height={height}
            width={width}
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 1000"
            x="0px"
            y="0px"
            fill={fill}
        >
            <path d="M978.9,928.8L700.9,648.2c57.1-68,91.6-155.6,91.6-251.3c0-216.1-175.2-391.2-391.3-391.2C185.2,5.7,10,180.8,10,396.9C10,613,185.2,788.2,401.2,788.2c92.7,0,177.7-32.4,244.7-86.2l278.3,281c7.5,7.6,17.4,11.4,27.3,11.4c9.8,0,19.6-3.7,27-11.1C993.7,968.3,993.8,943.9,978.9,928.8z M86.9,396.9c0-173.4,141-314.4,314.3-314.4s314.4,141,314.4,314.4s-141,314.4-314.4,314.4S86.9,570.2,86.9,396.9z" />
        </svg>
    </button>
)
