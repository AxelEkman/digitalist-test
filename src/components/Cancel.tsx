import './button.scss'

interface IProps {
    onClick: () => void
    className?: string
    height?: string | number
    width?: string | number
}

export const Cancel = ({
    onClick = () => {},
    className = 'cancel-button',
    height = 32,
    width = 32,
}: IProps) => (
    <button className={className} onClick={onClick}>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -256 1792 1792"
            id="svg3013"
            version="1.1"
            height={height}
            width={width}
            fill="rgba(0, 0, 0, 0.45)"
        >
            <defs id="defs3021" />
            <path
                d="m 1149,414 q 0,26 -19,45 l -181,181 181,181 q 19,19 19,45 0,27 -19,46 l -90,90 q -19,19 -46,19 -26,0 -45,-19 L 768,821 587,1002 q -19,19 -45,19 -27,0 -46,-19 l -90,-90 q -19,-19 -19,-46 0,-26 19,-45 L 587,640 406,459 q -19,-19 -19,-45 0,-27 19,-46 l 90,-90 q 19,-19 46,-19 26,0 45,19 L 768,459 949,278 q 19,-19 45,-19 27,0 46,19 l 90,90 q 19,19 19,46 z m 387,226 Q 1536,431 1433,254.5 1330,78 1153.5,-25 977,-128 768,-128 559,-128 382.5,-25 206,78 103,254.5 0,431 0,640 0,849 103,1025.5 206,1202 382.5,1305 559,1408 768,1408 977,1408 1153.5,1305 1330,1202 1433,1025.5 1536,849 1536,640 z"
                id="path3017"
            />
        </svg>
    </button>
)
