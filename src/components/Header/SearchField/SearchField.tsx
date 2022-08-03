import React from "react";
import { Box, Button, Input } from "@mui/material";
import "./SearchField.scss";

const style = {
  button: {
    color: "secondary.contarstText",
    boxShadow: "none",
    "&:hover": {
      boxShadow: "none",
      color: "primary.contrastText",
    },
  },
  input: {
    bgcolor: "secondary.light",
    "&::after": {
      borderBottom: "none",
    },
    "&::before": {
      content: "none",
    },
  },
};

export const SearchField: React.FC = () => (
  <Box className="search">
    <Input className="input" placeholder="Enter movie name" sx={style.input} />
    <Button variant="contained" color="secondary" className="button" sx={style.button}>
      search
    </Button>
  </Box>
);
