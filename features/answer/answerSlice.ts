import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface FormState {
    value1: string[],
    value2: string[],
    value3: string[]
}

const initialState: FormState = {
    value1: [],
    value2: [],
    // value2: ['1','1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', ],
    // value2: ['3','3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', ],
    value3: []
}

export const answerSlice = createSlice({
    name: 'answer',
    initialState,
    reducers: {
        addAnswer1: (state, action: PayloadAction<string[]>) => {
            state.value1 = action.payload
        },
        addAnswer2: (state, action: PayloadAction<string[]>) => {
            state.value1 = action.payload
        },
        addAnswer3: (state, action: PayloadAction<string[]>) => {
            state.value1 = action.payload
        },
    },
})

export const { addAnswer1, addAnswer2, addAnswer3 } = answerSlice.actions
export default answerSlice.reducer

// value: ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
// value: ['1','1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', ],
// value: ['2','2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', ],
// value: ['3','3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', ],