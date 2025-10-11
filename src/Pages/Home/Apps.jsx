import React from 'react';
import { useProducts } from '../../Hook/useProducts';
import SkeletonLoader from '../../SkeletonLoader/SkeletonLoader';
import AllCard from '../HomeComponent/AllCard';

const Apps = () => {
    const { products, loading, error } = useProducts()

    console.log(products)
    return (
        <div>

            <div className="hero bg-base-200  ">
                <div className="hero-content text-center">
                    <div className="max-w-xl">
                        <h1 className="text-4xl font-bold">Our All Applications</h1>
                        <p className="py-6 text-gray-500">
                            Explore All Apps on the Market developed by us. We code for Millions
                        </p>

                    </div>
                </div>
            </div>












            {loading ? (
                <SkeletonLoader />
            ) : (
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                    {products.map(product => (
                        <AllCard key={product.id} product={product} />
                    ))}
                </div>
            )}
        </div>

    );
};

export default Apps;