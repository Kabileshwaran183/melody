import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';

import { Data, Canimg, Data1 } from './data'; // all imported datasets

import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

function Events() {
    const [category, setCategory] = useState("wedding");

    const imageSets = {
        wedding: Data,
        outdoors: Canimg,
        indoors: Data1,
        birthday: Canimg,   // 🔁 adjust as per your data
        puberty: Data,
        reception: Data1,
        maternity: Canimg,
        commercial: Data
    };

    const activeData = imageSets[category] || [];

    return (

        <>
            <div className="bg-white" id="events">
                <div className="container bg-white">
                    <h1 className="text-center font-semi-bold text-xl md:text-3xl mb-4 px-8">
                        📸 Capturing Timeless Moments
                    </h1>
                    <p className="text-center font-semi-bold text-base md:text-xl mb-4 px-8 text-gray-500">
                        "Photography is more than just capturing images; it's about preserving emotions..."
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col md:flex-row gap-5 justify-center">
                        <div className="flex gap-5 items-center justify-center md:py-16">
                            <button onClick={() => setCategory("wedding")} className="bg-teal-500 p-3 rounded-lg text-white hover:scale-110 duration-300 text-sm md:text-xl lg:text-3xl">
                                Wedding
                            </button>
                            <button onClick={() => setCategory("outdoors")} className="bg-teal-500 p-3 rounded-lg text-white hover:scale-110 duration-300 text-sm md:text-xl lg:text-3xl">
                                Outdoorshoots
                            </button>
                            <button onClick={() => setCategory("indoors")} className="bg-teal-500 p-3 rounded-lg text-white hover:scale-110 duration-300 text-sm md:text-xl lg:text-3xl">
                                Indoorshoots
                            </button>
                            <button onClick={() => setCategory("birthday")} className="bg-teal-500 p-3 rounded-lg text-white hover:scale-110 duration-300 text-sm md:text-xl lg:text-3xl">
                                Birthday
                            </button>
                        </div>

                        <div className="flex gap-5 items-center justify-center">
                            <button onClick={() => setCategory("puberty")} className="bg-teal-500 p-3 rounded-lg text-white hover:scale-110 duration-300 text-sm md:text-xl lg:text-3xl">
                                Puberty
                            </button>
                            <button onClick={() => setCategory("reception")} className="bg-teal-500 p-3 rounded-lg text-white hover:scale-110 duration-300 text-sm md:text-xl lg:text-3xl">
                                Reception
                            </button>
                            <button onClick={() => setCategory("maternity")} className="bg-teal-500 p-3 rounded-lg text-white hover:scale-110 duration-300 text-sm md:text-xl lg:text-3xl">
                                Maternity
                            </button>
                            <button onClick={() => setCategory("commercial")} className="bg-teal-500 p-3 rounded-lg text-white hover:scale-110 duration-300 text-sm md:text-xl lg:text-3xl">
                                Commercialshoots
                            </button>
                        </div>
                    </div>

                    {/* Swiper */}
                    <Swiper
                        effect={"coverflow"}
                        grabCursor={true}
                        centeredSlides={true}
                        loop={true}
                        slidesPerView={"auto"}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 100,
                            modifier: 2.5,
                        }}
                        pagination={{ el: ".swiper-pagination", clickable: true }}
                        navigation={{
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev",
                            clickable: true,
                        }}
                        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
                        className="swiper_container1"
                    >
                        {activeData.map((item, index) => (
                            <SwiperSlide key={index} className="swiperimg">
                                <div className="swiperimg">
                                    <img src={item} alt={`slide-${index}`} />
                                </div>
                            </SwiperSlide>
                        ))}

                        <div className="slider-controler">
                            <div className="swiper-button-prev slider-arrow">
                                <FaArrowCircleLeft />
                            </div>
                            <div className="swiper-button-next slider-arrow">
                                <FaArrowCircleRight />
                            </div>
                            <div className="swiper-pagination"></div>
                        </div>
                    </Swiper>
                </div>
            </div>
        </>


    );
}

export default Events;
