import { Chess, Move } from "chess.js"

type State = {
    player: string,
    uid: string,
    fen: string | null,
    history: Move[],
    status: string,
    turn: string,
}


export enum ActionKind {
    SET_UID = "SET_UID",
    SET_FEN = "SET_FEN",
    SET_STATUS = "SET_STATUS",
    SET_TURN = "SET_TURN",
    SET_HISTORY = "SET_HISTORY",
}

type Action = {
    type: ActionKind
    payload: any
}

export type { State, Action }
