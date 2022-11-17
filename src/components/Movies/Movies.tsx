import React, { useState, useEffect } from "react";
import { Box, Grid } from "@mui/material";
import { MovieCard } from "./MovieCard/MovieCard";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxTyped";
import { Movie } from "./types/MoviesType";
import { fetchMovies } from "./MoviesApi/services/services";
import { PaginationButtons } from "../../shared/PaginationButtons/PaginationButtons";
import { searchMovie } from "../Search/searchApi/services/services";

export const Movies = () => {
  const dispatch = useAppDispatch();

  const { search } = useAppSelector((state) => state.search);

  let movies, page, pages;

  if (search) {
    movies = useAppSelector((state) => state.search.movies);
    page = useAppSelector((state) => state.search.page);
    pages = useAppSelector((state) => state.search.pages);
  } else {
    movies = useAppSelector((state) => state.movies.movies);
    page = useAppSelector((state) => state.movies.page);
    pages = useAppSelector((state) => state.movies.pages);
  }

  const [pageNow, setPageNow] = useState(parseInt(location.search?.split("=")[1]) || 1);

  const changePage = (_: React.SyntheticEvent<EventTarget>, value: number) => {
    setPageNow(value);
  };

  useEffect(() => {
    if (search) {
      dispatch(searchMovie(search, pageNow));
    }
    dispatch(fetchMovies(pageNow));
  }, [dispatch, search, pageNow]);

  return (
    <Box sx={{ mx: "auto", mt: 2, maxWidth: 1400 }}>
      <Grid container spacing={2} justifyContent="space-around">
        {movies.map((movie: Movie) => (
          <Grid key={movie.id} item sx={{ display: "flex" }}>
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
