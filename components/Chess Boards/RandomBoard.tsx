import React, { useContext, useEffect, useState } from "react";
import { Chessboard, Square } from "react-chessboard";
import {
  createSinglePlayerGame,
  getSinglePlayerGame,
  updateSinglePlayerGame,
} from "../../apis/singlePlayerGames";
import AppContext from "../../context/AppContext";
import { Chess, Move, Piece } from "chess.js";
import { ActionKind } from "../../types/Context";
import { boardWidth, customPieces } from "../../utils/chessUtils";

type RandomBoardProps = {
  boardWidth: number;
  customPieces: () => any;
};

const RandomBoard = () => {
  const [game, setGame] = useState<Chess>(new Chess());

  useEffect(() => {
    const waiter = setTimeout(() => {
      makeRandomMove();
    }, 1000);
    return () => clearTimeout(waiter);
  }, [game]);

  const makeAMove = (move: string | Move) => {
    const gameCopy = Object.assign(new Chess(), game);
    const result = gameCopy.move(move);
    setGame(gameCopy);
    // console.log(result)
    return result; // null if the move was illegal, the move object if the move was legal
  };

  const makeRandomMove = () => {
    const possibleMoves = game.moves();
    const newMove =
      possibleMoves[Math.floor(Math.random() * possibleMoves.length)];
    // console.log(newMove);
    makeAMove(newMove);
  };

  const onDrop = async (
    sourceSquare: Square,
    targetSquare: Square,
    piece: Piece
  ) => {
    console.log("This is just a random board");
  };

  return (
    <Chessboard
      id={0}
      animationDuration={200}
      boardWidth={boardWidth}
      position={game.fen()}
      // @ts-ignore
      onPieceDrop={onDrop}
      customBoardStyle={{
        borderRadius: "4px",
        boxShadow: "0 5px 15px rgba(0, 0, 0, 0.5)",
      }}
      customDarkSquareStyle={{
        backgroundColor: "#779952",
      }}
      customLightSquareStyle={{
        backgroundColor: "#edeed1",
      }}
      customPieces={customPieces()}
      customDropSquareStyle={{
        borderRadius: "2px",
      }}
      arePremovesAllowed={false}
      showBoardNotation={false}
    />
  );
};

export default RandomBoard;
