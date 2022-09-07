import React from 'react'
import './App.scss'
import { Navbar } from './components/Navbar'
import { Placeholder } from './components/Placeholder'

function App() {
    return (
        <div className="app">
            <Navbar />
            <div>
                <Placeholder className="hero-image" />
            </div>
        </div>
    )
}

export default App
