import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "../../../hooks/reduxTyped";
import { Box, Button, Input } from "@mui/material";
import "./SearchField.scss";
import { searchMovie } from "../../Movies/MoviesApi/services/services";

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

type FormValues = {
  name: string;
};

export const SearchField: React.FC = () => {
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm<FormValues>();

  const [disabled, setDisabled] = useState(true);

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.value.length >= 3) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }

  function startSearchMovie(value: { name: string; }) {
    dispatch(searchMovie(value.name));
  }

  return (
    <Box className="search">
      <Input
        className="input"
        placeholder="Enter movie name"
        id="name"
        {...register("name")}
        onChange={onChange}
        sx={style.input}
      />
      <Button
        variant="contained"
        color="secondary"
        className="button"
        sx={style.button}
        disabled={disabled}
        onClick={handleSubmit(startSearchMovie)}
      >
        Search
      </Button>
    </Box>
  );
};
