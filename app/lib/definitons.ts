export type Slide = {
    imageUrl: string;
    slideText1: string;
    slideText2: string;
}

export type CarouselProps = {
    slides: Array<Slide>;
}

export type MenuData = {
    id: string;
    name: string;
    price: number;
    image: string;
}

export type Product = {
    id: string;
    name: string;
    price: number;
    image: string;
    description: string;
}

export type Cart = {
    id: string;
    name: string;
    price: number;
    qty: number;
    image: string;
    description: string;
}

export type Photo = {
    url: string

}

export type PriceData = {
    NGN: number[],
}

export type SData = {
    id: string,
    name: string,
    description: string,
    current_price: number,
    photos: Photo[]
}

export type Data = {
    id: string,
    name: string,
    description: string,
    current_price: PriceData[],
    photos: Photo[]

}

export type AllAPIData = {
    total: number,
    items: Data[]
}