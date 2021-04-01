import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import HomeView from '../HomeView/HomeView';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [spinner, setSpinner] = useState(true);
    // Loading Data from server using get request
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setSpinner(false);
            })
    }, [])
    // products.map(product =>console.log(product.name))
    return (
        <div className="container">
            {/* Display Spinner while loading Data */}
            {
                spinner && <div class="text-center">
                    <div class="spinner-grow" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
            }
            {/* render products from server side */}
            <div className="row">
                {
                    products.map(product => <HomeView product={product}></HomeView>)
                }
            </div>
        </div>
    );
};

export default Home;