import React, { createContext, useContext, useReducer } from "react";

export const dataLayerContext = createContext();

export const DataLayer = ({ reducer, initialState, children }) => (
  <dataLayerContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </dataLayerContext.Provider>
);

export const useDataLayerValue = () => useContext(dataLayerContext);

