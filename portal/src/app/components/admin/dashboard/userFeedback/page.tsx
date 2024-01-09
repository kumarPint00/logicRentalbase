"use client";
import React from "react";
import { Box } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import SideDrawer from "../sideDrawer/page";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

const UserFeedback = () => {
  const [open, setOpen] = React.useState(true);

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <SideDrawer />
        <Main open={open}  style={{marginTop:"2rem"}}>
          <h1>User FeedBack</h1>
        </Main>
      </Box>
    </>
  );
};

export default UserFeedback;
