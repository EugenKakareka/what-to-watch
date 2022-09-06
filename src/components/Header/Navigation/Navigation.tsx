import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { Path } from "../../../routes/pathList";

export const Navigation: React.FC = () => (
  <>
    <Button
      component={Link}
      to={Path.HOME}
      sx={{ my: 2, color: "primary.contrastText", display: "block" }}
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
