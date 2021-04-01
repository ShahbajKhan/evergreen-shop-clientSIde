import React from 'react';

const OrderView = (props) => {
    const { name, price, weight, imageURL } = props.order.product;
    const { displayName, email, orderTime } = props.order;
    return (
        <tbody>
            <tr>
                <td >{name}</td>
                <td >{weight}</td>
                <td>1</td>
                <td>{orderTime}</td>
                <td>{price}</td>
            </tr>
        </tbody>


    );
};

export default OrderView;