import React from 'react'
import { auth, provider } from '../firebase'
import './LogIn.css'
import { useStateValue } from '../Redux/StateProvider'
import { actionTypes } from '../Redux/reducer'

function LogIn() {
    const [state, dispatch] = useStateValue()

    const SignIn = () => {
        auth.signInWithPopup(provider)
        .then(result => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
        })
        .catch(error => alert(error.message))
    }

    return (
        <div className="LogIn">
            <img src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512" 
                alt="facebook logo" 
                className="fb--logo"
            />

            <button type="submit" className="auth_btn" onClick={SignIn}>Sign In</button>

        </div>
    )
}

export default LogIn
