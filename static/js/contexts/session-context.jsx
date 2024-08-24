import React from "react";

export const SessionContext = React.createContext({
  user: null,
  isLogged: () => {},
  setUser: (newUser) => {},
  logout: () => {},
  login: (token) => {},
});