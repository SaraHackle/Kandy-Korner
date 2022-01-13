import React from "react";
import { Route } from "react-router-dom";
import { LocationList } from "./locations/LocationList";
import { ProductList } from "./products/ProductList";

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
    </>
  );
};
