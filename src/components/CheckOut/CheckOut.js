import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../App';
import Header from '../Header/Header';

const CheckOut = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    // console.log(loggedInUser)
    useEffect(() => {
        fetch(`http://localhost:5000/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    const placeOrder = () => {
        const newOrder = { ...loggedInUser, product: product, orderTime: new Date().toDateString('dd/MM/yyyy') };
        fetch('http://localhost:5000/addOrder',{
            method:"POST",
            headers:{'Content-type': 'application/json'},
            body: JSON.stringify(newOrder)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }
    return (
        <div className="container">
            
            <h1 className="my-5 text-center">CHECKOUT</h1>
            <div className="card shadow p-5 mt-5">
                <table class="table table-striped table-hover table-responsive-sm">
                    <thead>
                        <tr>
                            <th scope="col">Description</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td >{product.name}</td>
                            <td>1</td>
                            <td>{product.price}</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr className="table-warning">
                            <th>Total</th>
                            <th>1</th>
                            <th>{product.price}</th>
                        </tr>
                    </tfoot>
                </table>
                <button className="btn btn-dark text-warning py-3" onClick={placeOrder}>Checkout</button>
            </div>
        </div>
    );
};

export default CheckOut;