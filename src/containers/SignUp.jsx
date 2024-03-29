import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUp } from '../redux/users/operations';
import ImgLogoIcon from '../assets/img/icon-logo.svg';
import ImgCloseIcon from '../assets/img/icon-close.svg';
import MainImage from '../components/common/MainImage';
import {useNavigate} from "react-router"

function SignUp() {
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const closeButton = () => {
        navigate('/');
    };

    const [user_name, setUserName] = useState(''),
        [email, setEmail] = useState(''),
        [password, setPassword] = useState('');

    const inputUserName = event => {
        setUserName(event.target.value);
    };

    const inputEmail = event => {
        setEmail(event.target.value);
    };

    const inputPassword = event => {
        setPassword(event.target.value);
    };

    const signUpButton = () => {
        dispatch(signUp(user_name, email, password, navigate));
        setUserName('');
        setEmail('');
        setPassword('');
    };

    return (
        <div>
            <MainImage />
            <div class="main2">
                <div class="signin">
                    <img onClick={closeButton} class="close" src={ImgCloseIcon} alt="" />
                    <img class="logo" src={ImgLogoIcon} alt="" />

                    <p class="head">Sign up</p>
                    <p>Username</p>
                    <input type="text" onChange={inputUserName} name="" placeholder="Enter name" id="" />
                    <p>Email</p>
                    <input type="email" onChange={inputEmail} name="" placeholder="Enter email" id="" />
                    <p>Password</p>
                    <input type="password" onChange={inputPassword} name="" placeholder="Enter Password" id="" />
                    <button onClick={signUpButton} class="signup-button">
                        {' '}
                        Sign up
                    </button>
                    <div class="foot"></div>
                    <button class="text" onClick={() => navigate('/signin')}>
                        Already an Customer SignIn
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
