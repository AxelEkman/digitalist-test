import React from 'react'
import './navbar.scss'
import { Logo } from './Logo'
import { Search } from './Search'
import { Menu } from './Menu'

export const Navbar = (): JSX.Element => (
    <div className="navbar">
        <Logo style={{ alignSelf: 'center' }} />
        <div style={{ display: 'flex' }}>
            <Search />
            <Menu />
        </div>
    </div>
)
