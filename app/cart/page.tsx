import { ChevronRightIcon } from "@heroicons/react/16/solid"
import HotDishesSection from "@/app/ui/featureSection"
import { Metadata } from "next"
import Link from "next/link"
import CartItems from "../ui/cart/items"

export const metadata: Metadata = {
    title: 'Cart',
};

export default function Cart() {
    return (
        <section className="flex flex-col justify-center max-w-screen">
            <div className="bg-[#fff] md:bg-[#F9FAFB] lg:bg-[#F9FAFB] md:px-12 lg:px-24">
                <h1 className="flex gap-3 items-center text-bold px-5 my-12">
                    <Link href="/">Meals</Link>
                    <ChevronRightIcon className="h-4 w-4" />
                     <span className="text-primary">Cart</span>
                </h1>

                <CartItems />
            </div>
            
            <HotDishesSection />
        </section>
    )
}