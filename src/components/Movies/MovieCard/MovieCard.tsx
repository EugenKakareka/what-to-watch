import React from "react";
import { Card, CardActionArea, CardHeader, CardMedia} from "@mui/material";
import { Movie } from "../types/MoviesType";
import { IMAGE_API_S } from "../../../shared/api/api";
import { fetchMovie } from "../../MovieDetail/MovieDeatilApi/services/services";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../hooks/reduxTyped";
import { Path } from "../../../routes/pathList";

export const MovieCard: React.FC<Movie> = ({ id, poster_path, original_title, release_date }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return (
    <Card
      sx={{ width: 250, flexGrow: 1 }}
      onClick={() => {
        navigate(`${Path.HOME}:${id}`);
        dispatch(fetchMovie(id));
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          image={`${IMAGE_API_S}${poster_path}`}
          alt="poster"
        />
        <CardHeader title={original_title} subheader={release_date} />
      </CardActionArea>
    </Card>
  );
};
