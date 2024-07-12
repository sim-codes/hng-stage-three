import { MagnifyingGlassMinusIcon } from "@heroicons/react/16/solid";
import { FunnelIcon } from "@heroicons/react/24/outline";
import Image from "next/image";


export default function SearchSection() {
    return (
        <section className="max-w-screen self-stretch md:flex flex-col m-2">
          <div className="w-full flex flex-wrap justify-between items-center my-2 p-3">
            <h2 className="font-bold text-2xl my-5">Search by categories</h2>

            <div className="flex justify-between gap-2 w-full lg:w-fit">
              <div className="flex gap-2 items-center bg-[#F9FAFB] border rounded-full p-2 w-[80%]">
                <input type="text" placeholder="Search for food..." 
                className="bg-transparent p-1 focus:outline-none focus:border-none max-w-2xl text-[#BCB9B4] w-full" />
                <MagnifyingGlassMinusIcon className="h-5 w-5 text-[#BCB9B4]" />
              </div>

              <button className="flex justify-center items-center bg-[#F9FAFB]  text-[#BCB9B4] rounded-full w-12 h-12 border">
                <FunnelIcon className="h-5 w-5" />
              </button>         
            </div>
          </div>

          <div className="flex md:gap-8 lg:gap-8 overflow-x-auto whitespace-nowrap no-scrollbar p-0">
            <div className="m-2 flex flex-col items-center gap-3">
              <div className="w-48 h-48 bg-gray-200 rounded-full flex items-center justify-center 
                overflow-hidden bg-[url('/images/swallow.png')] bg-no-repeat bg-center bg-cover hover:-translate-y-1 hover:scale-110 transition ease-in-out duration-300 cursor-pointer">
              </div>
                <p className="font-bold">Swallow</p>
            </div>
            <div className="m-2 flex flex-col items-center gap-3">
              <div className="w-48 h-48 bg-gray-200 rounded-full flex items-center justify-center 
                overflow-hidden bg-[url('/images/soups.png')] bg-no-repeat bg-center bg-cover hover:-translate-y-1 hover:scale-110 transition ease-in-out duration-300 cursor-pointer">
              </div>
                <p className="font-bold">Soups</p>
            </div>
            <div className="m-2 flex flex-col items-center gap-3">
              <div className="w-48 h-48 bg-gray-200 rounded-full flex items-center justify-center 
                overflow-hidden bg-[url('/noodle.png')] bg-no-repeat bg-center bg-cover hover:-translate-y-1 hover:scale-110 transition ease-in-out duration-300 cursor-pointer">
              </div>
                <p className="font-bold">Noodles</p>
            </div>
            <div className="m-2 flex flex-col items-center gap-3">
              <div className="w-48 h-48 bg-gray-200 rounded-full flex items-center justify-center 
                overflow-hidden bg-[url('/snack.png')] bg-no-repeat bg-center bg-cover hover:-translate-y-1 hover:scale-110 transition ease-in-out duration-300 cursor-pointer">
              </div>
                <p className="font-bold">Snacks</p>
            </div>
            <div className="m-2 flex flex-col items-center gap-3">
              <div className="w-48 h-48 bg-gray-200 rounded-full flex items-center justify-center 
                overflow-hidden bg-[url('/images/salads.png')] bg-no-repeat bg-center bg-cover hover:-translate-y-1 hover:scale-110 transition ease-in-out duration-300 cursor-pointer">
              </div>
                <p className="font-bold">Salads</p>
            </div>
            <div className="m-2 flex flex-col items-center gap-3">
              <div className="w-48 h-48 bg-gray-200 rounded-full flex items-center justify-center 
                overflow-hidden bg-[url('/images/drinks.png')] bg-no-repeat bg-center bg-cover hover:-translate-y-1 hover:scale-110 transition ease-in-out duration-300 cursor-pointer">
              </div>
                <p className="font-bold">Drinks</p>
            </div>
          </div>
      </section>
    )
}