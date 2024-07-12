"use client";

import {useEffect, useState} from 'react';
import Image from 'next/image';
import { Slide } from '@/app/lib/definitons';
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/16/solid";

export default function Carousel({ slides }: {slides: Array<Slide>}) {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [currentSlide]);
    
    return (
        <div className="relative w-full h-[512px] grid grid-cols-1
        bg-black md:h-[705px] lg:h-[705px] lg:rounded-2xl overflow-hidden">
            {slides.map((slide, index) => (
                <div
                key={index}
                className={`transition-opacity duration-1000 overflow-hidden ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
                >
                    <Image src={slide.imageUrl} alt={`Slide ${index}`} fill={true} className="z-0 object-cover opacity-30" />
                    <div className="absolute top-1/3 left-0 right-0 z-10 flex flex-col justify-center items-center md:gap-5 p-12">
                        <p className="text-white font-bold text-xl md:text-4xl lg:text-6xl text-center">{slide.slideText1}</p>
                        <p className="text-[#FCD507] font-bold text-xl md:text-4xl lg:text-6xl text-center text-wrap">
                            {slide.slideText2}
                        </p>
                    </div>
                </div>
            ))}
            <div className="absolute bottom-5 left-0 right-0 flex justify-center mb-4">
                {slides.map((_, index) => (
                <button
                    key={index}
                    className={`w-4 h-4 mx-2 rounded-full ${
                    index === currentSlide ? 'bg-[#FCD507]' : 'bg-white'
                    }`}
                    onClick={() => setCurrentSlide(index)}
                ></button>
                ))}
            </div>

            <button onClick={() => setCurrentSlide(currentSlide - 1 < 0 ? slides.length - 1 : currentSlide - 1)}
                className="absolute z-30 hidden bg-white top-1/2 left-8 rounded-full p-3 md:hidden lg:block">
                <ArrowLeftIcon className="h-8 w-8" />
            </button>
            <button onClick={() => setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1)}
            className="absolute z-30 hidden bg-[#FCD507] top-1/2 right-8 rounded-full p-3 md:hidden lg:block">
                <ArrowRightIcon className="h-8 w-8 text-white" />
            </button>
        </div>
    )
}