import React from "react";
import { Link } from "react-router-dom";
import { Stack, Pagination, PaginationItem } from "@mui/material";

interface Props {
  count: number;
  page: number;
  path: string;
  changePage: (e: React.SyntheticEvent<EventTarget>, value: number) => void;
}

export const PaginationButtons: React.FC<Props> = ({ count, page, path, changePage }: Props) => (
  <Stack spacing={2} sx={{ alignItems: "center", marginY: 2 }}>
    <Pagination
      count={count}
      page={page}
      onChange={changePage}
      variant="outlined"
      renderItem={(item) => (
        <PaginationItem component={Link} to={`${path}?page=${item.page}`} {...item} />
      )}
    />
  </Stack>
);
