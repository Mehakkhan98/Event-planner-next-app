import { configureStore } from '@reduxjs/toolkit'
import authReducer from './reducers/authReducer'
import eventReducer from './reducers/eventReducer'
export const makeStore = () => {
  return configureStore({
    reducer: {
     auth:authReducer,
     event:eventReducer
    }
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']