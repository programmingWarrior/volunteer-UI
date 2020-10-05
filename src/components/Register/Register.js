import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { UserContext } from '../../App';
import './Register.css';
import logo from '../logos/Group 1329.png';

const Register = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const { _id } = useParams();
    const [product, setProduct] = useState({});

    const { register, errors, handleSubmit } = useForm();

    useEffect(() => {
        fetch('https://glacial-brook-87015.herokuapp.com/product/'+ _id)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [_id])

    const onSubmit = data => {
        const RegisterData = {...data, ...product}
        fetch('https://glacial-brook-87015.herokuapp.com/addRegisterInfo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(RegisterData)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('your ordr placed successfully')
                }
            })
    };

    return (
        <div className="registerDiv">
            <div>
                <Link to="/Home"><img style={{ width: '20%' }} src={logo} alt=""/></Link>
            </div>
            <div className="registerForm">
                <h4>Register as a {product.name}</h4>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <input name="Name" defaultValue={loggedInUser.name} placeholder="Full Name" ref={register({ required: true })} /><br />
                        {errors.Name && <span>your name is required<br /></span>}
                    <input name="email" defaultValue={loggedInUser.email} placeholder="Username or Email" ref={register({ required: true })} /><br />
                        {errors.email && <span>your email is required<br /></span>}
                    <input name="RegisterTime" type="date" placeholder="Date" ref={register({ required: true })} /><br />
                        {errors.RegisterTime && <span>RegisterTime is required<br /></span>}
                    <input name="Description" ref={register({ required: true })} placeholder="Description" /><br />
                        {errors.Description && <span>Description is required<br /></span>}
                    <input name="VolunteerName" defaultValue={product.name} placeholder="Organize books at the library" ref={register({ required: true })} /><br />
                        {errors.VolunteerName && <span>VolunteerName is required<br /></span>}
                    
                    <input className="submitBtn" type="submit" />
                </form>
                <Link to="/volunteerActivities"><button className="submitBtn">see your all volunteer</button></Link>
            </div>
        </div>
    );
};

export default Register;