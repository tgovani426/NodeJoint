import React from 'react'
import './CSS/Testimonials.css'
import p_1 from '../Media/people/P_1.png'

const Testimonials = () => {
    return (
        <section id='Testimonial'>

            <h1 className='Testimonial_title'>Testimonials</h1>
            <div className="row mx-auto my-auto">
                <div id='testimonialCarousel' class="carousel carousel-dark slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active ">
                            <div className="row">
                                <div class="card row" >
                                    <img src={p_1} class="card_img card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Card 1</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                                <div class="card row" >
                                    <img src={p_1} class="card_img card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Card 1</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                                <div class="card row" >
                                    <img src={p_1} class="card_img card_img card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Card 1</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                                <div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item  ">
                            <div className="row">
                                <div class="card row" >
                                    <img src={p_1} class="card_img card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Card 1</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                                <div class="card row" >
                                    <img src={p_1} class="card_img card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Card 1</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                                <div class="card row" >
                                    <img src={p_1} class="card_img card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Card 1</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                                <div>
                                </div>
                            </div>
                        </div>





                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </section >
    )
}
export default Testimonials 