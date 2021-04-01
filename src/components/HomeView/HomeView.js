import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { UserContext } from '../../App';

const HomeView = (props) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [orderedProduct, setOrderedProduct] = useState([])
    const { name, imageURL, price, weight, _id } = props.product;
    // use dynamic route for sending data to checkout page
    let history = useHistory();
    const orderProduct = (id) => {
        console.log(id);
        history.push(`/placeOrder/${id}`)
    }
    return (
        <div className="mb-3 col-lg-4 col-sm-6">
            <div className="card shadow-lg w-100 h-100 text-center rounded">
                <div className="d-flex justify-content-center align-items-center h-75 p-2">
                    <img src={imageURL} className="card-img-top h-75 w-75" />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                </div>
                <div className="card-footer">
                    <div className="d-flex align-items-center justify-content-between ">
                        <h3 className="text-warning fw-bold">$ {price}</h3>
                        <button className="btn btn-success" onClick={() => orderProduct(_id)}>Buy Now</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default HomeView;