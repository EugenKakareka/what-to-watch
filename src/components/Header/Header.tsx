import React from "react";
import { AppBar, Box, Container } from "@mui/material";
import { Navigation } from "./Navigation/Navigation";
import { SearchField } from "./SearchField/SearchField";
import { LoginButton } from "./LoginButton/LoginButton";
import { Logo } from "./Logo/Logo";

export const Header: React.FC = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl" sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignContent: "center" }}>
          <Logo />
          <Navigation />
        </Box>
        <Box sx={{ flexGrow: 1, pl: 4, pr: 4, pt: 1 }}>
          <SearchField />
        </Box>
        <Box>
          <LoginButton />
        </Box>
      </Container>
    </AppBar>
  );
};
