"use client";
import { useEffect, useState } from "react";

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
    current_price: number,
    photos: Photo[]

}

type APIData = {
    items: Data[]
}

export default function SingleProduct({ params }: { params: { id: string } }) {
    const id = params.id;

    const baseURL = `https://api.timbu.cloud/products/${id}?organization_id=dc1d154e1c904be9884b48eb29680a2c&Appid=411QDYJ5S9JH9GP&Apikey=4428d87bb7c54d4990fbe8fc91a1da4820240712123305850718`
    
    const [data, setData] = useState<Data>({id: "", name: "", description: "", current_price: 0, photos: [{url: ""}]});

    useEffect(() => {
        fetch(baseURL)
        .then(res => res.json())
        .then(data => setData(data))
        .then(data => console.log(data))
    }, [])

    return (
        <section className="flex flex-col justify-center max-w-screen">
            <div className="bg-[#fff] md:bg-[#F9FAFB] lg:bg-[#F9FAFB] md:px-12 lg:px-24">
                <div className="bg-[#fff] rounded-lg p-5 my-14">
                <h1 className="flex gap-3 items-center text-bold px-5 my-12">
                    {data.name}
                </h1>
                </div>
            </div>
        </section>
    )
}