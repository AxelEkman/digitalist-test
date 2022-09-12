import React from 'react'
import './navbar.scss'
import { Logo } from './Logo'
import { SearchIcon } from './Search'
import { MenuIcon } from './MenuIcon'

export const Navbar = (): JSX.Element => {
    const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false)
    const [isSearchOpen, setIsSearchOpen] = React.useState<boolean>(false)

    const handleMenuClicked = () => {
        setIsMenuOpen(!isMenuOpen)
        alert(isMenuOpen)
    }

    return (
        <div className="navbar">
            <Logo style={{ alignSelf: 'center' }} />
            <div style={{ display: 'flex' }}>
                <SearchIcon onClick={() => handleMenuClicked()} />
                <MenuIcon onClick={() => handleMenuClicked()} />
                {isMenuOpen && <div className="menu-bar"></div>}
            </div>
        </div>
    )
}
