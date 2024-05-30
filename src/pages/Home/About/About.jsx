import React from 'react';
import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className='w-full lg:w-1/2 relative mb-8 lg:mb-0'>
                    <img src={person} className="w-3/4 rounded-lg shadow-2xl mx-auto lg:mx-0" />
                    <img src={parts} className="w-1/2 absolute right-5 top-1/2 transform -translate-y-1/2 lg:right-5 lg:top-1/2 rounded-lg border-8 border-white shadow-2xl" />
                </div>
                <div className='w-full lg:w-1/2 space-y-5 p-4'>
                    <h3 className='text-2xl md:text-3xl text-orange-500 font-bold'>About Us</h3>
                    <h1 className="text-4xl md:text-5xl font-bold">We are qualified <br /> &amp; of <span className='text-orange-500'>Experience</span> <br /> in this Field</h1>
                    <p className="py-2 md:py-6 text-sm md:text-base">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.</p>
                    <p className="py-2 md:py-6 text-sm md:text-base">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.</p>
                    <button className="btn bg-orange-500 text-white">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;
