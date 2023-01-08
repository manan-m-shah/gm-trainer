import { State, Action, ActionKind } from './../types/Context';
const api = process.env.API_URL + '/mono';
import axios from 'axios';

export const createSinglePlayerGame = async (state: State, dispatch: React.Dispatch<Action>) => {
    try {
        const { data } = await axios.post(api, {
            player: state.player,
        });
        const uid = data.uid;
        dispatch({
            type: ActionKind.SET_UID,
            payload: uid,
        });
        return true
    } catch (error) {
        console.log(error);
        return false
    }
}

export const getSinglePlayerGame = async (state: State, dispatch: React.Dispatch<Action>) => {
    try {
        const { data } = await axios.get(api + '/' + state.uid);
        console.log(data);
        dispatch({
            type: ActionKind.SET_FEN,
            payload: data.fen,
        });
        return true
    } catch (error) {
        console.log(error);
        return false
    }
}

export const updateSinglePlayerGame = async (state: State, dispatch: React.Dispatch<Action>, move: any) => {
    try {
        const { data } = await axios.patch(api + '/' + state.uid, {
            move: move,
        });
        console.log("data", data);
        dispatch({
            type: ActionKind.SET_FEN,
            payload: data.fen,
        });
        dispatch({
            type: ActionKind.SET_STATUS,
            payload: data.status,
        });
        dispatch({
            type: ActionKind.SET_TURN,
            payload: data.turn,
        });
        dispatch({
            type: ActionKind.SET_HISTORY,
            payload: data.history,
        });
        return true
    } catch (error) {
        console.log(error);
        return false
    }
}
