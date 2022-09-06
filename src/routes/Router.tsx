import React from "react";
import { Routes, Route } from "react-router-dom";
import { NotFound } from "../components/NotFound/NotFound";
import { Login } from "../components/Login/Login";
import { Movies } from "../components/Movies/Movies";
import { Actors } from "../components/Actors/Actors";
import { ActorDetail } from "../components/ActorDetail/ActorDetail";
import { Path } from "./pathList";
import { MovieDetail } from "../components/MovieDetail/MovieDetail";
import { Favourites } from "../components/Favourites/Favourites";

export const Router = () => (
  <Routes>
    <Route path={Path.HOME} element={<Movies />} />
    <Route path={Path.MOVIE} element={<MovieDetail />} />
    <Route path={Path.ACTORS} element={<Actors />} />
    <Route path={Path.ACTOR} element={<ActorDetail />} />
    <Route path={Path.FAV} element = {<Favourites/>}/>
    <Route path={Path.LOGIN} element={<Login />} />
    <Route path={Path.NOT_FOUND} element={<NotFound />} />
  </Routes>
);
