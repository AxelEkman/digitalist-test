import './card.scss'
import { Placeholder } from './Placeholder'
import { PrimaryButton } from './PrimaryButton'
interface IProps {
    description: string
    onClick: () => void
    className?: string
}

export const Card = ({
    description,
    onClick = () => {},
    className = 'default-card',
}: IProps): JSX.Element => (
    <div className={className}>
        <Placeholder className="default" />
        <div className="card-description">{description}</div>
        <PrimaryButton onClick={onClick}>Read more</PrimaryButton>
    </div>
)
