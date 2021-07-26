import React from 'react';
import {GoogleOutlined, FacebookOutlined} from '@ant-design/icons';
import "firebase/app";

import {auth} from '../components/firebase';
import firebase from 'firebase/app';


const login =() =>{
    return(
        <div id="login-page">
            <div id="login-card">
                <h2>welcome 2 UmeeChat!</h2>
                <div
                    className="login-button google"
                    onClick={()=> auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
                >
            <GoogleOutlined/>
            Sign In With Google

                </div>
            <br/> <br/>
            <div
                    className="login-button facebook"
                    onClick={()=> auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider())}
                >
            <FacebookOutlined/>
            Sign In With Facebook

                </div>
            </div>
        </div>
    );
}
export default login;