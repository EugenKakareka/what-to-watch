import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { Path } from "../../../routes/pathList";
import { useAppDispatch } from "../../../hooks/reduxTyped";
import { searchResetAction } from "../../Search/reducer/searchAction";

export const Navigation: React.FC = () => {
  const dispatch = useAppDispatch();

  function reset() {
    dispatch(searchResetAction());
  }

  return (
    <>
      <Button
        component={Link}
        to={Path.HOME}
        sx={{ my: 2, color: "primary.contrastText", display: "block" }}
        onClick={reset}
      >
        Movies
      </Button>
      <Button
        component={Link}
        to={Path.ACTORS}
        sx={{ my: 2, color: "primary.contrastText", display: "block" }}
      >
        Actors
      </Button>
      <Button
        component={Link}
        to={Path.FAV}
        sx={{ my: 2, color: "primary.contrastText", display: "block" }}
      >
        Favorites
      </Button>
    </>
  );
};
