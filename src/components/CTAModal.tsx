import { PrimaryButton } from './PrimaryButton'
import './ctamodal.scss'

interface IProps {
    description: string
    className?: string
}

export const CTAModal = ({
    className = 'default-modal',
    description,
}: IProps) => (
    <div className={className}>
        <h2 className="modal-title">Experts in co-creation</h2>
        <div className="modal-text">{description}</div>
        <PrimaryButton>Read more</PrimaryButton>
    </div>
)
