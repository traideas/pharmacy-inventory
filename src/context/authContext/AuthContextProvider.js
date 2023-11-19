import React, { createContext, useContext } from "react";

import useAuthDetails from './useAuthDetails'

export const AuthContext = createContext(null);

export function useAuth() {
  return useContext(AuthContext);
}

const AuthContextProvider = ({ children }) => {
  const allContexts = useAuthDetails();
  //console.log(allContexts, 'authContext provider')
  return (
    <AuthContext.Provider value={allContexts}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;