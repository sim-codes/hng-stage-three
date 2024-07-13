import SearchSection from "@/app/ui/home/searchSection"
import SnackSection from "@/app/ui/meals/snacksSection"
import ReviewsSection from "@/app/ui/reviews"
import { Suspense } from "react"
import OfferSection from "@/app/ui/meals/offerSection"
import Carousel from "@/app/ui/carousel";


import { Slide } from "@/app/lib/definitons";

const slides: Array<Slide> = [
    { imageUrl: "/heroImage.png",
        slideText1: "Craving delicious food?",
        slideText2: "Discover the perfect dish for you",
     },
    {
        imageUrl: "/slide2.png",
        slideText1: "Indulge in our Mouth-Watering",
        slideText2: "Menu Today with Irresistible Food!",
     },
     {
        imageUrl: "/slide3.png",
        slideText1: "Satisfy your Cravings with ",
        slideText2: "Something Tasty! Click to order Now!",
     },
     {
        imageUrl: "/slide4.png",
        slideText1: "Don't Wait Any Longer,",
        slideText2: "Dive into our Amazing Menu",
     },
     {
        imageUrl: "/slide5.png",
        slideText1: "Treat yourself to a Culinary Delight",
        slideText2: "Place your order Now!",
     },
     {
        imageUrl: "/slide6.png",
        slideText1: "Hurry, Don’t Wait Anymore,",
        slideText2: "Tantalize your Taste Buds Today!!",
     },
]

export default function Meals() {
    return (
        <main className="flex flex-col items-center min-h-screen md:px-12 lg:px-24">
            <Carousel slides={slides} />
            <SearchSection />

            <Suspense fallback={<div>Loading...</div>}>
                <SnackSection />
            </Suspense>

            <OfferSection />
            <ReviewsSection />
        </main>
    )
}