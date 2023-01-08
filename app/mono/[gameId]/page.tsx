'use client'
import React, { useContext, useEffect, useState } from "react";

import AppContext from "../../../context/AppContext";
import RandomBoard from "../../../components/Chess Boards/RandomBoard";
import DefaultController from "../../../components/Controller/DefaultController";

type Props = {
    params: {
        gameId: string;
    }
}

const fetchGame = async (gameId: string) => {
    const data = await fetch(`http://localhost:3000/api/game/${gameId}`);
    return data;
}

const SinglePlayerGame = ({ params }: Props) => {
    const { state, dispatch } = useContext(AppContext);
    console.log(params.gameId);
    
    useEffect(() => {
        fetchGame(params.gameId).then((data) => {
            console.log(data);
        })
    }, [params.gameId]);

    return (
        <div className="game-div">
            <div className="game-board">
                {
                    // <RandomBoard />
                    <h1>{params.gameId}</h1>
                }
            </div>
            <div className="game-controller">
                {
                    <DefaultController />
                }
            </div>
        </div>
    );
}

export default SinglePlayerGame;