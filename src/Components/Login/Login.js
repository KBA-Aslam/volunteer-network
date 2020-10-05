import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import logo from './../../logos/logo.png'
import ggl from './../../logos/googleLogo.png'
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import './Login.css'

function Login() {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    
    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }
    
    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            const {displayName, email} = result.user;
            const signedInUser = {name: displayName, email} 
            setLoggedInUser(signedInUser);
            history.replace(from);
            // ...
          }).catch(function(error) {
            const errorMessage = error.message;
            console.log(errorMessage);
          });
    }


    const history = useHistory();

    const location = useLocation();

    const { from } = location.state || { from: { pathname: "/" } };
    
    if (loggedInUser.email) {
        history.replace(from)
    }

    return (
        <div className="body">
            <img src={logo} alt="logo"></img>
            <div className=" d-flex align-items-center login-box">
                <div className="">
                <h4>Login with</h4>
                <button className='login-btn d-flex align-items-center justify-content-between' onClick={handleGoogleSignIn}><img style={{width: "31px", height: "31px"}} src={ggl} alt="google"></img>Continue with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;