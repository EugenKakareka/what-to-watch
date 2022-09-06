import React from "react";
import { Box, Typography } from "@mui/material";
//import TheatersIcon from "@mui/icons-material/Theaters";

export const Logo = () => (
  <Box sx={{ pt: 2 }}>
    {/* <TheatersIcon sx={{ mr: 1 }} /> */}
    <Typography
      variant="h4"
      noWrap
      component="a"
      href="/"
      sx={{
        mr: 2,
        fontFamily: "monospace",
        fontWeight: 700,
        letterSpacing: ".3rem",
        color: "primary.contrastText",
        textDecoration: "none",
      }}
    >
      WTW
    </Typography>
  </Box>
);
