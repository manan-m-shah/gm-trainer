"use client";
import React, { useContext, useEffect, useState } from "react";

import AppContext from "../../../context/AppContext";
import RandomBoard from "../../../components/Chess Boards/RandomBoard";
import DefaultController from "../../../components/Controller/DefaultController";
import SinglePlayerBoard from "../../../components/Chess Boards/SinglePlayerBoard";
import { getSinglePlayerGame } from "../../../apis/singlePlayerGames";
import { ActionKind } from "../../../types/Context";

type Props = {
  params: {
    gameId: string;
  };
};

const SinglePlayerGame = ({ params }: Props) => {
  const { state, dispatch } = useContext(AppContext);
  console.log(params.gameId);

  //* If the game id is not set in the context, set it
  // useful for when the user refreshes the page
  // or when the user onboards through a link
  useEffect(() => {
    if (!state.uid) {
      dispatch({
        type: ActionKind.SET_UID,
        payload: params.gameId,
      });
    }
  }, [params.gameId]);

  return (
    <div className="game-div">
      <div className="game-board">{<SinglePlayerBoard />}</div>
      <div className="game-controller">{<DefaultController />}</div>
    </div>
  );
};

export default SinglePlayerGame;
