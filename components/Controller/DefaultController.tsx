import React, { useContext } from 'react'
import { createSinglePlayerGame, getSinglePlayerGame } from '../../apis/singlePlayerGames';
import AppContext from '../../context/AppContext';

const DefaultController = () => {
    const { state, dispatch } = useContext(AppContext)

    const fetchGame = async () => {
        const success = await getSinglePlayerGame(state, dispatch);
        if (success) {
            console.log("Game fetched");
        }
    }

    const newSinglePlayerGame = async () => {
        const success = await createSinglePlayerGame(state, dispatch);
        if (success) {
            console.log("New game created");
            fetchGame();
        }
    }

    return (
        <button onClick={newSinglePlayerGame}>
            Single Player
        </button>
    )
}

export default DefaultController