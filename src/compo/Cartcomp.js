import React, { useContext } from 'react';
import { Cart } from './ContextApi';
import { Helmet } from 'react-helmet';

export default function Cartcomp() {

    const { cart, setCart } = useContext(Cart);

    const total = () => {
        return cart.reduce((acc, curr) => acc + curr.price, 0).toFixed(2);
    };

    const truncateTitle = (title, maxWords) => {
        const words = title.split(' ');
        if (words.length > maxWords) {
            return words.slice(0, maxWords).join(' ') + '...';
        }
        return title;
    };

    const removeFromCart = (id) => {
        setCart(cart.filter((prod) => prod.id !== id));
    };

    return (
        <section className="text-gray-600 lg:py-20 sm:py-40 md:py-20 body-font bg-gray-300 h-screen">
            <Helmet>
                <title>BuyBuddy - Your Ultimate Shopping Destination</title>
                <meta name="description" content="BuyBuddy offers a wide range of products at unbeatable prices. Shop now for the best deals on electronics, fashion, home goods, and more!" />
            </Helmet>
            <div className="container px-5 py-2 mx-auto">
                {
                    cart.length >= 1 && (
                        <div className="text-2xl my-2 mb-4 w-fit bg-blue-600 text-white px-4 rounded-sm py-1 ">Total price: ${total()}</div>
                    )
                }
                <div className="flex justify-center flex-wrap -m-4">
                    {
                        cart.length === 0 ? (
                            <div className="w-full flex justify-center items-center mt-3 text-2xl bg-blue-600 text-white rounded-md py-2">Cart is empty!</div>
                        ) : (
                            cart.map((prod, key) => (

                                <div key={key} className="lg:w-1/4 md:w-1/2 p-4 w-full">
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
                                        <button onClick={() => removeFromCart(prod.id)} className="text-white bg-blue-600 px-1 md:text-sm md:py-2 lg:py-1 sm:py-1 py-2  rounded-sm title-font font-medium">
                                            Remove from Cart
                                        </button>
                                    </div>
                                </div>
                            ))
                        )
                    }
                </div>
            </div>
        </section>
    )
}
