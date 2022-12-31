'use client'
import React, { useEffect, useState } from "react";

import { Chess, Move, Piece } from "chess.js";
import { Chessboard, Square } from "react-chessboard";

const pieces = ['wP', 'wN', 'wB', 'wR', 'wQ', 'wK', 'bP', 'bN', 'bB', 'bR', 'bQ', 'bK'];

// calculate the board width based on the window size
const boardWidth = 700;

const customPieces = () => {
    const returnPieces = {} as any;
    pieces.map((p) => {
        returnPieces[p] = ({ squareWidth }: { squareWidth: number }) => (
            <div
                style={{
                    width: squareWidth,
                    height: squareWidth,
                    backgroundImage: `url(/folder/${p}.png)`,
                    backgroundSize: '100%',
                }}
            />
        );
        return null;
    });
    return returnPieces;
};

export default function PlayRandomMoveEngine() {
    const [chess, setChess] = useState(new Chess());

    useEffect(() => {
        const possibleMoves = chess.moves();

        if (chess.isCheckmate()) {
            console.log("Checkmate");
            return;
        } else if (possibleMoves.length === 0) {
            console.log("Stalemate");
            return;
        }
        else if (chess.isDraw()) {
            console.log("Draw");
            return;
        }
        if (chess.turn() === "b") {
            setTimeout(() => makeRandomMove(possibleMoves), 500);
        }
    }, [chess]);

    const makeAMove = (move: string | Move) => {
        const gameCopy = Object.assign(new Chess(), chess);
        const result = gameCopy.move(move);
        setChess(gameCopy);
        console.log(result)
        return result; // null if the move was illegal, the move object if the move was legal
    }

    const makeRandomMove = (possibleMoves: Move[] | string[]) => {
        console.log(possibleMoves);
        const newMove = possibleMoves[Math.floor(Math.random() * possibleMoves.length)];
        console.log(newMove);
        makeAMove(newMove);
    }

    const onDrop = (sourceSquare: Square, targetSquare: Square, piece: Piece) => {

        // @ts-ignore
        const move = makeAMove({
            from: sourceSquare,
            to: targetSquare,
        });

        // illegal move
        if (move === null) {
            console.log("Illegal move");
            return false;
        } else {
            console.log("Legal move");
            return true;
        }
    }


    return (
        <div className="game-div">
            <div className="game-board">
                <Chessboard
                    id={0}
                    animationDuration={200}
                    boardWidth={boardWidth}
                    position={chess.fen()}
                    // @ts-ignore
                    onPieceDrop={onDrop}
                    customBoardStyle={{
                        borderRadius: '4px',
                        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.5)'
                    }}
                    customDarkSquareStyle={{ backgroundColor: '#779952' }}
                    customLightSquareStyle={{ backgroundColor: '#edeed1' }}
                    customPieces={customPieces()}
                    customDropSquareStyle={{ backgroundColor: '#fff95a' }}
                    arePremovesAllowed={false}
                />
            </div>
            <div className="game-controller">
                <button onClick={() => makeRandomMove(chess.moves())}>Make a random move</button>
            </div>
        </div>
    );
}