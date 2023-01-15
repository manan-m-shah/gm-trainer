// create app context and provider
import { useRouter } from "next/navigation";
import React, { createContext, useEffect, useReducer, useState } from "react";
import { getSinglePlayerGame } from "../apis/singlePlayerGames";
import { Action, State } from "../types/Context";
import AppContext from "./AppContext";
import initialState from "./initialState";
import reducer from "./reducer";

const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const router = useRouter();

  //* Route to new page on uid change
  useEffect(() => {
    if (state.uid) {
      router.push(`/mono/${state.uid}`);
    }
  }, [state.uid]);

  return (
    <AppContext.Provider
      value={
        { state, dispatch } as {
          state: State;
          dispatch: React.Dispatch<Action>;
        }
      }
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
