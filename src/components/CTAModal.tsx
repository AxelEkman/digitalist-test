import { PrimaryButton } from './PrimaryButton'
import './ctamodal.scss'

interface IProps {
    description: string
    onClick?: () => void
    className?: string
}

export const CTAModal = ({
    description,
    onClick = () => {},
    className = 'default-modal',
}: IProps) => (
    <div className={className}>
        <h2 className="modal-title">Experts in co-creation</h2>
        <div className="modal-text">{description}</div>
        <PrimaryButton onClick={onClick}>Read more</PrimaryButton>
    </div>
)
