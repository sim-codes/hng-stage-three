import SearchSection from "@/app/ui/home/searchSection"
import SnackSection from "@/app/ui/productsSection"
import ReviewsSection from "@/app/ui/reviews"
import { Suspense } from "react"
import Carousel from "@/app/ui/carousel";
import { slides } from "@/app/lib/data";

export default function Meals() {
    return (
        <main className="flex flex-col items-center min-h-screen md:px-12 lg:px-24">
            <Carousel slides={slides} />
            <SearchSection />

            <Suspense fallback={<div>Loading...</div>}>
                <SnackSection />
            </Suspense>

            <ReviewsSection />
        </main>
    )
}
