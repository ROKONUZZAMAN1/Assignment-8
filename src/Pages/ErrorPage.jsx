import React from 'react';
import Footer from '../Component/Footer';
import Navbar from '../Component/Navbar';
import { useRouteError } from 'react-router';

const ErrorPage = () => {
    const Error = useRouteError()
    return (
        <div>

            <div>{Error.message}</div>

        </div>
    );
};

export default ErrorPage;