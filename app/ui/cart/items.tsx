"use client";

import { useState, useEffect } from "react";
import Image from "next/image"
import { useCartState } from "../context";
import { XMarkIcon, MinusIcon, PlusIcon } from "@heroicons/react/16/solid"
import { HeartIcon, TrashIcon } from "@heroicons/react/24/outline"
import Link from "next/link"



export default function CartItems(){
    const { cart, removeFromCart, addReduceProductQuantity, clearCart, totalPrice } = useCartState()
    
    
    return(
        <div className="bg-[#fff] rounded-lg p-5 my-14">
            <div className="grid grid-cols-1 lg:grid-cols-6 gap-10">
                <div className="lg:col-span-4">
                    
                    <div className="flex justify-between items-center gap-10">
                        <div className="flex items-center gap-2">
                            {/* <input type="checkbox" name="" id="" /> */}
                            <p className="flex gap-1 items-center font-bold">Number of Items in Cart
                                <span className="text-white bg-primary rounded-full 
                                    w-6 h-6 flex items-center justify-center text-sm">{cart.length}
                                </span>
                            </p>
                        </div>

                        <button className="text-primary text-sm" onClick={() => clearCart()}> x Clear Cart</button>
                    </div>

                    <div className="hidden md:hidden lg:block">
                        
                        {
                            cart.length === 0 ? (
                                <div className="flex flex-col justify-center items-center gap-5 my-10">
                                    <p className="text-center">No item in cart</p>
                                    <Link href="/" className="bg-primary text-white p-2 rounded-lg text-sm">
                                        Continue Shopping
                                    </Link>
                                </div>
                            ) : cart.map((item) => (
                                <div className="my-3" key={item.id}>
                                    <div className="lg:flex items-center justify-center gap-2">
                                    <div className="flex gap-3">
                                        <input
                                            type="checkbox"
                                            id="checkbox"
                                            className=" self-start appearance-none min-w-6 min-h-6 border border-gray-300 
                                            rounded-md checked:bg-primary checked:border-transparent focus:outline-none"
                                        />
                                        <div className="relative bg-black h-44 w-80 rounded-lg overflow-hidden">
                                            <Image src={item.image} alt="food" fill={true} className="object-cover"/>
                                        </div>
                                        
                                        <div className="flex flex-col gap-3 justify-center w-full">
                                            <p className="font-bold">{item.name}</p>
                                            <p className="text-gray-400 text-sm">
                                               {item.description}
                                            </p>

                                            <div className="flex justify-between">
                                                <div className="bg-gray-200 p-1 rounded-full">
                                                    <HeartIcon className="h-4 w-4" />
                                                </div>

                                                <button onClick={() => removeFromCart(item.id)}
                                                className="flex items-center justify-center gap-2 text-primary">
                                                    <XMarkIcon className="h-5 w-5" />
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <button className="min-w-36 flex items-center justify-center gap-2 font-semibold bg-primary text-white p-2 rounded-lg text-sm">
                                        <PlusIcon className="h-5 w-5" />
                                        Add Toppings
                                    </button> */}

                                    <div className="flex items-center gap-2">
                                        <button className="bg-gray-200 rounded-full p-1" onClick={() => addReduceProductQuantity(item.id, "sub")}>
                                            <MinusIcon className="h-4 w-4" />
                                        </button>
                                        <p className="">{item.qty}</p>
                                        <button className="bg-[#FFF2ED] text-primary rounded-full p-1" onClick={() => addReduceProductQuantity(item.id, "add")}>
                                            <PlusIcon className="h-4 w-4" />
                                        </button>
                                    </div>

                                    <p className="font-bold text-xl text-right">₦{(item.price * item.qty)}</p>
                                    </div>
                                    <hr className="border my-8" />
                                </div>
                            ))
                        }
                    </div>

                    {/* For Mobile and Tablets */}
                    <div className="block lg:hidden">
                        {
                            cart.length === 0 ? (
                                <div className="flex flex-col justify-center items-center gap-5 my-10">
                                    <p className="text-center">No item in cart</p>
                                    <Link href="/" className="bg-primary text-white p-2 rounded-lg text-sm">
                                        Continue Shopping
                                    </Link>
                                </div>
                            ) : cart.map((item) => (
                                <div className="my-3" key={item.id}>
                                    <div className="flex flex-col items-stretch justify-center gap-2">
                                    <div className="flex gap-3">
                                        <input
                                            type="checkbox"
                                            id="checkbox"
                                            className=" self-start appearance-none min-w-4 min-h-4 border border-gray-300 
                                            rounded-sm checked:bg-primary checked:border-transparent focus:outline-none"
                                        />
                                        <div className="relative bg-black h-36 min-w-32 rounded-lg overflow-hidden">
                                            <Image src={item.image} alt="food" fill={true} className="object-cover"/>
                                        </div>
                                        
                                        <div className="flex flex-col gap-3 justify-center w-48">
                                            <p className="font-bold flex justify-between">
                                                {item.name}
                                                
                                                <div className="bg-gray-200 p-1 rounded-full">
                                                    <HeartIcon className="h-4 w-4" />
                                                </div>
                                            </p>
                                            <p className="text-gray-400 text-xs">{item.description}</p>

                                            <div className="flex justify-between">
                                                <div className="flex items-center gap-2">
                                                    <button className="bg-gray-200 rounded-full p-1" onClick={() => addReduceProductQuantity(item.id, "sub")}>
                                                        <MinusIcon className="h-4 w-4" />
                                                    </button>
                                                    <p className="">{item.qty}</p>
                                                    <button className="bg-[#FFF2ED] text-primary rounded-full p-1" onClick={() => addReduceProductQuantity(item.id, "add")}>
                                                        <PlusIcon className="h-4 w-4" />
                                                    </button>
                                                </div>
                                                <p className="p-3 font-bold text-2xl text-right">₦ {item.price * item.qty}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between">
                                        <button className="flex items-center justify-center gap-2 text-primary" onClick={() => removeFromCart(item.id)}>
                                            <TrashIcon className="h-5 w-5" />
                                            Remove
                                        </button>
                                    </div>
                                </div>
                                <hr className="border my-8" />
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className="flex flex-col gap-5 my-5 max-w-96 min-w-72 border p-5 rounded-lg">
                    <h3 className="font-bold border-b-2 pb-5">Cart Summary</h3>

                    <div className="flex flex-col gap-5 py-5 mt-5 text-sm">
                        <div className="flex justify-between gap-3 items-center">
                            <p>Sub Total</p>
                            <p className="font-bold">₦ {totalPrice}</p>
                        </div>

                        <div className="flex justify-between gap-3 items-center">
                            <p>Tax (2%)</p>
                            <p className="">₦ 250</p>
                        </div>

                        <div className="flex justify-between gap-3 items-center">
                            <p>Discount (5%)</p>
                            <p className="">₦ 500</p>
                        </div>

                        <div className="flex justify-between gap-3 items-center">
                            <p>Dilivery 2%</p>
                            <p className="">₦ 2,500</p>
                        </div>

                        <hr className="border" />

                        <div className="flex justify-between gap-3 items-center font-bold">
                            <p>Total</p>
                            <p className="font-bold">₦ {totalPrice + 250 + 500 + 2500}</p>
                        </div>
                    </div>

                    <Link href="/checkout" className="bg-primary text-white font-semibold text-center text-sm w-full rounded-lg p-2">
                        Proceed to Checkout
                    </Link>
                    <button className="text-primary bg-[#FFF2ED] text-sm w-full font-semibold rounded-lg p-2">
                        Pair Deliver With Other Users
                    </button>

                    <div className="flex flex-col gap-2">
                        <p className="font-bold">Return Policy</p>
                        <p className="text-sm">
                            Returning an item is very easy, read details 
                            <span className="text-primary"> here</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}