import './App.scss'
import { Arrow } from './components/Arrow'
import { Card } from './components/Card'
import { CTAModal } from './components/CTAModal'
import { Navbar } from './components/Navbar'
import { features, modalText } from './constants'

const handleArrowClick = () => {
    const endOfPageRef = document.getElementById('features')
    if (endOfPageRef !== null) {
        endOfPageRef.scrollIntoView({ behavior: 'smooth' })
    }
}

function App() {
    return (
        <div className="app">
            <div className="hero">
                <Navbar />
                <CTAModal description={modalText} />
                <Arrow onClick={() => handleArrowClick()} />
                <div className="hero-image" />
            </div>
            <div className="features" id="features">
                {features.map((feature) => (
                    <Card key={feature.id} description={feature.description} />
                ))}
            </div>
        </div>
    )
}

export default App
