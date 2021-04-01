import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEdit, faBars } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react';
import AddProduct from '../AddProduct/AddProduct';
import ManageProducts from '../ManageProducts/ManageProducts';

const Admin = () => {
    const [showForm, setShowForm] = useState(true);
    return (
        <div className="container" >
            <div className="row">
                {/* Display Buttons */}
                <div className="col-lg-3 col-md-12 p-0" >
                    <div className="d-flex flex-column align-items-center">
                        <button className="btn btn-dark w-100 py-5" onClick={()=>setShowForm(true)}><FontAwesomeIcon icon={faPlus}/> Add Product</button>
                        <button className="btn btn-dark w-100 py-5" onClick={()=>setShowForm(false)}><FontAwesomeIcon icon={faBars}/> Manage Product</button>
                        <button className="btn btn-dark w-100 py-5"><FontAwesomeIcon icon={faEdit}/> Edit Product</button>
                    </div>
                </div>
                {/* Display add product form or manage product */}
                <div className="col-lg-9 col-md-12">
                    {
                        showForm? <AddProduct></AddProduct>: <ManageProducts></ManageProducts>
                    }
                </div>
            </div>
        </div>
    );
};

export default Admin;