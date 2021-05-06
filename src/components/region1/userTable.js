import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { useSelector } from "react-redux";
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function UserTable() {
  const classes = useStyles();
  const state = useSelector((state) => state.users);

  function createData(name, amt, qty, city) {
    return { name, amt, qty, city };
  }
  console.log(state);
  let temp = [...state];
  temp = temp.sort((a, b) => b.amount - a.amount).slice(0, 5);
  let temp1 = [...state];
  temp1 = temp1.sort((a, b) => a.amount - b.amount).slice(0, 5);

  const rowsTop = temp.map((el) =>
    createData(el.name, el.amount, el.quantity, el.city)
  );
  const rowsBottom = temp1.map((el) =>
    createData(el.name, el.amount, el.quantity, el.city)
  );
  return (
    <div>
      <TableContainer elevation={5} component={Paper}>
        <Typography
          style={{
            textAlign: "center",
            fontSize: 20,
            fontWeight: 600,
            textDecoration: "underline",
          }}
        >
          Top 5 Users
        </Typography>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: 600 }}>User Name</TableCell>
              <TableCell style={{ fontWeight: 600 }} align="right">
                Total Amount
              </TableCell>
              <TableCell style={{ fontWeight: 600 }} align="right">
                Total Quantity
              </TableCell>
              <TableCell style={{ fontWeight: 600 }} align="right">
                City
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rowsTop.map((row) => (
              <TableRow key={row.orderNo}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.amt}</TableCell>
                <TableCell align="right">{row.qty}</TableCell>
                <TableCell align="right">{row.city}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TableContainer style={{ marginTop: 20 }} elevation={5} component={Paper}>
        <Typography
          style={{
            textAlign: "center",
            fontSize: 20,
            fontWeight: 600,
            textDecoration: "underline",
          }}
        >
          Bottom 5 users
        </Typography>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: 600 }}>User Name</TableCell>
              <TableCell style={{ fontWeight: 600 }} align="right">
                Total Amount
              </TableCell>
              <TableCell style={{ fontWeight: 600 }} align="right">
                Total Quantity
              </TableCell>
              <TableCell style={{ fontWeight: 600 }} align="right">
                City
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rowsBottom.map((row) => (
              <TableRow key={row.orderNo}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.amt}</TableCell>
                <TableCell align="right">{row.qty}</TableCell>
                <TableCell align="right">{row.city}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default UserTable;
