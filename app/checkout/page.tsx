import { ChevronRightIcon, ChevronDownIcon, PlusIcon } from "@heroicons/react/16/solid"
import { UserIcon, LockClosedIcon, CalendarIcon } from "@heroicons/react/24/outline"
import Image from "next/image"
import { Metadata } from "next"
import HotDishesSection from "../ui/featureSection"
import nigIcon from "@/public/icons/nigeria.png"
import Link from "next/link"

import payIcon from "@/public/icons/pay.png"

export const metadata: Metadata = {
    title: 'Checkout',
};

export default function Checkout() {
    return (
        <section className="flex flex-col justify-center max-w-screen">
            <div className="bg-[#fff] lg:bg-[#F9FAFB] md:px-12 lg:px-24">
                <h1 className="flex gap-3 items-center text-bold px-5 my-12">
                    <Link href="/">Meals</Link>
                     <ChevronRightIcon className="h-4 w-4" />
                     <Link href="/cart">Cart</Link> 
                     <ChevronRightIcon className="h-4 w-4" />
                     <span className="text-primary">Checkout</span>
                </h1>

                <div className="bg-[#fff] rounded-lg p-10 my-14">
                    <div className="grid grid-cols-1 lg:grid-cols-6 gap-10">
                        <div className="md:col-span-4 lg:col-span-4">
                            <div className="">
                                <h1 className="text-2xl font-bold">Billing Details</h1>
                                <p className="text-sm">Enter a biling address for your purchases and delivery</p>
                            </div>

                            <div className="">
                                <form>
                                    <div className="grid grid-cols-2 gap-10">
                                        <div className="my-4 w-full">
                                            <label className="block text-sm font-bold mb-2">
                                                First Name
                                            </label>
                                            <div className="flex gap-2 items-center w-full p-2 border-2 rounded-lg">
                                                <UserIcon className="h-6 w-6" />
                                                <input className="appearance-none w-full h-full py-2
                                                text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                id="username" type="text" placeholder="belrahmercy" />
                                            </div>
                                        </div>

                                        <div className="my-4">
                                            <label className="block text-sm font-bold mb-2">
                                                Last Name
                                            </label>
                                            <div className="flex gap-2 items-center w-full p-2 border-2 rounded-lg">
                                                <UserIcon className="h-6 w-6" />
                                                <input className="appearance-none w-full h-full py-2
                                                text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                id="username" type="text" placeholder="belrahmercy" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-10">
                                        <div className="my-4 w-full">
                                            <label className="block text-sm font-bold mb-2">
                                                Street Address
                                            </label>
                                            <div className="w-full p-2 border-2 rounded-lg">
                                                <input className="appearance-none w-full h-full py-2 px-2
                                                text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                id="username" type="text" placeholder="1st Avenue, House 24" />
                                            </div>
                                        </div>

                                        <div className="my-4">
                                            <label className="block text-sm font-bold mb-2">
                                                Area
                                            </label>
                                            <div className="p-2 border-2 rounded-lg">
                                                <input className="appearance-none w-full h-full p-2
                                                text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                id="username" type="text" placeholder="Gwarinpa" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-10">
                                        <div className="my-4 w-full">
                                            <label className="block text-sm font-bold mb-2">
                                                State
                                            </label>
                                            <div className="w-full p-2 border-2 rounded-lg">
                                                <input className="appearance-none w-full h-full p-2
                                                text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                id="username" type="text" placeholder="Abuja" />
                                            </div>
                                        </div>

                                        <div className="my-4">
                                            <label className="block text-sm font-bold mb-2">
                                                LGA
                                            </label>
                                            <div className="w-full p-2 border-2 rounded-lg">
                                                <input className="appearance-none w-full h-full p-2
                                                text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                id="username" type="text" placeholder="Municipal" />
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="grid grid-cols-2 gap-10">
                                        <div className="my-4 w-full">
                                            <label className="block text-sm font-bold mb-2">
                                                Phone Number
                                            </label>
                                            <div className="flex items-center w-full p-2 border-2 rounded-lg gap-1">
                                                <Image src={nigIcon} width="30" alt="Nigeria Flag Icon" />
                                                Nig
                                                <ChevronDownIcon className="w-6 h-6 pr-1 border-r-2" />
                                                <input className="appearance-none w-full h-full p-2
                                                text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                id="username" type="text" placeholder="8102180628" />
                                            </div>
                                        </div>

                                        <div className="my-4">
                                            <label className="block text-sm font-bold mb-2">
                                                Postal Code
                                            </label>
                                            <div className="w-full p-2 border-2 rounded-lg">
                                                <input className="appearance-none w-full h-full p-2
                                                text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                id="username" type="text" placeholder="900182" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="my-4">
                                        <label className="flex items-center gap-2 mb-2">
                                            <input
                                            type="checkbox"
                                            id="checkbox"
                                            className=" self-start appearance-none min-w-6 min-h-6 border border-gray-300 
                                            rounded-sm checked:bg-primary checked:border-transparent focus:outline-none"
                                            />
                                            Save my information for a faster checkout
                                        </label>
                                    </div>
                                </form>
                            </div>

                            <div className="grid mt-2">
                                <button className="place-self-end font-semibold bg-primary text-white w-2/4 md:w-1/4 lg:w-1/4 h-14 rounded-lg">
                                    Save Billing Address
                                </button>
                            </div>

                            <div className="my-5">
                                <h1 className="text-4xl font-bold">Shipping Address</h1>
                                <p>Select the address that matches your card or payment method.</p>

                                <div className="my-10 bg-[#F6F7F9] w-full p-5 rounded-lg">
                                    <div className="flex flex-col gap-5 my-2">
                                        <div className="flex gap-2 items-center">
                                            <input
                                            type="radio"
                                            id="paypal"
                                            name="payment"
                                            className="min-w-6 min-h-6 border border-gray-300 
                                            rounded-sm checked:bg-primary checked:border-transparent focus:outline-none"
                                            />
                                            <label htmlFor="paypal">Same as Billing Address?</label>
                                        </div>

                                        <hr className="my-5 border" />

                                        <div className="flex gap-2 items-center">
                                            <input
                                            type="radio"
                                            id="paypal"
                                            name="payment"
                                            className="min-w-6 min-h-6 border border-gray-300 
                                            rounded-sm checked:bg-primary checked:border-transparent focus:outline-none"
                                            />
                                            <label htmlFor="paypal">Use a Different Shipping Address</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="grid">
                                <button className="place-self-end bg-primary font-semibold text-white w-2/4 md:w-1/4 lg:w-1/4 h-14 rounded-lg">
                                    Change Address
                                </button>
                            </div>
                        </div>

                        <div className=" order-first md:-order-first lg:col-span-2 w-full border-2 md:p-10 lg:p-10 p-5 rounded-lg">
                            <h1 className="font-bold text-2xl my-3">Payment Information</h1>

                            <div className="flex flex-col gap-3">
                                <p>Apply Discount</p>

                                <div className="flex gap-3">
                                    <input className="appearance-none w-full h-full p-5 bg-[#F9FAFB] rounded-lg
                                        text-gray-600 leading-tight focus:outline-none focus:shadow-outline"
                                        id="username" type="text" placeholder="Enter Coupon Code" />
                                    <button className="bg-[#B3B1B0] text-white py-4 px-7 rounded-lg">Apply</button>
                                </div>
                            </div>

                            <hr className="my-5 border" />

                            <div className="flex flex-col gap-5">
                                <div className="flex justify-between">
                                    <h1 className="font-bold text-2xl">Pay With</h1>

                                    <Image src={payIcon} alt="Pay Icon" className="object-contain" />
                                </div>

                                <div className="flex flex-col gap-3">
                                    <div className="flex gap-2 items-center">
                                        <input
                                        type="radio"
                                        id="paypal"
                                        name="billing"
                                        className="min-w-6 min-h-6 border border-gray-300 
                                        rounded-sm checked:bg-primary checked:border-transparent focus:outline-none"
                                        />
                                        <label htmlFor="paypal">Debit or Credit Card</label>
                                    </div>

                                    <div className="flex gap-2 items-center">
                                        <input
                                        type="radio"
                                        id="paypal"
                                        name="billing"
                                        className="min-w-6 min-h-6 border border-gray-300 
                                        rounded-sm checked:bg-primary checked:border-transparent focus:outline-none"
                                        />
                                        <label htmlFor="paypal">Pay on Delivery</label>
                                    </div>
                                </div>
                            </div>

                            <hr className="my-5 border" />

                            <p className="font-bold">Enter Card Information</p>

                            <div className="">
                                <form>
                                    <div className="grid grid-cols-1 gap-2">
                                        <div className="my-2 w-full">
                                            <label className="block text-sm mb-2">
                                                Name on Card
                                            </label>
                                            <div className="w-full p-2 border-2 rounded-lg">
                                                <input className="appearance-none w-full h-full py-2 px-2
                                                text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                id="username" type="text" placeholder="Belrah Mercy" />
                                            </div>
                                        </div>

                                        <div className="my-2 w-full">
                                            <label className="block text-sm mb-2">
                                                Card Number
                                            </label>
                                            <div className="w-full p-2 border-2 rounded-lg">
                                                <input className="appearance-none w-full h-full py-2 px-2
                                                text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                id="username" type="text" placeholder="5061 2345 6789 1234" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-2">
                                        <div className="my-2 w-full">
                                            <label className="block text-sm mb-2">
                                                Expiry Date
                                            </label>
                                            <div className="flex items-center w-full p-2 border-2 rounded-lg">
                                                <input className="appearance-none w-full h-full p-2
                                                text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                id="username" type="text" placeholder="09/2024" />
                                                <CalendarIcon className="h-6 w-6 mr-1" />
                                            </div>
                                        </div>

                                        <div className="my-2 w-full">
                                            <label className="block text-sm mb-2">
                                                CVV
                                            </label>
                                            <div className="flex items-center w-full p-2 border-2 rounded-lg">
                                                <input className="appearance-none w-full h-full p-2
                                                text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                id="username" type="text" placeholder="123" />
                                                <LockClosedIcon className="h-6 w-6 mr-1" />
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <hr className="my-5 border" /> 
                            </div>

                            <div className="flex flex-col gap-5 my-2">
                                <div className="flex items-center justify-between">
                                    <span>Sub Total</span>
                                    <span className="font-bold">₦ 89,000.00</span>
                                </div>

                                <div className="flex items-center justify-between">
                                    <span>Tax (10%)</span>
                                    <span className="text-sm">₦ 8,500.00</span>
                                </div>

                                <div className="flex items-center justify-between">
                                    <span>Discount (20%)</span>
                                    <span className="text-sm">₦ 8,500.00</span>
                                </div>

                                <hr className="my-3 border" />

                                <div className="flex items-center justify-between">
                                    <span className="font-bold">Total</span>
                                    <span className="font-bold">₦ 72,000.00</span>
                                </div>
                            </div>

                            <button
                                className="grid grid-cols-1 h-12 justify-items-center font-semibold content-center bg-primary text-white text-center text-sm w-full rounded-lg p-2">
                                Pay $718.08
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
            <HotDishesSection />
        </section>
    )
}