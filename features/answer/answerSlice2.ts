import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface FormState {
    value: string[]
}

const initialState: FormState = {
    // value: ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
    // value: ['1','1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', ],
    value: []
}

export const answer2Slice = createSlice({
    name: 'answer2',
    initialState,
    reducers: {
        addAnswer2: (state, action: PayloadAction<string []>) => {
            state.value = action.payload
        }
    },
})

export const { addAnswer2 } = answer2Slice.actions

export default answer2Slice.reducer