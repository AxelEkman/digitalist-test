import React, { useEffect } from 'react'
import './navbar.scss'
import { Logo } from './Logo'
import { SearchIcon } from './SearchIcon'
import { MenuIcon } from './MenuIcon'
import { Cancel } from './Cancel'
import { LogoSmall } from './LogoSmall'

export const Navbar = (): JSX.Element => {
    const [isSearchOpen, setIsSearchOpen] = React.useState<boolean>(false)
    const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false)
    const [screenWidth, setScreenWidth] = React.useState<any>(window.innerWidth)

    const updateMedia = () => {
        setScreenWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', updateMedia)
        return () => window.removeEventListener('resize', updateMedia)
    })

    /* TODO: 
    - make menu
    - add animations
    - make search cancel remove input
    */

    return (
        <div className="navbar">
            <a href="/">{screenWidth > 600 ? <Logo /> : <LogoSmall />}</a>
            <div style={{ display: 'flex' }}>
                {isSearchOpen && (
                    <div className="search-bar">
                        <form onSubmit={() => setIsSearchOpen(!isSearchOpen)}>
                            <input
                                type="text"
                                className="search-term"
                                placeholder="What are you looking for?"
                            />
                        </form>
                        <div className="search-bar-icons">
                            <SearchIcon
                                height={16}
                                width={16}
                                fill={'rgba(0, 0, 0, 0.45)'}
                                style={{ marginTop: '2px' }}
                                onClick={() => setIsSearchOpen(!isSearchOpen)}
                            />
                            <Cancel
                                height={20}
                                width={20}
                                onClick={() => setIsSearchOpen(!isSearchOpen)}
                            />
                        </div>
                    </div>
                )}
                {!isSearchOpen && (
                    <SearchIcon
                        height={24}
                        width={24}
                        style={{ marginTop: '4px' }}
                        onClick={() => setIsSearchOpen(!isSearchOpen)}
                    />
                )}
                <MenuIcon
                    style={{ marginTop: '2px' }}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                />
                {isMenuOpen && <div className="menu-bar"></div>}
            </div>
        </div>
    )
}
