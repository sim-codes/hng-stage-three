import { MagnifyingGlassMinusIcon } from "@heroicons/react/16/solid";
import Link from "next/link";


export default function SearchSection() {
    return (
        <section className="max-w-screen self-stretch md:flex flex-col m-2">
          <div className="w-full flex flex-wrap justify-between items-center my-2 p-3">
            <h2 className="font-bold text-2xl my-5">Search by categories</h2>
            <div className="flex gap-2 items-center bg-[#F9FAFB] border rounded-full p-2 md:w-[433px] w-[239px]">
                <input type="text" placeholder="Search for food..." 
                className="bg-transparent p-1 focus:outline-none focus:border-none max-w-2xl text-[#BCB9B4] w-full" />
                <MagnifyingGlassMinusIcon className="h-5 w-5 text-[#BCB9B4]" />
            </div> 
          </div>

          <div className="flex md:gap-8 lg:gap-8 overflow-x-auto whitespace-nowrap no-scrollbar p-0">
            <Link href={`/category/124c6113dd054a5a84bbae8ae9be7ec6`}>
            <div className="m-2 flex flex-col items-center gap-3">
              <div className="w-48 h-48 bg-gray-200 rounded-full flex items-center justify-center 
                overflow-hidden bg-[url('/images/swallow.png')] bg-no-repeat bg-center bg-cover hover:-translate-y-1 hover:scale-110 transition ease-in-out duration-300 cursor-pointer">
              </div>
                <p className="font-bold">Swallow</p>
            </div>
            </Link>
            <Link href={`/category/c90a3b0d030b4799886672f3d5ed1935`}>
            <div className="m-2 flex flex-col items-center gap-3">
              <div className="w-48 h-48 bg-gray-200 rounded-full flex items-center justify-center 
                overflow-hidden bg-[url('/images/soups.png')] bg-no-repeat bg-center bg-cover hover:-translate-y-1 hover:scale-110 transition ease-in-out duration-300 cursor-pointer">
              </div>
                <p className="font-bold">Soups</p>
            </div>
            </Link>
            <Link href={`/category/77dd8eb8fb5e460987157920ff961513`}>
            <div className="m-2 flex flex-col items-center gap-3">
              <div className="w-48 h-48 bg-gray-200 rounded-full flex items-center justify-center 
                overflow-hidden bg-[url('/noodle.png')] bg-no-repeat bg-center bg-cover hover:-translate-y-1 hover:scale-110 transition ease-in-out duration-300 cursor-pointer">
              </div>
                <p className="font-bold">Meal</p>
            </div>
            </Link>
            <Link href={`/category/95446c22d6b645d49081554a86ec868f`}>
            <div className="m-2 flex flex-col items-center gap-3">
              <div className="w-48 h-48 bg-gray-200 rounded-full flex items-center justify-center 
                overflow-hidden bg-[url('/images/icecream.png')] bg-no-repeat bg-center bg-cover hover:-translate-y-1 hover:scale-110 transition ease-in-out duration-300 cursor-pointer">
              </div>
                <p className="font-bold">Ice Cream</p>
            </div>
            </Link>
            <Link href={`/category/2c7c21f2501e42eab83a49a6ff37d989`}>
            <div className="m-2 flex flex-col items-center gap-3">
              <div className="w-48 h-48 bg-gray-200 rounded-full flex items-center justify-center 
                overflow-hidden bg-[url('/snack.png')] bg-no-repeat bg-center bg-cover hover:-translate-y-1 hover:scale-110 transition ease-in-out duration-300 cursor-pointer">
              </div>
                <p className="font-bold">Snacks</p>
            </div>
            </Link>
            <Link href={`/category/6e06db0c8cd64cf0b079b2e7de15053c`}>
            <div className="m-2 flex flex-col items-center gap-3">
              <div className="w-48 h-48 bg-gray-200 rounded-full flex items-center justify-center 
                overflow-hidden bg-[url('/images/salads.png')] bg-no-repeat bg-center bg-cover hover:-translate-y-1 hover:scale-110 transition ease-in-out duration-300 cursor-pointer">
              </div>
                <p className="font-bold">Salads</p>
            </div>
            </Link>
            <Link href={`/category/9dfef41528484830a98b4a8b51e26f1b`}>
            <div className="m-2 flex flex-col items-center gap-3">
              <div className="w-48 h-48 bg-gray-200 rounded-full flex items-center justify-center 
                overflow-hidden bg-[url('/images/drinks.png')] bg-no-repeat bg-center bg-cover hover:-translate-y-1 hover:scale-110 transition ease-in-out duration-300 cursor-pointer">
              </div>
                <p className="font-bold">Drinks</p>
            </div>
            </Link>
            <Link href={`/category/0222c04ee9c64c47b81a7729a29ab52e`}>
            <div className="m-2 flex flex-col items-center gap-3">
              <div className="w-48 h-48 bg-gray-200 rounded-full flex items-center justify-center 
                overflow-hidden bg-[url('/images/decaf.png')] bg-no-repeat bg-center bg-cover hover:-translate-y-1 hover:scale-110 transition ease-in-out duration-300 cursor-pointer">
              </div>
                <p className="font-bold">Coffee</p>
            </div>
            </Link>
          </div>
      </section>
    )
}