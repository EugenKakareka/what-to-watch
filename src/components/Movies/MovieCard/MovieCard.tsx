import React from "react";
import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import { Movie } from "../types/MoviesType";
import { IMAGE_API } from "../../../shared/api/api";

export const MovieCard: React.FC<Movie> = ({ poster_path, original_title, release_date }) => {
  return (
    <Card sx={{ maxWidth: 300, flexGrow: 1 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={`${IMAGE_API}${poster_path}`}
          alt={original_title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {original_title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {release_date}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
