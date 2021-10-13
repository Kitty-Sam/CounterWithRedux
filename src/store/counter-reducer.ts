const InitialState = {
    scoreNumber: 0,
    InputMax: 0,
    InputStart: 0
}

type InitialStateType = typeof  InitialState

export const counterReducer = (state: InitialStateType = InitialState, action:  IncScoreValuesType |
                                                                                SetScoreFromLocalStType |
                                                                                ResetScoreValuesType |
                                                                                InputMaxScoreValuesType |
                                                                                InputStartScoreValuesType):
    InitialStateType  => {
    switch (action.type) {
        case "INC-SCORE":
            return {
                ...state, scoreNumber: state.scoreNumber + 1
            }
        case "SET-SCORE-FROM_LOCAL_STORAGE":
            return {
                ...state, scoreNumber: action.score
            }
        case "RESET-SCORE":
            return {
                ...state, scoreNumber: state.scoreNumber = 0
            }
        case "INPUT-MAX":
            return {
                ...state, InputMax: action.score
            }
        case "INPUT-START":
            return {
                ...state, InputStart: action.score, scoreNumber: action.score
            }
        default:
            return state
    }
}

export const incScoreAC = () => {
    return {type: "INC-SCORE"} as const
}
export const setScoreFromLocalStAC = (score: number) => {
    return {type: "SET-SCORE-FROM_LOCAL_STORAGE", score} as const
}
export const resetScoreAC = () => {
    return {type: "RESET-SCORE"} as const
}
export const inputMaxScoreAC = (score: number) => {
    return {type: "INPUT-MAX", score} as const
}
export const inputStartScoreAC = (score: number) => {
    return {type: "INPUT-START", score} as const
}


export type IncScoreValuesType = ReturnType<typeof incScoreAC>
export type SetScoreFromLocalStType = ReturnType<typeof setScoreFromLocalStAC>
export type ResetScoreValuesType = ReturnType<typeof resetScoreAC>
export type InputMaxScoreValuesType = ReturnType<typeof inputMaxScoreAC>
export type InputStartScoreValuesType = ReturnType<typeof inputStartScoreAC>
