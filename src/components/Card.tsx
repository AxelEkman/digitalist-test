import { PrimaryButton } from './PrimaryButton'
import './card.scss'

interface IProps {
    description: string
    image?: string
    alt?: string
    className?: string
}

export const Card = ({
    description,
    image = '',
    alt = 'Alt lorem ipsum',
    className = 'default-card',
}: IProps): JSX.Element => (
    <div className={className}>
        <img src={image} alt={alt} className="card-image" />
        <div className="card-description">{description}</div>
        <PrimaryButton>Read more</PrimaryButton>
    </div>
)
