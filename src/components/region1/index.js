import { Box, Grid, Paper, Typography } from "@material-ui/core";
import React from "react";
import ChartComponent from "./chart";
import OrderTable from "./orderTable";
import Tiles from "./tiles";
import UserTable from "./userTable";

function Main(props) {
  return (
    <>
      <Box style={{ marginLeft: 40, marginBottom: 40 }}>
        <Typography style={{ fontSize: 24, fontWeight: 600 }}>
          Dashboard
        </Typography>
      </Box>
      <Tiles></Tiles>
      <Paper style={{ margin: "50px 20px" }} elevation={5}>
        <ChartComponent></ChartComponent>
      </Paper>
    </>
  );
}

export default Main;
