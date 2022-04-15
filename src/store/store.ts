import { combineReducers, configureStore } from '@reduxjs/toolkit';
import currentWeatherRootReducer from './slices/currentWeatherSlice';

const rootReducer = combineReducers({
  currentWeatherRootReducer
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];
