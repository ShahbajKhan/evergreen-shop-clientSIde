import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import Header from '../Header/Header';
import Products from '../Products/Products';

const AddProduct = () => {
    const [imageURL, setIMageURL] = useState(null);
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        const productData = {
            name: data.name,
            price: data.price,
            weight: data.weight,
            imageURL: imageURL
        };
        const url = `https://strawberry-pie-51996.herokuapp.com/addProduct`;

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
            .then(res => console.log('server side response', res))
    };


    const handleImageUpload = (event) => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', '7a75c14103455199f02e8a7a6aac2c7e');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                setIMageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

   

    return (
        <div className="text-center formCard bg-light">
            <h1>Add Products</h1>

            <form className="loginForm" onSubmit={handleSubmit(onSubmit)}>


                <input className="userInput form-control" name="name" placeholder="Enter Name" ref={register({ required: true })} /> <br />
                <input className="userInput form-control" name="price" placeholder="Enter Price" ref={register({ required: true })} /> <br />
                <input className="userInput form-control" name="weight" placeholder="Weight" ref={register({ required: true })} /> <br />
                <input className="userInput form-control" name="image" type="file" placeholder="Upload photo" onChange={handleImageUpload} /> <br />
                

                <input className="btn btn-dark text-warning" type="submit" />
            </form>

           
        </div>
    );
};

export default AddProduct;