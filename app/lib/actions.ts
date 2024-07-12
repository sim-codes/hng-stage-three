"use client";

import useSWR from 'swr';
import { fetcher } from '@/app/fetcher';
import { Product } from '@/app/lib/definitons';

type Photo = {
    url: string

}

type Data = {
    id: string,
    name: string,
    description: string,
    current_price: number,
    photos: Photo[]

}

type APIData = {
    items: Data[]
}
export async function getProducts(currentPage: number) {
    
    const data = await useSWR<APIData>(`
        /products?organization_id=${process.env.ORG_ID}&page=1&size=10&Appid=${process.env.APP_ID}&Apikey=${process.env.API_KEY}
        `, fetcher);

    return data;
}


export function getCategoryId(menu: string, setCategoryId: (id: string) => void) {
    switch (menu) {
        case "Snacks":
            setCategoryId("2c7c21f2501e42eab83a49a6ff37d989")
            break;
        case "Drinks":
            setCategoryId("9dfef41528484830a98b4a8b51e26f1b")
            break;
        case "Meals":
            setCategoryId("77dd8eb8fb5e460987157920ff961513")
            break;
        case "Swallow":
            setCategoryId("124c6113dd054a5a84bbae8ae9be7ec6")
            break;
        case "Ice Cream":
            setCategoryId("95446c22d6b645d49081554a86ec868f")
            break;
        case "Soups":
            setCategoryId("c90a3b0d030b4799886672f3d5ed1935")
            break;
        case "Coffee":
            setCategoryId("0222c04ee9c64c47b81a7729a29ab52e")
            break;
        case "Salad":
            setCategoryId("6e06db0c8cd64cf0b079b2e7de15053c")
            break;
        default:
            setCategoryId("6e06db0c8cd64cf0b079b2e7de15053c")
    }
}