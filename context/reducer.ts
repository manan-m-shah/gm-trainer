import { Action, ActionKind, State } from "../types/Context"

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case ActionKind.COUNT:
            return { count: state.count + action.payload }
        default:
            return state
    }
}

export default reducer