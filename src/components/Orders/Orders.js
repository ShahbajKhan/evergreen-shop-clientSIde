import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import OrderView from '../OrderView/OrderView';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    // Retrieve orders using mail address
    useEffect(() => {
        fetch('http://localhost:5000/orders?email=' + loggedInUser.email, {
            method: "GET",
            headers: {
                'Content-type': 'application/json',
                authorization: `Bearer ${sessionStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => setOrders(data))
    }, []);
    // calculate total bill
    let total = 0;
    {
        orders.map(order => {
            total+=parseInt(order.product.price)
            console.log(total)
        })
    }
    
    console.log(orders)
    return (
        <div className="container mt-5">
            <h5 className="mb-5">Showing orders of: {loggedInUser.email}</h5>
            <table class="table table-striped table-hover table-responsive-sm">
                <thead>
                    <tr>
                        <th scope="col">Description</th>
                        <th scope="col">Weight(gm)</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Order Time</th>
                        <th scope="col">Price($)</th>
                    </tr>
                </thead>
                {
                    orders.map(order => <OrderView order={order}></OrderView>)
                }
                <tfoot>
                    <tr className="table-warning">
                        <th >Total</th>
                        <th></th>
                        <th >{orders.length}</th>
                        <th></th>
                        <th>{total}</th>
                    </tr>
                </tfoot>
            </table>

        </div>
    );
};

export default Orders;