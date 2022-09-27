import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface FormState {
    value: string[]
}

const initialState: FormState = {
    value: []
}

export const answer1Slice = createSlice({
    name: 'answer1',
    initialState,
    reducers: {
        addAnswer1: (state, action: PayloadAction<string []>) => {
            // state.value.push(action.payload)
            state.value = action.payload
        }
    },
})

// export const answer2Slice = createSlice({
//     name: 'answer2',
//     initialState,
//     reducers: {
//         addAnswer2: (state, action: PayloadAction<string>) => {
//             state.value.push(action.payload)
//         }
//     },
// })

// export const answer3Slice = createSlice({
//     name: 'answer3',
//     initialState,
//     reducers: {
//         addAnswer3: (state, action: PayloadAction<string>) => {
//             state.value.push(action.payload)
//         }
//     },
// })

export const { addAnswer1 } = answer1Slice.actions

export default answer1Slice.reducer