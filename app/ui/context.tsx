"use client";

import {useState, createContext, useContext, useEffect} from "react"
import { Cart } from "@/app/lib/definitons"
import { HotDishes, Snacks, Soups,
    MealsMenu, Salads, Drinks, IceCreams, Swallow, Coffees
 } from "@/app/lib/data";
 import { useRouter } from 'next/navigation'



type CartContextType = {
    cart: Array<Cart>;
    totalPrice: number;
    addToCart: (itemId: string, name: string, price: number, qty: number, image: string, description: string) => void;
    removeFromCart: (id: string) => void;
    addReduceProductQuantity: (id: string, action: string) => void;
    clearCart: () => void;
}

const CartContext = createContext<CartContextType>({
    cart: [],
    totalPrice: 0,
    addToCart: function (itemId: string, name: string, price: number, qty: number, image: string, description: string): void {
        throw new Error("Function not implemented.");
    },
    removeFromCart: function (id: string): void {
        throw new Error("Function not implemented.");
    },
    addReduceProductQuantity: function (id: string, action: string): void {
        throw new Error("Function not implemented.");
    },
    clearCart: function (): void {
        throw new Error("Function not implemented.");
    }
})

export function Provider({ children }: Readonly<{ children: React.ReactNode}>) {

    const [local] = useState(():Array<Cart> => {
        if (typeof window === 'undefined') return Array<Cart>();
        const data = window.localStorage.getItem('cart');
        return data ? JSON.parse(data) : Array<Cart>();
    })

    const [cart, setCart] = useState(local)
    const [ totalPrice, setTotalPrice ] = useState<number>(0)

    useEffect(() => {
        window.localStorage.setItem('cart', JSON.stringify(cart))
        setTotalPrice(cart.reduce((acc, item) => acc + item.price * item.qty, 0))
    }
    ,[cart])

    const router = useRouter()

    const addToCart = (
        itemId: string,
        name: string,
        price: number,
        qty: number,
        image: string,
        description: string
    ) => {
    
        // Check if the item already exists in the cart
        const existingItem = cart.find(item => item.id === itemId);
    
        if (existingItem) {
            // Item with the same id exists, update its quantity
            const updatedCart = cart.map(item =>
                item.id === itemId ? { ...item, qty: item.qty + qty } : item
            );
            setCart(updatedCart);
        } else {
            // Item does not exist in the cart, add new item
            const newItem: Cart = {id: itemId, name, price, qty, image, description};

            const updatedCart = [...cart, newItem];
            setCart(updatedCart);
        }
        console.log('image url',image)

        // Update the total price
        setTotalPrice(totalPrice + (price*qty));
        
        // Navigate to the cart page
        return router.push('/cart');
    };
    
    
    const getProduct = (name: string) => {
        switch (name) {
            case "Meals":
                return MealsMenu;
            case "Snack":
                return Snacks;
            case "Soups":
                return Soups;
            case "Salads":
                return Salads;
            case "Drinks":
                return Drinks;
            case "Ice Creams":
                return IceCreams;
            case "Swallow":
                return Swallow;
            case "Coffee & Tea":
                return Coffees;
            default:
                return HotDishes;
        }
    }

    // remove item from the setState variable
    const removeFromCart = (id: string) => {
        // Filter out the item with the specified id
        const updatedCart = cart.filter(item => item.id !== id);
    
        // Calculate the updated total price
        const updatedTotalPrice = updatedCart.reduce((total, item) => total + item.price, 0);
    
        // Update the cart and the total price in state
        setCart(updatedCart);
        setTotalPrice(updatedTotalPrice);  // Assuming setTotalPrice is your setter for the total price state
    }

    // clear cart
    const clearCart = () => {
        setCart([])
        setTotalPrice(0)
    }

    // update product quantity in the setState variable
    const addReduceProductQuantity = (id: string, action: string) => {
        const updatedCart = cart.map(item => {
            if (item.id === id) {
                if (action === "add" && item.qty < 10) {
                    item.qty += 1
                } else if (action === "sub" && item.qty > 1){
                    item.qty -= 1
                }
            }
            return item
        })
        setCart(updatedCart)
        // update price
        setTotalPrice(cart.reduce((acc, item) => acc + item.price * item.qty, 0))
    }

    // useEffect(() => {
    //     cart.forEach(menuType => {
    //         const productList = getProduct(menuType.menu);
    //         updateStateWithMenuProducts(menuType.menu, menuType, productList);
    //         setTotalPrice((prev) => prev + menuType.data.reduce((acc, item) => {
    //             const product = productList.find(p => p.id === item.id);
    //             return acc + (product ? product.price * item.qty : 0);
    //         }, 0));
    //     })
    // }, [cart])

    return (
        <CartContext.Provider 
        value={{ cart, addToCart, totalPrice,
        removeFromCart, addReduceProductQuantity, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}

export function useCartState() {
    return useContext(CartContext)
}
