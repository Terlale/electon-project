import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Singin from "../pages/signin/Signin";

import Basket from "../pages/basket/Basket";
import Favorite from "../pages/favorite/Favorite";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signin" element={<Singin/>}/>
        <Route path="/favourites" element={<Favorite/>}/>
        <Route path="/basket" element={<Basket/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
