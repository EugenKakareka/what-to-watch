import React from "react";
import { Box, CardMedia, Grid, Typography } from "@mui/material";
//import FavoriteIcon from "@mui/icons-material/Favorite";
//import ShareIcon from "@mui/icons-material/Share";
import { useAppSelector } from "../../hooks/reduxTyped";
import { IMAGE_API_L } from "../../shared/api/api";

export const MovieDetail = () => {
  const movie = useAppSelector((state) => state.movieDeatail.movie);

  return (
    <Box sx={{ mx: "auto", my: 2, maxWidth: 1400 }}>
      <Grid container spacing={2}>
        <Grid item md={4}>
          <CardMedia
            component="img"
            image={`${IMAGE_API_L}${movie.poster_path}`}
            alt={movie.title}
          />
        </Grid>
        <Grid item md={8} sx={{ mt: 4 }}>
          <Typography variant="h4">{movie.title}</Typography>
          <Typography variant="body1" sx={{ mt: 4 }}>
            {movie.overview}
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-around" }}>
            <Box>
              <Typography variant="subtitle1">Budget</Typography>
              <Typography variant="body1">{movie.budget}</Typography>
            </Box>
            <Box>
              <Typography variant="subtitle1">Revenue</Typography>
              <Typography variant="body1">{movie.revenue}</Typography>
            </Box>
            <Box>
              <Typography variant="subtitle1">Runtime</Typography>
              <Typography variant="body1">{movie.runtime}</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
