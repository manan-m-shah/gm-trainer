import React, { useContext } from 'react'
import { Chessboard, Square } from "react-chessboard";
import { createSinglePlayerGame, getSinglePlayerGame, updateSinglePlayerGame } from '../../apis/singlePlayerGames'
import AppContext from '../../context/AppContext'
import { Chess, Move, Piece } from "chess.js";
import { ActionKind } from '../../types/Context';
import { boardWidth, customPieces } from '../../utils/chessUtils';

type SinglePlayerBoardProps = {
    boardWidth: number, customPieces: () => any
}

const SinglePlayerBoard = ({ boardWidth, customPieces }: SinglePlayerBoardProps) => {
    const { state, dispatch } = useContext(AppContext)

    const makeAMove = (move: string | Move) => {
        const gameCopy = new Chess(state.fen!);
        const result = gameCopy.move(move);
        dispatch({ type: ActionKind.SET_FEN, payload: gameCopy.fen() });
        console.log(result)
        return result; // null if the move was illegal, the move object if the move was legal
    }

    // const makeRandomMove = () => {
    //     const game = new Chess(state.fen!);
    //     const possibleMoves = game.moves();
    //     const newMove = possibleMoves[Math.floor(Math.random() * possibleMoves.length)];
    //     console.log(newMove);
    //     makeAMove(newMove);
    // }

    const updateMove = async (move: string | Move) => {
        const success = await updateSinglePlayerGame(state, dispatch, move);
        if (success) {
            console.log("Move updated");
        }
    }

    const onDrop = async (sourceSquare: Square, targetSquare: Square, piece: Piece) => {
        const move = {
            from: sourceSquare,
            to: targetSquare,
        } as Move;

        const gameCopy = new Chess(state.fen!);

        const result = makeAMove(move);

        if (result === null) {
            console.log("Illegal move");
            return;
        } else {
            console.log("Legal move");
        }

        const updated = await updateMove(move);
    }

    return (
        <Chessboard
            id={1}
            animationDuration={200}
            boardWidth={boardWidth}
            position={state.fen!}
            // @ts-ignore
            onPieceDrop={onDrop}
            customBoardStyle={{
                borderRadius: '4px',
                boxShadow: '0 5px 15px rgba(0, 0, 0, 0.5)'
            }}
            customDarkSquareStyle={{ backgroundColor: '#779952' }}
            customLightSquareStyle={{ backgroundColor: '#edeed1' }}
            customPieces={customPieces()}
            customDropSquareStyle={{ 
                borderRadius: '2px',
             }}
            arePremovesAllowed={false}
            showBoardNotation={false}
        />
    )
}

export default SinglePlayerBoard