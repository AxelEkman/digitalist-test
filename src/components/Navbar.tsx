import React, { useEffect } from 'react'
import './navbar.scss'
import './button.scss'
import { Logo } from './Logo'
import { SearchIcon } from './SearchIcon'
import { MenuIcon } from './MenuIcon'
import { Cancel } from './Cancel'
import { LogoSmall } from './LogoSmall'
import { menuItems } from '../constants'

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
                            <Cancel
                                height={16}
                                width={16}
                                onClick={() => setIsSearchOpen(!isSearchOpen)}
                            />
                            <SearchIcon
                                height={16}
                                width={16}
                                style={{ marginTop: '2px', paddingRight: '0' }}
                                onClick={() => setIsSearchOpen(!isSearchOpen)}
                            />
                        </div>
                    </div>
                )}
                {!isSearchOpen && (
                    <div className="inactive-search-bar">
                        <SearchIcon
                            height={16}
                            width={16}
                            style={{ marginTop: '2px', paddingRight: '0' }}
                            onClick={() => setIsSearchOpen(!isSearchOpen)}
                        />
                    </div>
                )}
                <MenuIcon
                    style={{ marginTop: '2px' }}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                />
                {isMenuOpen && (
                    <div className="menu-bar">
                        {menuItems.map((item) => {
                            return (
                                <div className="menu-bar-column">
                                    <h2 className="menu-bar-column-heading">
                                        {item.heading}
                                    </h2>
                                    {item.content.map((piece) => {
                                        return (
                                            <div className="menu-bar-content">
                                                {piece}
                                            </div>
                                        )
                                    })}
                                </div>
                            )
                        })}
                        <Cancel
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="menu-bar-cancel-button"
                            fill="white"
                        />
                    </div>
                )}
            </div>
        </div>
    )
}
