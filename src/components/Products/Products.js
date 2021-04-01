import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Products = (props) => {
    const { name, price, weight, _id } = props.product;
    const deleteProduct = (id) => {
        fetch(`https://strawberry-pie-51996.herokuapp.com/deleteProduct/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(result => console.log('server side response', result))
    }
    return (
        
        <tbody>
        <tr>
            <td >{name}</td>
            <td >{weight}</td>
            
            
            <td>{price}</td>
            <td><button className="btn btn-success" onClick={() => deleteProduct(_id)}><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon> Delete</button></td>
        </tr>
    </tbody>
    );
};

export default Products;