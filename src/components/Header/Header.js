import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../components/Login/firebase.config";

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const signOut = () => {
        firebase.auth().signOut().then(res => {
            const signedOutUser = {
                isSignedIn: false,
                name: '',
                photo: '',
                email: '',
                error: '',
                success: false
            }
            setLoggedInUser(signedOutUser) ;
        }).catch(err => {
            console.log(err);
            console.log(err.message)
        })
    };
    
    const name = loggedInUser.displayName;
    
    return (
        <div className="container mb-5">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <h1 className="navbar-brand" href="#">Evergreen Shop</h1>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link to="/home" className="nav-link">Home</Link>
                            <Link to="/orders" className="nav-link">Orders</Link>
                            <Link to="/admin" className="nav-link">Admin</Link>
                            <Link to="/home" className="nav-link">Deals</Link>
                            
                            {
                                loggedInUser.email ? <button className="btn btn-warning me-2" onClick={signOut}>Log Out</button>:<Link to="/login" className="btn btn-success">Login</Link>
                            }
                            {name && <button className="btn btn-success">{name}</button>}
                            
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;