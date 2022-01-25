import React, { useReducer, createContext } from "react";

export const GlobalContext = createContext([]);

const initialState = {
  email: "",
  password: ""
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "SAVE_LOGIN":
      return {
        ...state,
        email: action.email

      };
    case "SAVE_PASSWORD":
      return {
        ...state,
        password: action.password
      };
    default:
      return {
        ...state
      };
  }
};

export const GlobalContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <GlobalContext.Provider value={[state, dispatch]}>
      {props.children}
    </GlobalContext.Provider>
  );
};
export default GlobalContextProvider;
