import React from 'react';
import img1 from '../../../assets/images/banner/1.jpg';
import img2 from '../../../assets/images/banner/2.jpg';
import img3 from '../../../assets/images/banner/3.jpg';
import img4 from '../../../assets/images/banner/4.jpg';

const Banner = () => {
    return (
        <div className="carousel w-full h-[400px] md:h-[600px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-4 md:space-y-7 pl-4 md:pl-12 w-full md:w-1/2'>
                        <h2 className='text-2xl md:text-6xl font-bold'><span className='text-orange-500'>Affordable</span> Price For Car Servicing</h2>
                        <p className='text-xs md:text-base'>There are many variations of passages of available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn btn-primary mr-2 md:mr-5 bg-orange-500">Discover More</button>
                            <button className="btn btn-outline btn-warning">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle mr-2 md:mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-4 md:space-y-7 pl-4 md:pl-12 w-full md:w-1/2'>
                        <h2 className='text-2xl md:text-6xl font-bold'><span className='text-orange-500'>Affordable</span> Price For Car Servicing</h2>
                        <p className='text-xs md:text-base'>There are many variations of passages of available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn btn-primary mr-2 md:mr-5 bg-orange-500">Discover More</button>
                            <button className="btn btn-outline btn-warning">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle mr-2 md:mr-5">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-4 md:space-y-7 pl-4 md:pl-12 w-full md:w-1/2'>
                        <h2 className='text-2xl md:text-6xl font-bold'><span className='text-orange-500'>Affordable</span> Price For Car Servicing</h2>
                        <p className='text-xs md:text-base'>There are many variations of passages of available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn btn-primary mr-2 md:mr-5 bg-orange-500">Discover More</button>
                            <button className="btn btn-outline btn-warning">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle mr-2 md:mr-5">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-4 md:space-y-7 pl-4 md:pl-12 w-full md:w-1/2'>
                        <h2 className='text-2xl md:text-6xl font-bold'><span className='text-orange-500'>Affordable</span> Price For Car Servicing</h2>
                        <p className='text-xs md:text-base'>There are many variations of passages of available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn btn-primary mr-2 md:mr-5 bg-orange-500">Discover More</button>
                            <button className="btn btn-outline btn-warning">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle mr-2 md:mr-5">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;
