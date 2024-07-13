import { StarIcon } from "@heroicons/react/16/solid"
import Image from "next/image"


export default function SProductReview() {
    return (
        <div className="max-w-5xl space-y-10">
            <div className="flex flex-col gap-7 text-sm">
                <div className="w-full flex gap-2">
                    <div className="relative overflow-hidden w-12 h-12 bg-black rounded-full">
                      <Image src="/images/user.png" alt="profile" className="object-cover" fill={true} />
                    </div>

                    <div className="flex flex-col gap-2">
                      <div className="flex flex-col self-stretch">
                        <p className="font-bold">
                          Kristin Watson
                        </p>
                        <div className="flex items-center">
                            <StarIcon className="h-5 w-5 text-secondary" />
                            <StarIcon className="h-5 w-5 text-secondary" />
                            <StarIcon className="h-5 w-5 text-secondary" />
                            <StarIcon className="h-5 w-5 text-secondary" />
                            <StarIcon className="h-5 w-5 text-secondary" />
                        </div>
                      </div>

                        <p className="text-sm">
                            You made it so simple. My new site is so much faster and easier to 
                            work with than my old site. I just choose the page, make the changes.
                        </p>
                        <p>January 28, 2023</p>

                      
                    </div>
                  </div>
            </div>

            <div className="flex flex-col gap-7 text-sm">
                <div className="w-full flex gap-2">
                    <div className="relative overflow-hidden w-12 h-12 bg-black rounded-full">
                      <Image src="/images/user.png" alt="profile" className="object-cover" fill={true} />
                    </div>

                    <div className="flex flex-col gap-2">
                      <div className="flex flex-col self-stretch">
                        <p className="font-bold">
                          Jenny
                        </p>
                        <div className="flex items-center">
                            <StarIcon className="h-5 w-5 text-secondary" />
                            <StarIcon className="h-5 w-5 text-secondary" />
                            <StarIcon className="h-5 w-5 text-secondary" />
                            <StarIcon className="h-5 w-5 text-secondary" />
                            <StarIcon className="h-5 w-5 text-secondary" />
                        </div>
                      </div>

                        <p className="text-sm">
                            You made it so simple. My new site is so much faster and easier to 
                            work with than my old site. I just choose the page, make the changes.
                        </p>
                        <p>January 28, 2023</p>

                      
                    </div>
                  </div>
            </div>

            <div className="flex flex-col gap-7 text-sm">
                <div className="w-full flex gap-2">
                    <div className="relative overflow-hidden w-12 h-12 bg-black rounded-full">
                      <Image src="/images/user.png" alt="profile" className="object-cover" fill={true} />
                    </div>

                    <div className="flex flex-col gap-2">
                      <div className="flex flex-col self-stretch">
                        <p className="font-bold">
                          Betty Copper
                        </p>
                        <div className="flex items-center">
                            <StarIcon className="h-5 w-5 text-secondary" />
                            <StarIcon className="h-5 w-5 text-secondary" />
                            <StarIcon className="h-5 w-5 text-secondary" />
                            <StarIcon className="h-5 w-5 text-secondary" />
                            <StarIcon className="h-5 w-5 text-secondary" />
                        </div>
                      </div>

                        <p className="text-sm">
                            You made it so simple. My new site is so much faster and easier to work with 
                            than my old site. I just choose the page, make the changes.
                        </p>
                        <p>January 28, 2023</p>

                      
                    </div>
                  </div>
            </div>
        </div>
    )
}