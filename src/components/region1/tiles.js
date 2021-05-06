import { Box, Grid, Typography } from "@material-ui/core";
import { ArrowForward } from "@material-ui/icons";
import React from "react";
import { style } from "./style";

function Tiles() {
  const classes = style();
  return (
    <>
      <Grid container spacing={4} style={{ justifyContent: "space-around" }}>
        <Grid item>
          <Box
            style={{
              backgroundColor: "#2958C1",
              borderRadius: "10px",
              padding: "15px 15px",
            }}
          >
            <Typography
              style={{ color: "white", fontSize: 14, marginBottom: 10 }}
            >
              Todays Order-200
            </Typography>
            <Typography style={{ color: "white", fontSize: 14 }}>
              Current Week order-450
            </Typography>
          </Box>
        </Grid>
        <Grid item>
          <Box
            style={{
              backgroundColor: "#2958C1",
              borderRadius: "10px",
              padding: "15px 15px",
            }}
          >
            <Typography
              style={{ color: "white", fontSize: 14, marginBottom: 10 }}
            >
              Todays Order Amount-20000
            </Typography>
            <Typography style={{ color: "white", fontSize: 14 }}>
              Current Week Amount-100
            </Typography>
          </Box>
        </Grid>
        <Grid item>
          <Box
            style={{
              backgroundColor: "#2958C1",
              borderRadius: "10px",
              padding: "15px 15px",
            }}
          >
            <Typography
              style={{ color: "white", fontSize: 14, marginBottom: 10 }}
            >
              MTD Order-400
            </Typography>
            <Typography style={{ color: "white", fontSize: 14 }}>
              Last Month order-100
            </Typography>
          </Box>
        </Grid>
        <Grid item>
          <Box
            style={{
              backgroundColor: "#2958C1",
              borderRadius: "10px",
              padding: "15px 15px",
            }}
          >
            <Typography
              style={{ color: "white", fontSize: 14, marginBottom: 10 }}
            >
              MTD Order Amount-65000
            </Typography>
            <Typography style={{ color: "white", fontSize: 14 }}>
              Last month amount-45000
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Tiles;
