import React, { useState, useEffect } from "react";
import { Box, Grid } from "@mui/material";
import { MovieCard } from "./MovieCard/MovieCard";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxTyped";
import { Movie } from "./types/MoviesType";
import { fetchMovies } from "./MoviesApi/services/services";
import { PaginationButtons } from "../../shared/PaginationButtons/PaginationButtons";

export const Movies = () => {
  const dispatch = useAppDispatch();

  const { movies, page, pages } = useAppSelector((state) => state.movies);

  const [pageNow, setPageNow] = useState(parseInt(location.search?.split("=")[1]) || 1);

  const changePage = (_: React.SyntheticEvent<EventTarget>, value: number) => {
    setPageNow(value);
  };

  useEffect(() => {
    dispatch(fetchMovies(pageNow));
  }, [dispatch, pageNow]);

  return (
    <Box sx={{ mx: "auto", mt: 2, maxWidth: 1300 }}>
      <Grid container spacing={1} sx={{ pt: 2 }}>
        {movies.map((movie: Movie) => (
          <Grid key={movie.id} item xs={6} sm={4} md={3} sx={{ display: "flex" }}>
            <MovieCard {...movie} />
          </Grid>
        ))}
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
