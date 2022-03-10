import React from "react";
import { Navbar } from "../components/ui/NavBar";
import { Routes, Route } from "react-router-dom";
import { MarvelScreen } from "../components/marvel/MarvelScreen";
import { DcScreen } from "../components/dc/DcScreen";
import { SearchScreen } from "../components/search/SearchScreen";
import { HeroeScreen } from "../components/heroe/HeroeScreen";

export const DashBoardRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container">
      <Routes>
        <Route path="marvel" element={<MarvelScreen />} />
        <Route path="dc" element={<DcScreen />} />
        <Route path="search" element={<SearchScreen />} />
        <Route path="heroe/:heroeId" element={<HeroeScreen />} />
        <Route path="/" element={<MarvelScreen />} />
      </Routes>

      </div>
    </>
  );
};
