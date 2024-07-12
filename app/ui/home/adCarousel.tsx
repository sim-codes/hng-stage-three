"use client";

import { useState, useEffect } from "react";
import { ChevronRightIcon } from "@heroicons/react/16/solid"
import Image from "next/image"

const slides = [
    {
        imageUrl: "/images/sandwich.png",
        text: "Best Offers",
        spanText: "Crispy Sandwiches",
        body: "Enjoy the large size of sandwiches. Complete perfect slice of sandwiches."
    },
    {
        imageUrl: "/images/bbq.png",
        text: "Best Offers on Our",
        spanText: "Grilled Chicken",
        body: "Enjoy the large size of sandwiches. Complete perfect slice of sandwiches."
    },
    {
        imageUrl: "/images/pizza.png",
        text: "Best Offers",
        spanText: "Hot and Spicy Pizza",
        body: "Enjoy the large size of sandwiches. Complete perfect slice of sandwiches."
    },
]

export default function AdCarousel() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [currentSlide, slides.length]);

    return (
        <section className="md:p-24 lg:p-24 overflow-hidden text-[#757575]">
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4">
                <div className="w-full bg-[#F9FAFB] p-10 rounded-s-lg">
                    <div className="my-12 pb-10">
                        <p className="font-bold text-2xl">Best Offers <span className="text-primary">Crispy Sandwiches</span></p>
                        <p className="text-sm">Enjoy the large size of sandwiches. Complete 
                        perfect slice of sandwiches.</p>
                    </div>

                    <button className="w-full flex items-center justify-center gap-2 text-white text-sm bg-primary p-3 rounded-md">
                        Proceed to order
                        <ChevronRightIcon className="h-5 w-5" />
                    </button>
                </div>

                <div className="relative col-span-3 bg-black rounded-e-lg w-full min-h-60 overflow-hidden">
                    <Image src="/images/sandwich.png" fill={true} alt="Sandwich image" className="object-cover" />
                </div>

            </div>
        </section>
    )
}