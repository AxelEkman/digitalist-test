import './App.scss'
import { Card } from './components/Card'
import { CTAModal } from './components/CTAModal'
import { Navbar } from './components/Navbar'
import { Placeholder } from './components/Placeholder'
import html5Image from './assets/html5.png'
import cssImage from './assets/css.png'
import jsImage from './assets/js.png'

const modalText =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lorem ante, cursus viverra sagittis quis, hendrerit eget dolor.'

const features = [
    {
        id: 'HTML5',
        description: 'HTML5 is a markup language lorem ipsum',
        image: html5Image,
    },
    {
        id: 'CSS',
        description: 'Cascading style sheets is a style sheet lorem ipsum',
        image: cssImage,
    },
    {
        id: 'JS',
        description: 'JavaScript, often abbreviated as JS, is a lorem ipsum',
        image: jsImage,
    },
]

function App() {
    return (
        <div className="app">
            <div className="hero">
                <Navbar />
                <CTAModal description={modalText} />
                <Placeholder className="hero-image" />
            </div>
            <div className="features">
                {features.map((feature) => (
                    <Card
                        key={feature.id}
                        description={feature.description}
                        image={feature.image}
                    />
                ))}
            </div>
        </div>
    )
}

export default App
