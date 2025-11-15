import React, { useState } from 'react';
import { useProducts } from '../../Hook/useProducts';
import { NavLink, useParams } from 'react-router';
import { toast } from 'react-toastify';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SkeletonLoader from '../../SkeletonLoader/SkeletonLoader';
import ErrorPage from '../ErrorPage';
const AppDetails = () => {

    const [installed, setInstalled] = useState(false)

    const handleInstalled = () => {
        setInstalled(true)
        alert('Are you agree to install ?')
        toast('install successfully')





    }
    const { products, loading, error } = useProducts()
    const { id } = useParams()
    const product = products.find(p => String(p.id) === id)
    console.log(product)
    if (!product) {
        return <ErrorPage />
    }
    if (loading) {
        return SkeletonLoader
    }
    if (error) {
        return <ErrorPage />
    }
    const { ratingAvg, downloads, image, title, reviews, description } = product;





    return (
        <div>
            <div className='my-10 flex justify-between items-center border-2 border-amber-400 rounded-2xl p-5'>
                <div className="card bg-base-100  shadow-sm">
                    <figure>
                        <img
                            className='h-[100px]'
                            src={image}
                            alt="Shoes" />
                    </figure>

                </div>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p className="font-semibold  ">Reviews :{reviews}</p>
                    <p>{description}</p>

                    <div className="card-actions justify-between">
                        <button className="btn  ">{downloads}</button>
                        <button className="btn  ">{ratingAvg}</button>

                    </div>

                    <button

                        onClick={
                            handleInstalled}

                        disabled={installed}
                        className="btn w-5/12 mx-auto bg-amber-700 rounded-3xl text-white ">{installed ? 'Installed' : 'Install'}</button>

                    <ToastContainer></ToastContainer>
                </div>
            </div>
        </div>
    );
};

export default AppDetails;