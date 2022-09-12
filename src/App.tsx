import React from 'react'
import './App.scss'
import { Arrow } from './components/Arrow'
import { Card } from './components/Card'
import { CTAModal } from './components/CTAModal'
import { Navbar } from './components/Navbar'

const modalText =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lorem ante, cursus viverra sagittis quis, hendrerit eget dolor.'

const features = [
    {
        id: 'HTML5',
        description:
            'HTML5 is a markup language lorem ipsum that is used for lorem ipsum.',
    },
    {
        id: 'CSS',
        description:
            'Cascading style sheets is a style sheet lorem ipsum that is used for lorem ipsum.',
    },
    {
        id: 'JS',
        description:
            'JavaScript, often abbreviated as JS, is a lorem ipsum that is used for lorem ipsum.',
    },
]

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
