import React from 'react'
import Navbar from './Navbar'
import '../styles/globals.css'

export default function Layout({ children }) {
    return (
        <div className="Layout">
            <Navbar />
            <div className="content">
                {children}
            </div>
            <footer>
                <p>Copyright 2021 Techie Portfolio</p>
            </footer>
        </div>
    )
}
