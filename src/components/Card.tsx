import './card.scss'
import { Placeholder } from './Placeholder'
import { PrimaryButton } from './PrimaryButton'
interface IProps {
    description: string
    className?: string
}

export const Card = ({
    description,
    className = 'default-card',
}: IProps): JSX.Element => (
    <div className={className}>
        <Placeholder className="default" />
        <div className="card-description">{description}</div>
        <PrimaryButton>Read more</PrimaryButton>
    </div>
)
