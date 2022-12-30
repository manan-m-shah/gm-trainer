type State = {
    count: number
}

export enum ActionKind {
    COUNT = "COUNT",
}

type Action = {
    type: ActionKind
    payload: any
}

export type { State, Action }
