import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import { Actor } from "../types/ActorsPageType";
import { useAppDispatch } from "../../../hooks/reduxTyped";
import { actorsSlice } from "../reducer/ActorsSlice";
import { IMAGE_API } from "../../../shared/api/api";

export const ActorCard: React.FC<Actor> = ({ id, name, known_for, profile_path }) => {
  const navigate = useNavigate();

  const filmList = known_for.reduce((acc: string[], item) => {
    if (Object.prototype.hasOwnProperty.call(item, "original_name")) {
      acc.push(item.original_name);
    } else {
      acc.push(item.original_title);
    }
    return acc;
  }, []);

  const knownFor = filmList.join(", ").slice(0, 40) + "...";

  const dispatch = useAppDispatch();

  return (
    <Card
      sx={{ maxWidth: 300, flexGrow: 1 }}
      onClick={() => {
        navigate(`/actors/:${id}`);
        dispatch(actorsSlice.actions.select(id));
      }}
    >
      <CardActionArea>
        <CardMedia component="img" height="300" image={`${IMAGE_API}${profile_path}`} alt={name} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {knownFor}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
