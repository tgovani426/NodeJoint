import React from 'react'
import './CSS/Pricing.css'
import { Button } from 'react-bootstrap'
import components from '../components/Items'
import { useDispatch } from 'react-redux'
import { add } from '../store/cartSlice'

const Pricing = () => {

    const dispatch = useDispatch()

    const handelAdd = (product, quantity) => {
        dispatch(add({ product, quantity }))
    }

    return (
        <section id='Pricing'>
            <h1>Our Products</h1>

            <div id="carouselExampleControls" class="carousel carousel-dark slide" data-bs-ride="carousel">
                <div class="carousel-inner">

                    <div class="carousel-item active ">
                        <div class="row">

                            {
                                components.map((item, index) => {
                                    if (index < 3) {
                                        return (
                                            <div class="col-lg-4">
                                                <div class="card text-bg-secondary" key={index}>
                                                    <img src={item.img} class="card_img card-img-top" alt="..." />
                                                    <div class="card-body">
                                                        <h5 class="card-title">{item.name}</h5>
                                                        <p class="card-text">
                                                            <p className='PriceTag'>Price: {item.price}</p>
                                                            <div class="input-group">
                                                                <input class="button--submit" value="Buy" type="submit" onClick={() => handelAdd(item)} />
                                                            </div>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                })
                            }
                        </div>
                    </div>
                    <div class="carousel-item ">
                        <div class="row">
                            {
                                components.map((item, index) => {
                                    if (index < 6 && index >= 3) {
                                        return (
                                            <div class="col-lg-4">
                                                <div class="card text-bg-secondary" key={index}>
                                                    <img src={item.img} class="card_img card-img-top" alt="..." />
                                                    <div class="card-body">
                                                        <h5 class="card-title">{item.name}</h5>
                                                        <p class="card-text">
                                                            <Button onClick={() => handelAdd(item)} >Buy</Button>
                                                        </p>

                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                })
                            }
                        </div>
                    </div>
                    <div class="carousel-item ">
                        <div class="row">
                            {
                                components.map((item, index) => {
                                    if (index >= 6 && index < 9) {
                                        return (
                                            <div class="col-lg-4">
                                                <div class="card text-bg-secondary" key={index}>
                                                    <img src={item.img} class="card_img card-img-top" alt="..." />
                                                    <div class="card-body">
                                                        <h5 class="card-title">{item.name}</h5>
                                                        <p class="card-text">
                                                            <Button onClick={() => handelAdd(item)} >Buy</Button>
                                                        </p>

                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                })
                            }
                        </div>
                    </div>
                    <div class="carousel-item ">
                        <div class="row">
                            {
                                components.map((item, index) => {
                                    if (index >= 9) {
                                        return (
                                            <div class="col-lg-4">
                                                <div class="card text-bg-secondary" key={index}>
                                                    <img src={item.img} class="card_img card-img-top" alt="..." />
                                                    <div class="card-body">
                                                        <h5 class="card-title">{item.name}</h5>
                                                        <p class="card-text">   <Button onClick={() => handelAdd(item)} >Buy</Button></p>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                })
                            }
                        </div>
                    </div>

                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

        </section>

    )
}
export default Pricing 