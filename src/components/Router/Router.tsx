import React from "react";
import { Routes, Route } from "react-router-dom";
import { NotFound } from "../NotFound/NotFound";
import { Login } from "../Login/Login";
import { Movies } from "../Movies/Movies";
import { Actors } from "../Actors/Actors";
import { ActorDetail } from "../ActorDetail/ActorDetail";
import { Path } from "./pathList";
import { MovieDetail } from "../MovieDetail/MovieDetail";

export const Router = () => (
  <Routes>
    <Route path={Path.HOME} element={<Movies />} />
    <Route path={Path.MOVIE} element={<MovieDetail />} />
    <Route path={Path.ACTORS} element={<Actors />} />
    <Route path={Path.ACTOR} element={<ActorDetail />} />
    <Route path={Path.LOGIN} element={<Login />} />
    <Route path={Path.NOT_FOUND} element={<NotFound />} />
  </Routes>
);
