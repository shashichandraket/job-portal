import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import InputFrom from '../components/shared/InputFrom';
import { hideLoading, showLoading } from '../redux/features/alertSlice';

const Register = () => {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //hooks
    const dispatch = useDispatch()
    //form function
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            dispatch(showLoading())
            const { data } = await axios.post('/api/v1/auth/register', { name, lastName, email, password })
            dispatch(hideLoading())
            if (data.success) {
                alert()
            }
        }
        catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            < div className="form-container">
                <form className="card p-2" onSubmit={handleSubmit}>
                    <img src="/assets/images/logo/logo.jpg"
                        alt="logo"
                        height={200}
                        width={400}
                    />


                    <InputFrom
                        htmlFor="name"
                        labelText={'Name'}
                        type={'text'}
                        value={name}
                        handleChange={(e) => setName(e.target.value)}
                        name="name"
                    />
                    <InputFrom
                        htmlFor="lastName"
                        labelText={'Last Name'}
                        type={'text'}
                        value={lastName}
                        handleChange={(e) => setLastName(e.target.value)}
                        name="lastname"
                    />
                    <InputFrom
                        htmlFor="email"
                        labelText={'Email'}
                        type={'email'}
                        value={email}
                        handleChange={(e) => setEmail(e.target.value)}
                        name="email"
                    />
                    <InputFrom
                        htmlFor="password"
                        labelText={'Password'}
                        type={'password'}
                        value={password}
                        handleChange={(e) => setPassword(e.target.value)}
                        name="password"
                    />

                    <div className="d-flex justify-content-between">
                        <p>Already Register <Link to="/login">Login</Link></p>
                        <button type="submit" className="btn btn-primary">Register</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Register;
