import { useContext, useEffect, useState } from "react";
import React from 'react'
import Singleprod from "./Singleprod";
import { Cart } from "./ContextApi";
import { Helmet } from "react-helmet";

export default function Home() {
    const [products, setProducts] = useState([]);
    const { query, setQuery } = useContext(Cart);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${query}`)
            .then(response => response.json())
            .then(data => setProducts(data))
    }, [query]);

    return (
        <section className="text-gray-600 body-font
         lg:py-20 sm:py-40 bg-gray-300">
            <Helmet>
                <title>BuyBuddy - Your Ultimate Shopping Destination</title>
                <meta name="description" content="BuyBuddy offers a wide range of products at unbeatable prices. Shop now for the best deals on electronics, fashion, home goods, and more!" />
            </Helmet>
            <div className="container px-5 py-2 mx-auto">
                <div className="flex flex-wrap -m-4">
                    {products.map((prod, key) => (
                        <Singleprod key={key} prod={prod} />
                    ))
                    }
                </div>
            </div>
        </section>
    )
}
