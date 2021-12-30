import React from 'react'
import Navbar from './nav'
import Footer from './footer'

const Layout = ({children}) => {
    return (
        <div>
            <Navbar />
             <main>{children}</main>
            <Footer />
        </div>
    )
}

export default Layout
