import React from 'react'
import './CSS/Cart.css'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { remove } from '../store/cartSlice'


const Cart = () => {
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart)
    const handelDeleteFromCart = (product) => {
        dispatch(remove(product))
    }
    return (
        <>
            <section className='cartGrid'>
                {
                    cart.products.length === 0 ? (
                        <div className="emptyCart">
                            <p>Cart is currently Empty.</p>
                            <Link to='/'> Continue Shopping </Link>
                        </div>
                    ) :
                        <table className="table ">
                            <tbody>
                                {
                                    cart.products.map((product, key) => {
                                        return (
                                            <>
                                                <tr key={key}>
                                                    <td>
                                                        <img className='cartImg' src={product.img} alt={key} />
                                                    </td>
                                                    <td>
                                                        <h5>{product.name}</h5>
                                                    </td>
                                                    <td>
                                                        <h5>Rs. {product.price}</h5>
                                                    </td>
                                                    <td>
                                                        <button className='btn delBtn' onClick={() => { handelDeleteFromCart(product) }}><i className="bi bi-trash3"></i></button>

                                                    </td>
                                                </tr>
                                            </>
                                        )
                                    })
                                }
                            </tbody>
                            <tfoot>
                                <td>Total</td>
                                <td>Rs. {cart.total_bill}</td>
                            </tfoot>
                        </table>
                }

            </section>
        </>
    )
}
export default Cart 