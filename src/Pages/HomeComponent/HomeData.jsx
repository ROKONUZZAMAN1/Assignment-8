import React from 'react';
import { useProducts } from '../../Hook/useProducts';
import SkeletonLoader from '../../SkeletonLoader/SkeletonLoader';
import Cards from './Cards';
import { NavLink } from 'react-router';
import Apps from '../Home/Apps';


const HomeData = () => {

    const { products, loading, error } = useProducts()
    const Homedata = products.slice(0, 8)
    // console.log(Homedata)

    return (

        <div>

            <div>
                <div className="hero bg-base-200  ">
                    <div className="hero-content text-center">
                        <div className="max-w-xl">
                            <h1 className="text-4xl font-bold">Trending Apps</h1>
                            <p className="py-6 text-gray-500">
                                Explore All Trending Apps on the Market developed by us
                            </p>

                        </div>
                    </div>
                </div>
            </div>


            {loading ? (
                <SkeletonLoader />
            ) : (
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                    {Homedata.map(product => (
                        <Cards key={product.id} product={product} />
                    ))}
                </div>
            )}

            <div className='flex justify-center items-center mx-auto ' >
                <NavLink to={'/apps'}> <button className='btn my-10 bg-[#9F62F2] text-white '>Show All</button></NavLink>
            </div>
        </div>
    );
};

export default HomeData;