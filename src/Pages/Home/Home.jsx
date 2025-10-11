import React from 'react';
import play from '../../assets/playstore.png'
import App from '../../assets/AppStore.png'
import hero from '../../assets/hero.png'
import facts from '../../assets/Facts.png';
import HomeData from '../HomeComponent/HomeData';
import { useLoaderData } from 'react-router';



const Home = () => {
    const products = useLoaderData()
    console.log(products)
    return (
        <div className='bg-base-200'>
            <div className="hero bg-base-200 mt-10 ">
                <div className="hero-content text-center">
                    <div className="max-w-3xl">
                        <h1 className="text-5xl font-bold text-gray-900">We Build <br />
                            <span className='text-[#9F62F2]'> Productive</span> Apps</h1>
                        <p className="py-6 text-gray-500">
                            At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.
                        </p>
                        <div >
                            <a href="https://play.google.com/store/games?hl=en"> <button className="btn   mr-4" ><img src={play} alt="" /> Google Play</button></a>
                            <a href='https://www.apple.com/app-store/' >  <button className="btn  "><img src={App} alt="" /> App Store</button></a>
                        </div>

                    </div>
                </div>



            </div>






            <div className="hero bg-base-200 mt-10">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={hero} alt="" className='mb-[-16px]' />
                </div>
            </div>
            <div className='mb-20'>
                <img src={facts} alt="" />
            </div>

            <div>
                {

                }
            </div>

        </div>
    );
};

export default Home; 