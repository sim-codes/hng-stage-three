import { EnvelopeIcon } from "@heroicons/react/16/solid"
import Image from "next/image"
import Link from "next/link"
import Icons from "./icons"

import mailIcon from "@/public/icons/mail.svg"
import telIcon from "@/public/icons/tel.svg"

export  default function Footer(){
    return (
        <footer className="bg-[#0A0200] max-w-screen text-white px-8 md:px-24 lg:px-24 py-5">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 w-full pb-5 text-sm mt-10">
                <div className="">
                    <Link href="/">
                        <Image src="/logoFooter.png" alt="MasterChef Logo" width={100} height={100} />
                    </Link>
                    <p className="">
                        From fluffy pastries to delicious meals, we pride ourselves 
                        on using only the finest ingredients to create mouthwatering 
                        masterpieces that will tantalize your taste buds.
                    </p>
                </div>
                <div className="md:col-span-2 lg:col-span-2 flex gap-5 justify-evenly">
                    <div className="flex flex-col gap-3">
                        <h3 className="font-bold text-lg">Company</h3>
                        <ul className="flex flex-col gap-2">
                            <li>About us</li>
                            <li>Menu</li>
                            <li>Careers</li>
                            <li>Offers</li>
                        </ul>
                    </div>

                    <div className="flex flex-col gap-3">
                        <h3 className="font-bold text-lg">Contact</h3>
                        <ul className="flex flex-col gap-2">
                            <li>Help & Support</li>
                            <li>Partner with us</li>
                            <li>Ride with us</li>
                        </ul>
                    </div>

                    <div className="flex flex-col gap-3">
                        <h3 className="font-bold text-lg">Resources</h3>
                        <ul className="flex flex-col gap-2">
                            <li>Terms & Conditions</li>
                            <li>Refund & Cancellation</li>
                            <li>Privacy Policy</li>
                            <li>Cookie Policy</li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col gap-8">
                    <h3 className="font-bold text-lg text-white">Follow us</h3>
                    
                    <Icons />
                    <p>Receive exclusive offers in your mailbox</p>
                    <div className="flex gap-2">
                        <div className="flex items-center p-2 bg-[#424242] rounded-md w-[70%]">
                            <EnvelopeIcon className="h-5 w-5 text-white" />
                            <input type="text" placeholder="Enter your email" 
                            className="p-1 bg-transparent focus:outline-none focus:border-none w-full" />
                        </div>
                        
                        <button className="bg-primary text-white text-sm p-4 rounded-md">Subscribe</button>
                    </div>
                </div>
            </div>

            <hr className="text-[#424242] my-5" />

            <div className="flex flex-col mt-5 py-5">
                <h3 className="font-bold my-2">Our top cities</h3>
                <div className="grid grid-cols-3 gap-3 md:grid-cols-5 lg:grid-cols-5 text-white">
                    <div className="">
                        <ul className="flex flex-col gap-2">
                            <li>Abuja</li>
                            <li>Okene</li>
                            <li>Umuahia</li>
                            <li>Kaduna</li>
                        </ul>
                    </div>

                    <div className="">
                        <ul className="flex flex-col gap-2">
                            <li>Enugu</li>
                            <li>Osun</li>
                            <li>Osogbo</li>
                            <li>Portharcourt</li>
                        </ul>
                    </div>

                    <div className="">
                        <ul className="flex flex-col gap-2">
                            <li>Lagos</li>
                            <li>Abeokuta</li>
                            <li>Oyo City</li>
                            <li>Ibadan</li>
                        </ul>
                    </div>

                    <div className="">
                        <ul className="flex flex-col gap-2">
                            <li>Jos City</li>
                            <li>Niger</li>
                            <li>Calabar</li>
                            <li>Onisha</li>
                        </ul>
                    </div>
                
                    <div className="flex flex-col gap-5 col-span-2 lg:col-span-1 md:col-span-1">
                        <h3 className="font-bold text-lg">Contacts</h3>

                        <div className="flex gap-3">
                            <Image src={mailIcon} alt="Mail Icon" width="30" />
                            <p>info@masterchef.com</p>
                        </div>
                        <div className="flex gap-3">
                            <Image src={telIcon} alt="Tel Icon" width="30" />
                            <p className="text-nowrap">+234 9079199124</p>
                        </div>
                    </div>
                </div>
            </div>

            <hr className="text-[#424242] my-5" />

            <div className="flex flex-wrap-reverse gap-5 justify-center md:justify-between lg:justify-between items-center py-5 text-sm">
                <p className="text-center md:text-left">&copy; 2024, All Rights Reserved by FaithStore</p>
                
                <div className="flex justify-center items-center gap-2">
                    <Image src="/images/visa.png" alt="Visa Icon" width={50} height={40} className=" object-contain" />
                    <Image src="/images/mastercard.png" alt="Mastercard Icon" width={50} height={40} className=" object-contain" />
                    <Image src="/images/paypal.png" alt="PayPal Icon" width={70} height={40} className=" object-contain" />
                </div>
            </div>
        </footer>
    )
}