import { configureStore } from "@reduxjs/toolkit"
import answerReducer from '../features/answerFormSurvey/answerSlice'

export const store = configureStore({
    reducer: {
        answer: answerReducer
    },
})

// console.log('hello')


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch