import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { Path } from "../../Router/pathList";

export const LoginButton: React.FC = () => (
  <Button component={Link} to={Path.LOGIN} sx={{ my: 2, color: "primary.contrastText", display: "block" }}>
    Login
  </Button>
);
