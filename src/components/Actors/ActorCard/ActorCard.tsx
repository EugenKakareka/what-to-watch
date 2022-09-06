import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import { Actor } from "../types/ActorsPageType";
import { IMAGE_API_S } from "../../../shared/api/api";
import { fetchActor } from "../../ActorDetail/ActorDetailApi/services/services";
import { useAppDispatch } from "../../../hooks/reduxTyped";
import { Path } from "../../../routes/pathList";

export const ActorCard: React.FC<Actor> = ({ id, name, known_for, profile_path }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const filmList = known_for.reduce((acc: string[], item) => {
    if (Object.prototype.hasOwnProperty.call(item, "original_name")) {
      acc.push(item.original_name);
    } else {
      acc.push(item.original_title);
    }
    return acc;
  }, []);

  const knownFor = filmList.join(", ").slice(0, 40) + "...";

  return (
    <Card
      sx={{ maxWidth: 300, flexGrow: 1 }}
      onClick={() => {
        navigate(`${Path.ACTORS}:${id}`);
        dispatch(fetchActor(id));
      }}
    >
      <CardActionArea>
        <CardMedia component="img" height="300" image={`${IMAGE_API_S}${profile_path}`} alt={name} />
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
