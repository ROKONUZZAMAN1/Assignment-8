import React from 'react';

const AllCard = ({ product }) => {
    const { ratingAvg, downloads, image, title } = product

    return (
        <div>



            <div className='my-10'>
                <div className="card bg-base-100  shadow-sm">
                    <figure>
                        <img
                            className='h-[100px]'
                            src={image}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{title}</h2>
                        <div className="card-actions justify-between">
                            <button className="btn  ">{downloads}</button>
                            <button className="btn  ">{ratingAvg}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllCard;