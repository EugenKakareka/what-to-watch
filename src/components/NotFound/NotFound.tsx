import React from "react";
import { Link } from "react-router-dom";
import { Path } from "../../routes/pathList";

export const NotFound = () => (
  <div>
    This page does not exist. Go <Link to={Path.HOME}>home</Link>
  </div>
);
