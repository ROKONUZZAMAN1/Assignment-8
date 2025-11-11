import React from 'react';
import { useProducts } from '../../Hook/useProducts';
import { useParams } from 'react-router';

const AppDetails = () => {

    const { products, loading, error } = useProducts()
    const { id } = useParams()
    const product = products.find(p => String(p.id) === id)
    console.log(product)
    if (loading) {
        return <p>loading ---------------</p>
    }
    if (error) {
        return error.message;
    }
    const { ratingAvg, downloads, image, title, reviews, description } = product

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
                </div>
            </div>
        </div>
    );
};

export default AppDetails;