"use client";
import React, { useContext, useEffect, useState } from "react";

import AppContext from "../../../context/AppContext";
import RandomBoard from "../../../components/Chess Boards/RandomBoard";
import DefaultController from "../../../components/Controller/DefaultController";
import SinglePlayerBoard from "../../../components/Chess Boards/SinglePlayerBoard";
import { getSinglePlayerGame } from "../../../apis/singlePlayerGames";

type Props = {
  params: {
    gameId: string;
  };
};

const SinglePlayerGame = ({ params }: Props) => {
  const { state, dispatch } = useContext(AppContext);
  console.log(params.gameId);

  return (
    <div className="game-div">
      <div className="game-board">{<SinglePlayerBoard />}</div>
      <div className="game-controller">{<DefaultController />}</div>
    </div>
  );
};

export default SinglePlayerGame;
