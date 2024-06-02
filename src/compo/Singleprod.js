import React, { useContext, useState, useEffect } from 'react';
import { Cart } from './ContextApi';

export default function Singleprod({ prod }) {
    const { cart, setCart } = useContext(Cart);
    const [inCart, setInCart] = useState(false);

    useEffect(() => {
        setInCart(cart.some(item => item.id === prod.id));
    }, [cart, prod.id]);

    const truncateTitle = (title, maxWords) => {
        const words = title.split(' ');
        if (words.length > maxWords) {
            return words.slice(0, maxWords).join(' ') + '...';
        }
        return title;
    };

    const handleCartAction = (prod) => {
        if (inCart) {
            setCart(cart.filter(item => item.id !== prod.id));
            // alert('Removed from cart');
        } else {
            setCart([...cart, prod]);
            // alert('Added to cart');
        }
        setInCart(!inCart);
    };

    return (
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a className="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={prod.image} />
            </a>
            <div className="h-32 pt-3 flex justify-between items-center">
                <div className="w-44 flex flex-col justify-between h-full">
                    <h3 className="text-gray-600 text-xs tracking-widest title-font mb-1">{prod.category}</h3>
                    <h2 className="text-gray-900 title-font text-base font-medium">
                        {truncateTitle(prod.title, 7)}
                    </h2>
                    <p className="mt-1">${prod.price}</p>
                </div>
                <button
                    onClick={() => handleCartAction(prod)}
                    className="text-white bg-blue-600 px-3 py-1 rounded-sm title-font font-medium"
                >
                    {inCart ? 'Remove from Cart' : 'Add to Cart'}
                </button>
            </div>
        </div>
    );
}
