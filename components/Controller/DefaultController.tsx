import React, { useContext } from "react";
import {
  createSinglePlayerGame,
  getSinglePlayerGame,
} from "../../apis/singlePlayerGames";
import AppContext from "../../context/AppContext";

const DefaultController = () => {
  const { state, dispatch } = useContext(AppContext);

  const newSinglePlayerGame = async () => {
    const success = await createSinglePlayerGame(state, dispatch);
    if (success) {
      console.log("New game created");
    } else {
      console.log("Error creating new game");
    }
  };

  return <button onClick={newSinglePlayerGame}>Single Player</button>;
};

export default DefaultController;
