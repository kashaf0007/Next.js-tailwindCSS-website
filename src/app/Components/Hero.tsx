"use client";
import React from 'react';
import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css'

const Hero = ( )=> {
    useEffect(() => {
        AOS.init({
            duration:1000,
            once:true,
        });
    },[])
    return(
        <section className=' h-screen flex items-center bg-cover bg-center h-5% w-100'  style={{backgroundImage:"url('background-img.jpeg' )"}}>
            <div className='pl-0 md:pl-16 text-white text-center'>
                <h1 className='text-6xl font-bold drop-shadow-md ' data-aos="fade-up">HAJJ UMRAH 2024</h1>
                <p className='text-2xl mt-3'>Delux Umrah Group Package</p>

                <button className='mt-10 px-20 py-5 mx-10 m-3  text-black bg-green-100 hover:bg-orange-200 rounded-md font-bold'>BOOK NOW</button>
            </div>
        </section>
    )
}//pl-0
export default Hero