import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router";
import { Box, Grid } from "@mui/material";
import { useAppSelector } from "../../hooks/reduxTyped";
import { ActorCard } from "./ActorCard/ActorCard";
import { fetchActors } from "./ActorsApi/services/services";
import { Actor } from "./types/ActorsPageType";
import { AppDispatch } from "../../store/store";
import { PaginationButtons } from "./PaginationButtons/PaginationButtons";

export const Actors: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const location = useLocation();

  const { actors, page, pages, error } = useAppSelector((state) => state.actors);

  const [pageNow, setPageNow] = useState(parseInt(location.search?.split("=")[1]) || 1);

  const changePage = (_: React.SyntheticEvent<EventTarget>, value: number) => {
    setPageNow(value);
  };

  useEffect(() => {
    dispatch(fetchActors(pageNow));
  }, [dispatch, pageNow]);

  return (
    <Box sx={{ mx: "auto", mt: 2, maxWidth: 1300 }}>
      {error && <h1>{error}</h1>}
      <Grid container spacing={1} sx={{ pt: 2 }}>
        {actors &&
          actors.map((actor: Actor) => {
            return (
              <Grid item key={actor.id} xs={12} md={3} sm={4} sx={{ display: "flex" }}>
                <ActorCard {...actor} />
              </Grid>
            );
          })}
      </Grid>
      <PaginationButtons
        count={pages}
        page={page}
        path={location.pathname}
        changePage={changePage}
      />
    </Box>
  );
};
