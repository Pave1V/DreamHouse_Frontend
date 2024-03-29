import {useNavigate} from "react-router"
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import SaleImage from '../components/common/SaleImage';
import { sellRequest } from '../redux/requests/operations';

function Sale() {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [address, setAddress] = useState(''),
        [sqft, setSqft] = useState(''),
        [age_building, setAge_building] = useState('');

    const inputAddress = e => {
        setAddress(e.target.value);
    };

    const inputSqft = e => {
        setSqft(e.target.value);
    };

    const inputAge_Building = e => {
        setAge_building(e.target.value);
    };

    const submitButton = e => {
        if(!address || !sqft || !age_building){
            return
        }
        let params = {
            address: address,
            sqft: sqft,
            age_building: age_building
        };
        dispatch(sellRequest(params, navigate));
        e.preventDefault();
        navigate('/ThankYou');
    };
    return (
        <>
            <section class="sell">
                <SaleImage />
                <article class="text">
                    <h1>Sell your home directly with Dream House</h1>
                    <p>
                        Getting a competitive cash offer from Dream House is an easy path to sell your home, with more
                        control and less prepwork. You sell your home as-is and get paid with no surprises, while we
                        take care of the rest.
                    </p>
                    <h3>Input your information to get counseling.</h3>
                </article>
                <div class="form">
                    <h2>Property Address</h2>
                    <input
                        onChange={inputAddress}
                        type="text"
                        name="address"
                        placeholder="Enter your full property address"
                        required
                    />
                    <h2>Home size</h2>
                    <input required onChange={inputSqft} type="text" name="sqft" placeholder="Enter your home size (sq. ft.)" />
                    <h2>Year built</h2>
                    <input required onChange={inputAge_Building} type="number" name="age_building" placeholder="1954" />
                    <br />
                    <input onClick={submitButton} type="submit" name="" id="" />
                </div>
            </section>
        </>
    );
}

export default Sale;
