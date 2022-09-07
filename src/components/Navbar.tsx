import React from 'react'
import './navbar.scss'
import { Logo } from './Logo'
import { Search } from './Search'
import { Menu } from './Menu'

export const Navbar = () => (
    <div className="navbar">
        <Logo />
        <Search />
        <Menu />
    </div>
)
