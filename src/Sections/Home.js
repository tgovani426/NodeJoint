import React from 'react'
import '../Sections/CSS/Home.css'

import Pricing from './Pricing'
import Testimonials from './Testimonials'


const Home = () => {
    return (
        <>
            <section id='Home' className='HomeContainer' >
                <p className='WelcomeNote'>
                    Welcome to NodeJoint
                </p>
                <p id='WelcomeSubtitle'>NodeJoint is an IoT company focused on creating accessible and innovative learning kits and products for individuals interested in microcontrollers and IoT. We are committed to education, community, sustainability, and social responsibility. Our goal is to make IoT technology accessible and affordable for everyone, and we are continuously developing new products and services to achieve this goal.</p>
            </section >
           
            <Pricing />
            <Testimonials />
        </>
    )
}
export default Home 