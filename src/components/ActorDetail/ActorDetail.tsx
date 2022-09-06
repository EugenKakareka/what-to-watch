import React, { useState } from "react";
import { Avatar, Box, Button, Typography } from "@mui/material";
import { useAppSelector } from "../../hooks/reduxTyped";
import { IMAGE_API_L } from "../../shared/api/api";

const styles = {
  wrapper: {
    display: "flex",
    margin: "10px 10px 10px 10px",
    color: "primary.dark",
  },
  leftSideBar: {
    display: "flex",
    flexDirection: "column",
  },
  main: {
    width: "70%",
  },
  avatar: {
    width: 400,
    height: 600,
    borderRadius: "10px",
    margin: "0 20px 20px 0",
    boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
  },
  heading: {
    paddingTop: "20px",
  },
};

export const ActorDetail = () => {
  
  const actor = useAppSelector((state) => state.actorDetail.actor);

  const [showMore, setShowMore] = useState<boolean>(false);

  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.leftSideBar}>
        <Avatar
          src={`${IMAGE_API_L}${actor.profile_path}`}
          alt={actor.name}
          variant="square"
          sx={styles.avatar}
        />
        <Typography variant="h4">Personal Info</Typography>
        <Typography variant="h5" sx={styles.heading}>
          Birthday
        </Typography>
        <Typography variant="h6">{actor.birthday}</Typography>
        <Typography variant="h5" sx={styles.heading}>
          Place of Birth
        </Typography>
        <Typography variant="h6">{actor.place_of_birth}</Typography>
      </Box>
      <Box sx={styles.main}>
        <Typography variant="h3">{actor.name}</Typography>
        <Typography variant="h5" sx={styles.heading}>
          Biography
        </Typography>
        <Typography>
          {showMore
            ? actor?.biography
            : actor?.biography.length > 400
            ? actor?.biography.slice(0, 400) + "..."
            : actor?.biography.slice(0, 400) + ""}
        </Typography>
        {!showMore && actor.biography.length > 400 && (
          <Button
            onClick={() => {
              setShowMore(true);
            }}
          >
            Show more &gt;
          </Button>
        )}
      </Box>
    </Box>
  );
};
