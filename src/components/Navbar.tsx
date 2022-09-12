import React from 'react'
import './navbar.scss'
import { Logo } from './Logo'
import { SearchIcon } from './SearchIcon'
import { MenuIcon } from './MenuIcon'

export const Navbar = (): JSX.Element => {
    const [isSearchOpen, setIsSearchOpen] = React.useState<boolean>(false)
    const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false)

    const handleSearchClicked = () => {
        setIsSearchOpen(!isSearchOpen)
        alert(isSearchOpen)
    }

    const handleMenuClicked = () => {
        setIsMenuOpen(!isMenuOpen)
        alert(isMenuOpen)
    }

    return (
        <div className="navbar">
            <Logo style={{ alignSelf: 'center' }} />
            <div style={{ display: 'flex' }}>
                <SearchIcon onClick={() => handleSearchClicked()} />
                <MenuIcon onClick={() => handleMenuClicked()} />
                {isMenuOpen && <div className="menu-bar"></div>}
            </div>
        </div>
    )
}
