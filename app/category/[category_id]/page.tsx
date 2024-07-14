"use client";

import { useState, useEffect } from "react";
import SearchSection from "@/app/ui/home/searchSection"
import Pagination from "@/app/ui/pagination"
import { useSearchParams } from 'next/navigation'
import Image from "next/image"
import { ShoppingCartIcon, CurrencyDollarIcon, ArrowRightIcon } from "@heroicons/react/24/outline"
import ReviewsSection from "@/app/ui/reviews"
import { Suspense } from "react"
import Carousel from "@/app/ui/carousel";
import { slides } from "@/app/lib/data";
import { AllAPIData } from "@/app/lib/definitons";

const appID = process.env.NEXT_PUBLIC_APP_ID;
const apiKey = process.env.NEXT_PUBLIC_API_KEY;
const orgID = process.env.NEXT_PUBLIC_ORG_ID;

const menuList = [
    {id: '9dfef41528484830a98b4a8b51e26f1b',
    name: 'Drinks',},
    {id: '95446c22d6b645d49081554a86ec868f',
    name: 'Ice Cream',},
    {id: '124c6113dd054a5a84bbae8ae9be7ec6',
    name: 'Swallow',},
    {id: '0222c04ee9c64c47b81a7729a29ab52e',
    name: 'Coffee',},
    {id: '2c7c21f2501e42eab83a49a6ff37d989',
    name: 'Snack',},
    {id: 'c90a3b0d030b4799886672f3d5ed1935',
    name: 'Soup',},
    {id: '77dd8eb8fb5e460987157920ff961513',
    name: 'Meal',},
    {id: '6e06db0c8cd64cf0b079b2e7de15053c',
    name: 'Salad',},
]

export default function Page({ params }: { params: { category_id: string } }) {
    const searchParams = useSearchParams();

    const category_id = params.category_id;
    const currentPage = Number(searchParams.get('page') || '1');
    const [qty, setQty] = useState(1);

    const baseURL = `https://api.timbu.cloud/products?organization_id=${orgID}&Appid=${appID}&Apikey=${apiKey}&page=1&category_id=${category_id}&size=12`
    
    const [data, setData] = useState<AllAPIData>({total: 0, items: []});

    useEffect(() => {
        fetch(baseURL)
        .then(res => res.json())
        .then(data => setData(data))
        .then(data => console.log(data))
    }, [baseURL])

    return (
        <main className="flex flex-col items-center min-h-screen md:px-12 lg:px-24">
            <Carousel slides={slides} />
            <SearchSection />

            <div className="self-stretch">
                {
                    menuList.map((menu) => (
                        menu.id === category_id && <h2 className="font-bold text-2xl" key={menu.id}>{menu.name} Listing</h2>
                    ))
                }
            </div>

            <div className="self-stretch p-5 mb-5">
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
            </div>

            <ReviewsSection />
        </main>
    )
}
