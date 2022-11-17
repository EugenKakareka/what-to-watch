import React, { useState, useRef } from "react";
import { Box, Button, Input } from "@mui/material";
import { useAppDispatch } from "../../hooks/reduxTyped";
import { searchMovie } from "./searchApi/services/services";
import "./Search.scss";

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

export const SearchField: React.FC = () => {
  const dispatch = useAppDispatch();

  const ref = useRef<HTMLInputElement>();

  const [disabled, setDisabled] = useState(true);

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.value.length >= 3) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }

  const handleClear = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    startSearchMovie(ref.current!.value);
    ref.current!.value = "";
    setDisabled(true);
  };

  const startSearchMovie = (query: string) => {
    dispatch(searchMovie(query));
  };

  return (
    <Box className="search">
      <Input
        className="input"
        placeholder="Enter movie name"
        id="query"
        onChange={onChange}
        sx={style.input}
        inputRef={ref}
      />
      <Button
        variant="contained"
        color="secondary"
        className="button"
        sx={style.button}
        disabled={disabled}
        onClick={handleClear}
      >
        Search
      </Button>
    </Box>
  );
};
