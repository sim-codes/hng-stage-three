"use client";

import {useState, createContext, useContext} from "react"
import { Cart } from "@/app/lib/definitons"
import { HotDishes, Snacks, Soups,
    MealsMenu, Salads, Drinks, IceCreams, Swallow, Coffees
 } from "@/app/lib/data";
 import { useRouter } from 'next/navigation'



type CartContextType = {
    cart: Array<Cart>;
    totalPrice: number;
    addToCart: (itemId: string) => void;
    removeFromCart: (id: string) => void;
    addReduceProductQuantity: (id: string, action: string) => void;
    clearCart: () => void;
}

const CartContext = createContext<CartContextType>({
    cart: [],
    totalPrice: 0,
    addToCart: function (id: string): void {
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

    const [cart, setCart] = useState(Array<Cart>)
    const [ totalPrice, setTotalPrice ] = useState<number>(0)

    const combinedList = [
        ...HotDishes, ...Snacks, ...Soups,
        ...Salads, ...Coffees, ...Drinks,
        ...Swallow,...IceCreams, ...MealsMenu
    ]

    const router = useRouter()

    const addToCart = (itemId: string) => {
    
        // Find the item in itemsList based on itemId
        const selectedItem = combinedList.find(item => item.id === itemId);
    
        if (selectedItem) {
            // Check if the item already exists in the cart
            const existingItem = cart.find(item => item.id === itemId);
    
            if (existingItem) {
                // Item with the same id exists, update its quantity
                const updatedCart = cart.map(item =>
                    item.id === itemId ? { ...item, qty: item.qty + 1 } : item
                );
                setCart(updatedCart);
            } else {
                // Item does not exist in the cart, add new item
                const newItem: Cart = {
                    id: selectedItem.id,
                    name: selectedItem.name,
                    price: selectedItem.price,
                    qty: 1,
                    image: selectedItem.image,
                    description: selectedItem.description,
                };
                const updatedCart = [...cart, newItem];
                setCart(updatedCart);
            }

            // Update the total price
            setTotalPrice(totalPrice + selectedItem.price);
            
            // Navigate to the cart page
            return router.push('/cart');
        } else {
            console.error(`Item with id ${itemId} not found in itemsList.`);
        }
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
