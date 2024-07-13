"use client";
import { useEffect, useState } from "react";
import { ChevronRightIcon, MinusIcon, PlusIcon } from "@heroicons/react/16/solid";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import { useCartState } from "@/app/ui/context"
import { Data } from "@/app/lib/definitons"

const appID = process.env.NEXT_PUBLIC_APP_ID;
const apiKey = process.env.NEXT_PUBLIC_API_KEY;
const orgID = process.env.NEXT_PUBLIC_ORG_ID;

export default function SingleProduct({ params }: { params: { id: string } }) {
    const {addToCart } = useCartState()
    const id = params.id;
    const [qty, setQty] = useState(1);

    const baseURL = `https://api.timbu.cloud/products/${id}?organization_id=${orgID}&Appid=${appID}&Apikey=${apiKey}`
    
    const [data, setData] = useState<Data>({id: "", name: "", description: "", current_price: 0, photos: [{url: ""}]});

    useEffect(() => {
        fetch(baseURL)
        .then(res => res.json())
        .then(data => setData(data))
        .then(data => console.log(data))
    }, [baseURL])

    return (
        <section className="flex flex-col justify-center max-w-screen">
            <div className="bg-[#fff] md:bg-[#F9FAFB] lg:bg-[#F9FAFB] md:px-12 lg:px-24">
                <div className="bg-[#fff] rounded-lg p-5 my-14">
                    <h1 className="flex gap-3 items-center text-bold px-5 my-12">
                        <Link href="/">Menu</Link>
                        <ChevronRightIcon className="h-4 w-4" />
                        <span className="text-primary">{data.name}</span>
                    </h1>


                    <div className="relative w-full h-[512px] grid grid-cols-1
                    bg-black md:h-[705px] lg:h-[705px] lg:rounded-2xl overflow-hidden">
                        <Image src={`https://api.timbu.cloud/images/${data.photos[0].url}`} alt={data.name} fill={true} className="z-0 object-cover" />
                    </div>

                    <div className="mt-10 flex justify-between">
                        <div className="space-y-5">
                            <h1 className="font-bold text-7xl">{data.name}</h1>
                            <p className="text-[#3B3533] text-2xl max-w-[945px]">{data.description}</p>
                        </div>

                        <div className="flex flex-col gap-5">
                            <p className="font-bold text-4xl self-end">₦ {data.current_price}</p>
                            
                            <div className="flex ">
                                <div className="flex items-center gap-2">
                                    <button className="bg-gray-200 rounded-full p-1">
                                        <MinusIcon className="h-4 w-4" onClick={() => 
                                        qty > 1 ? setQty(qty - 1) : setQty(1)
                                        } />
                                    </button>
                                    <p className="">{qty}</p>
                                    <button className="bg-[#FFF2ED] text-primary rounded-full p-1">
                                        <PlusIcon className="h-4 w-4" onClick={() => 
                                        qty < 10 ? setQty(qty + 1) : setQty(10)
                                        } />
                                    </button>
                                </div>

                                <button onClick={() => addToCart(data.id, data.name, data.current_price, qty, data.photos[0].url, data.description)}
                                className="flex gap-2 items-center justify-center font-semibold px-4 py-2 border transition-all ease-in-out duration-150
                                text-white bg-primary hover:border-primary hover:text-primary hover:bg-white rounded-md min-w-[142px]">
                                    Order
                                    <ShoppingCartIcon className="h-5 w-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}