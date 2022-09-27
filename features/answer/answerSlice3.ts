import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface FormState {
    value: string[]
}

const initialState: FormState = {
    value: [],
}

export const answer3Slice = createSlice({
    name: 'answer3',
    initialState,
    reducers: {
        addAnswer3: (state, action: PayloadAction<string>) => {
            state.value.push(action.payload)
        }
    },
})

export const { addAnswer3 } = answer3Slice.actions

export default answer3Slice.reducer