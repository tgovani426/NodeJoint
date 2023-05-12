import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './CSS/NavBar.css'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const NavBar = ({ logo, title, attributes }) => {

    const cart = useSelector(state => state.cart)

    return (
        <>
            <nav class="navbar  navbar-expand-lg fixed-top bg-dark bg-body-tertiary" data-bs-theme="dark">
                <div class="container-fluid">
                    <Link class="navbar-brand" to="/">
                        <img
                            alt=""
                            src={logo}
                            width="30"
                            height="30"
                        // className="d-inline-block align-top"
                        />
                        {title}
                    </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                            {
                                attributes.map((item, key) => {

                                    return <a href={`/#${item}`} key={key} >{item}</a>
                                })
                            }
                        </ul>

                    </div>
                </div>
                <Link to='/cart' className='cart' >
                    <button  type="button btn-nav" class="btn btn-light cart-btn">Add to Cart <span class="bi bi-cart" /></button>
                    <span className='bagSize'>{cart.products.length > 0 ? `${cart.products.length}` : ''}</span>
                </Link>

            </nav>

        </>
    )
}
export default NavBar 