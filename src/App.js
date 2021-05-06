import React from "react";
import "./App.css";
import NavbarComponent from "./common/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./components/region1/index";
import { Route } from "react-router-dom";
import OrderTable from "./components/region1/orderTable";
import UserTable from "./components/region1/userTable";

function App() {
  return (
    <div>
      <NavbarComponent></NavbarComponent>
      <Route path="/" exact component={Main}></Route>
      <Route path="/order" exact component={OrderTable}></Route>
      <Route path="/user" exact component={UserTable}></Route>
    </div>
  );
}

export default App;
