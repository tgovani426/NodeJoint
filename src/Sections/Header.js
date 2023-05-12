import React from 'react'
import NavBar from '../components/NavBar'
import logo from '../Media/icon.svg'

const Header = () => {
    const attributes = [
        'Home', 'Features', 'Pricing', 'Testimonial'
    ]
    return (
        <>
            <NavBar logo={logo} title='NodeJoint' attributes={attributes} />
        </>
    )
}
export default Header 