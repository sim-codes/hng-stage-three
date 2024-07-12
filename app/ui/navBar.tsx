'use client';

import { useState } from "react";
import { Logo } from "./Logo"
import Link from "next/link"
import Image from "next/image";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { ChevronDownIcon, Bars3BottomRightIcon, XMarkIcon, ChevronRightIcon, ArrowRightIcon } from "@heroicons/react/16/solid";
import { ShoppingBagIcon, UsersIcon, UserIcon, ShoppingCartIcon, HeartIcon } from "@heroicons/react/24/outline";
import mealIcon from "@/public/icons/meal.svg";


const links = {
    home: {
        href: "/",
        label: "Home"
    },
    about: {
        href: "#",
        label: "About"
    },
    meals: {
        href: "/meals",
        label: "Products"
    },
    offers: {
        href: "#",
        label: "Offers"
    },
    contact: {
        href: "#",
        label: "Contact"
    }

}

export default function NavBar(){
    const pathname = usePathname()
    const [navOpen, setNavOpen] = useState(false);
    const toggleNav = () => setNavOpen(!navOpen);

    const [isLogin, setIsLogin] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="relative">
            <nav className="">
                <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-24">
                    <div className="flex items-center justify-between h-20">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                            <Link href="/">
                                <Image src="/masterChef.png" alt="MasterChef Logo" width={100} height={100} />
                            </Link>
                            </div>
                        </div>
                        <div className="hidden md:flex items-center justify-between gap-5">
                            <div className="ml-4 flex gap-10 items-center space-x-4">
                                <Link href="/" className={`flex ${pathname === '/'? 'text-primary' : 'text-[#3B3533]]'}`
                                    }>Meals
                                </Link>
                            </div>
                        </div>
                        {isLogin ? (
                            <div className="relative flex gap-6">
                                <Link href="/cart" className="text-[#3B3533] hidden md:flex items-center justify-center bg-[#F6F6F6] rounded-full w-12 h-12">
                                    <ShoppingCartIcon className="w-6 h-6" />
                                </Link>
                                
                                <button className="text-[#616161] hidden md:flex items-center justify-center bg-[#F6F6F6] rounded-full w-12 h-12">
                                    <HeartIcon className="w-6 h-6" />
                                </button>                                
                                <button onClick={() => setMenuOpen(!menuOpen)}
                                    className="text-[#3B3533] hidden md:flex justify-center items-center gap-2">
                                    <div className="relative bg-black rounded-full w-12 h-12 overflow-hidden">
                                        <Image src="/images/segun.png" alt="profile" className="object-cover" fill={true} />
                                    </div>
                                    <ChevronDownIcon className="w-4 h-4" />
                                </button>

                                {menuOpen && (
                                    <div className="absolute bg-white p-5 w-56 top-14 z-10 right-0">
                                        <button onClick={() => {
                                            setIsLogin(false)
                                            setMenuOpen(!menuOpen)
                                        }}
                                            className="flex justify-center items-center gap-3 font-semibold bg-primary text-white rounded-lg p-4 w-auto h-12">
                                            Logout
                                            <ArrowRightIcon className="w-4 h-4" />
                                        </button>
                                    </div>
                                )}   

                            </div>
                        ) : (
                            <div className="flex gap-4">
                                <Link href="/cart" className="text-[#3B3533] hidden md:flex items-center justify-center bg-[#F6F6F6] rounded-full w-12 h-12">
                                    <ShoppingCartIcon className="w-6 h-6" />
                                </Link>
                                <button onClick={() => setIsLogin(true)}
                                    className="hidden md:flex justify-center items-center gap-3 font-semibold bg-primary text-white rounded-lg p-4 w-auto h-12">
                                    Login
                                    <ArrowRightIcon className="w-4 h-4" />
                                </button>
                            </div>
                        )}               
                        <div className="md:hidden flex items-center">
                            <Link href="/cart" className="text-[#3B3533] flex items-center justify-center bg-[#F6F6F6] rounded-full w-10 h-10">
                                <ShoppingCartIcon className="w-4 h-4" />
                            </Link>
                            <button
                                className="inline-flex items-center justify-center p-2 rounded-md text-black md:text-black
                                focus:outline-none focus:ring-0 focus:ring-inset focus:ring-black"
                                onClick={toggleNav}
                                >
                                    {navOpen ? (
                                        <XMarkIcon className="absolute z-30 right-5 h-6 w-6 cursor-pointer transition-all" />
                                    ) : (
                                        isLogin ? (
                                            <div className="cursor-pointer transition-all">
                                                <button className="text-[#3B3533] flex justify-center items-center gap-2">
                                                    <div className="relative bg-black rounded-full w-12 h-12 overflow-hidden">
                                                        <Image src="/images/segun.png" alt="profile" className="object-cover" fill={true} />
                                                    </div>
                                                    <ChevronDownIcon className="w-4 h-4" />
                                                </button>
                                            </div>
                                        ) : (
                                            <Bars3BottomRightIcon className="h-6 w-6 cursor-pointer transition-all" />
                                        )
                                    )}
                            </button>
                        </div>
                    </div>
                </div>
                {navOpen && (
                    <div className="w-[90vw] bg-[#fff] md:hidden absolute z-20 top-2 right-0 p-3 transition-all">
                        {isLogin && (
                            <div className="flex items-center gap-3 mx-2 my-4">
                                <div className="relative bg-black rounded-full w-10 h-10 overflow-hidden">
                                    <Image src="/images/segun.png" alt="profile" className="object-cover" fill={true} />
                                </div>
                                <h1 className="font-bold text-lg">Ibrahim Michael</h1>
                            </div>
                        )}
                        <div className="grid gap-5 px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <Link href="/" className={`flex justify-between 
                                ${pathname === '/'? 'text-primary' : 'text-[#3B3533]]'}`
                                }>
                                <div className="flex gap-2">
                                <Image src={mealIcon} alt="meal" width={30} height={30} />
                                    Meals
                                </div>
                                <ChevronRightIcon className="w-4 h-4" />
                            </Link>

                            {isLogin ? (
                                <>
                                    <button onClick={() => {
                                        setIsLogin(false)
                                        setNavOpen(!navOpen)
                                    }}
                                        className="flex justify-center items-center font-semibold gap-3 bg-primary text-white rounded-lg p-2 w-auto h-12">
                                            Logout
                                            <ArrowRightIcon className="w-4 h-4" />
                                    </button>
                                </>
                                
                            ): (
                                <button onClick={() => {
                                    setIsLogin(true)
                                    setNavOpen(!navOpen)
                                }}
                                    className="flex justify-center items-center gap-3 font-semibold bg-primary text-white rounded-lg p-2 w-auto h-12">
                                    Login
                                    <ArrowRightIcon className="w-4 h-4" />
                                </button>
                            )}
                        </div>
                    </div>
                )
                }
            </nav>
        </div>
    )
}