import React from 'react';
import Home from './Home';
import Header from './Header';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Cartcomp from './Cartcomp';
import { Helmet } from 'react-helmet';

export default function AppMain() {
    return (
        <BrowserRouter>
            <Helmet>
                <title>BuyBuddy - Your Ultimate Shopping Destination</title>
                <meta name="description" content="BuyBuddy offers a wide range of products at unbeatable prices. Shop now for the best deals on electronics, fashion, home goods, and more!" />
            </Helmet>
            <Header />
            <div>
                <Routes>
                    <Route path='/buybuddy' element={<Home />} />
                    <Route path='/cart' element={<Cartcomp />} />
                    <Route path="*" element={<Navigate to="/buybuddy" />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}
