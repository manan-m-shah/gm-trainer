'use client'
import React, { useContext, useEffect, useState } from "react";

import AppContext from "../context/AppContext";
import RandomBoard from "../components/Chess Boards/RandomBoard";
import DefaultController from "../components/Controller/DefaultController";

const PlayRandomMoveEngine = () => {
    const { state, dispatch } = useContext(AppContext);
    console.log(state);

    return (
        <div className="game-div">
            <div className="game-board">
                {
                    <RandomBoard />

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

export default PlayRandomMoveEngine;