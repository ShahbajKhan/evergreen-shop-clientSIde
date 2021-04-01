import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Products from '../Products/Products';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    const [spinner, setSpinner] = useState(true);
    // Loading products from server making a get request
    useEffect(() => {
        fetch('https://strawberry-pie-51996.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setSpinner(false);
            })
    }, [])
    return (
        <div >
            <h1>Manage Products</h1>
            {
                spinner && <div class="text-center">
                    <div class="spinner-grow" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
            }
            <table class="table table-striped table-hover table-responsive-sm">
                <thead>
                    <tr>
                        <th scope="col">Description</th>
                        <th scope="col">Weight(gm)</th>
                        <th scope="col">Price($)</th>
                        <th scope="col">Action</th>

                    </tr>
                </thead>
                {
                    products.map(product => <Products product={product}></Products>)
                }
            </table>
        </div>
    );
};

export default ManageProducts;