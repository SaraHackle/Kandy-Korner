import React from "react";
import { Route } from "react-router-dom";
import { LocationList } from "./locations/LocationList";
import { ProductList } from "./products/ProductList";
import { EmployeeList } from "./employees/EmployeeList";
import { EmployeeForm } from "./employees/EmployeeForm";

export const ApplicationViews = () => {
  return (
    <>
      <Route path="/locations">
        <h2>Locations: </h2>
        <LocationList />
      </Route>
      <Route path="/products">
        <h2>Products:</h2>
        <ProductList />
      </Route>
      <Route exact path="/employees">
        <h2>Employees:</h2>
        <EmployeeList />
      </Route>
      <Route path="/employees/create">
        <EmployeeForm />
      </Route>
    </>
  );
};
