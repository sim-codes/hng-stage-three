"use client";

import { useEffect, useState } from "react";
import Image from "next/image"
import { ShoppingCartIcon, CurrencyDollarIcon, ArrowRightIcon } from "@heroicons/react/24/outline"
import { MenuData } from "@/app/lib/definitons"
import { useCartState } from "@/app/ui/context"
import { getProducts, getCategoryId } from "@/app/lib/actions"
import Link from "next/link";

type Photo = {
    url: string

}

type PriceData = {
    NGN: number[],
}

type Data = {
    id: string,
    name: string,
    description: string,
    current_price: PriceData[],
    photos: Photo[]

}

type APIData = {
    items: Data[]
}

const appID = process.env.APP_ID;
const apiKey = process.env.API_KEY;
const orgID = process.env.ORG_ID;

export default function SnackSection({ snacks, menuName }: { snacks: Array<MenuData>, menuName: string}) {
    // const {addToCart } = useCartState()
    // const baseURL = `https://api.timbu.cloud/products?organization_id=${orgID}&page=1&size=10&Appid=${ap}&Apikey=${apiKey}`
    const baseURL = "https://api.timbu.cloud/products?organization_id=dc1d154e1c904be9884b48eb29680a2c&page=1&category_id&=9dfef41528484830a98b4a8b51e26f1b&size=8&reverse_sort=false&Appid=411QDYJ5S9JH9GP&Apikey=4428d87bb7c54d4990fbe8fc91a1da4820240712123305850718"
    
    // const [ categoryId, setCategoryId ] = useState<string>("")

    // const id = getCategoryId(menu, setCategoryId)
    // const baseURL = `https://api.timbu.cloud/products?organization_id=dc1d154e1c904be9884b48eb29680a2c&page=1&category_id=${id}&size=5&Appid=411QDYJ5S9JH9GP&Apikey=4428d87bb7c54d4990fbe8fc91a1da4820240712123305850718`
    
    const [data, setData] = useState<APIData>({items: []});

    useEffect(() => {
        fetch(baseURL)
        .then(res => res.json())
        .then(data => setData(data))
        .then(data => console.log(data))
    }, [])
    
    
    // const baseURL = "https://api.timbu.cloud/products?organization_id=dc1d154e1c904be9884b48eb29680a2c&page=1&category_id&=9dfef41528484830a98b4a8b51e26f1b&size=5&Appid=411QDYJ5S9JH9GP&Apikey=4428d87bb7c54d4990fbe8fc91a1da4820240712123305850718"

    return (
        <section className="self-stretch p-5 mb-5">

            <div className="flex justify-between">
                <h2 className="font-bold text-2xl">{menuName}</h2>
                <button className="flex justify-center font-bold items-center gap-2 bg-transparent rounded-md text-gray-400 max-w-40 p-2">
                    View all
                    <ArrowRightIcon className="h-4 w-4" />
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-2">
                {data.items.map((menu) => (
                    <Link href={`/${menu.id}`} key={menu.id}>
                    <div key={menu.id} className="flex flex-col gap-5 my-2">
                        <div className="relative w-full h-72 bg-black rounded-xl flex items-center justify-center
                            overflow-hidden">
                            <Image src={`https://api.timbu.cloud/images/${menu.photos[0].url}`} alt="Burger" fill={true} className="z-0 object-cover" />
                            <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t to-transparent from-black"></div>

                            <div className="z-20 absolute bottom-14 left-0 w-full flex justify-between items-center gap-2 px-8">
                                <p className="font-bold text-lg text-white">{menu.name}</p>
                                
                                <button className="flex w-24 gap-2 items-center justify-center p-1 border border-primary text-white text-sm bg-primary rounded-md">
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
                    </Link>
                ))}
            </div>
        </section>
    )
}