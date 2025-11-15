import React from 'react';
import Footer from '../Component/Footer';
import Navbar from '../Component/Navbar';
import { useRouteError } from 'react-router';
import errorImg from '../assets/App-Error.png'

const ErrorPage = () => {
    const Error = useRouteError()
    return (
        <div className='flex justify-center'>

            <img src={errorImg} alt="" />



        </div>
    );
};

export default ErrorPage;