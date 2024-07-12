import Image from "next/image"
import { Offers } from "@/app/lib/data"
import { ArrowRightIcon } from "@heroicons/react/24/outline"

export default function OfferSection() {


    return (
        <section className="self-stretch p-5 mb-5">
            <div className="flex justify-between items-center">
                <h2 className="font-bold text-xl md:text-4xl lg:text-4xl">Recommended Offers</h2>
                <button className="flex justify-center underline font-bold items-center gap-2 bg-transparent rounded-md text-gray-400 max-w-40 p-2">
                    see all offers
                    <ArrowRightIcon className="h-4 w-4" />
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 my-2">
                {Offers.map((menu) => (
                    <div key={menu.id} className="flex flex-col gap-5 my-2">
                        <div className="relative w-full h-72 bg-black rounded-xl flex items-center justify-center
                            overflow-hidden">
                            <Image src={menu.image} alt="Burger" fill={true} className="z-0 object-cover" />
                            <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t to-transparent from-black"></div>

                            <div className="z-10 absolute bottom-4 left-0 w-full flex-col px-8">
                                <p className="text-sm text-secondary">{menu.category}</p>
                                <p className="font-bold text-lg text-white">{menu.name}</p>
                            </div>

                            <div className="absolute bg-red-700 p-3 w-20 font-bold -top-1 text-white -right-4 rounded-md">
                                <p>-20%</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}