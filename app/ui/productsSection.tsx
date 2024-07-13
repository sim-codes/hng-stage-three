"use client";

import { useEffect, useState } from "react";
import Image from "next/image"
import { ShoppingCartIcon, CurrencyDollarIcon, ArrowRightIcon } from "@heroicons/react/24/outline"
import { useCartState } from "@/app/ui/context"
import Pagination from "@/app/ui/pagination"
import { useSearchParams } from 'next/navigation'
import { AllAPIData } from "@/app/lib/definitons"


const appID = process.env.NEXT_PUBLIC_APP_ID;
const apiKey = process.env.NEXT_PUBLIC_API_KEY;
const orgID = process.env.NEXT_PUBLIC_ORG_ID;

export default function ProductsSection()
 {
    const {addToCart } = useCartState()
    const searchParams = useSearchParams();
    const currentPage = Number(searchParams.get('page') || '1');

    const baseURL = `https://api.timbu.cloud/products?organization_id=${orgID}&page=${currentPage}&size=12&&Appid=${appID}&Apikey=${apiKey}`
  
    const [data, setData] = useState<AllAPIData>({total: 0, items: []});

    useEffect(() => {
        fetch(baseURL)
        .then(res => res.json())
        .then(data => setData(data))
        .then(data => console.log(data))
    }, [baseURL])

    return (
        <section className="self-stretch p-5 mb-5">

            <div className="flex justify-between">
                <h2 className="font-bold text-2xl">Menu Listing</h2>
                <button className="flex justify-center font-bold items-center gap-2 bg-transparent rounded-md text-gray-400 max-w-40 p-2">
                    View all
                    <ArrowRightIcon className="h-4 w-4" />
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-2">
                {data.items.map((menu) => (
                    <a href={`/${menu.id}`} key={menu.id}>
                    <div key={menu.id} className="flex flex-col gap-5 my-2">
                        <div className="relative w-full h-72 bg-black rounded-xl flex items-center justify-center
                            overflow-hidden">
                            <Image src={`https://api.timbu.cloud/images/${menu.photos[0].url}`} alt="Burger" fill={true} className="z-0 object-cover" />
                            <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t to-transparent from-black"></div>

                            <div className="z-20 absolute bottom-14 left-0 w-full flex justify-between items-center gap-2 px-8">
                                <p className="font-bold text-lg text-white">{menu.name}</p>
                                
                                <button
                                className="flex w-24 gap-2 items-center justify-center p-1 border border-primary text-white text-sm bg-primary rounded-md">
                                    Buy
                                    <ShoppingCartIcon className="h-5 w-5" />
                                </button>
                            </div>

                            <div className="z-20 absolute bottom-4 left-0 w-full flex justify-between items-center gap-2 px-8">
                                <p className="font-bold text-secondary text-md">₦ {menu.current_price[0].NGN[0]} (per plate)</p>
                                
                                <button className="flex w-24 gap-2 items-center justify-center p-1 text-white text-sm">
                                    <CurrencyDollarIcon className="h-5 w-5" />
                                    Bargain
                                </button>
                            </div>
                        </div>
                    </div>
                    </a>
                ))}
            </div>
            <Pagination totalPages={Math.ceil(data.total / 12)} />
        </section>
    )
}