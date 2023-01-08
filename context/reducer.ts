import { Action, ActionKind, State } from "../types/Context"

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case ActionKind.SET_UID:
            return {
                ...state,
                uid: action.payload,
            }
        case ActionKind.SET_FEN:
            return {
                ...state,
                fen: action.payload,
            }
        case ActionKind.SET_STATUS:
            return {
                ...state,
                status: action.payload,
            }
        case ActionKind.SET_TURN:
            return {
                ...state,
                turn: action.payload,
            }
        case ActionKind.SET_HISTORY:
            return {
                ...state,
                history: action.payload,
            }
        default:
            return state
    }
}

export default reducer