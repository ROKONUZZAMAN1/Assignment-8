import React, { useState } from 'react';
import { useProducts } from '../../Hook/useProducts';
import SkeletonLoader from '../../SkeletonLoader/SkeletonLoader';
import AllCard from '../HomeComponent/AllCard';

const Apps = () => {
    const { products, loading, error } = useProducts()

    const [search, setSearch] = useState('')
    // console.log(search)

    const term = search.trim().toLocaleLowerCase();
    console.log(term)
    const searchProducts = term ? products.filter(product => product.title.toLocaleLowerCase().includes(term)) : products;
    console.log(searchProducts)
    return (
        <div className='max-w-11/12 mx-auto'>

            <div className="hero bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-xl">
                        <h1 className="text-4xl font-bold">Our All Applications</h1>
                        <p className="py-6 text-gray-500">
                            Explore All Apps on the Market developed by us. We code for Millions
                        </p>

                    </div>
                </div>
            </div>






            <div className='flex items-center justify-between'>
                <h1 className='py-3'>({searchProducts.length}) Apps found</h1>

                <label className="input">

                    <input
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        type="search" placeholder="Search Products" />
                </label>

            </div>








            {loading ? (
                <SkeletonLoader />
            ) : (
                searchProducts.length === 0 ? <h1 className='font-extrabold py-5'>Product not found</h1> :

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                        {searchProducts.map(product => (
                            <AllCard key={product.id} product={product} />
                        ))}
                    </div>
            )}
        </div>

    );
};

export default Apps;