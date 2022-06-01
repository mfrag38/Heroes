import { configureStore } from '@reduxjs/toolkit';
import homeReducer from './slices/homeSlice';
import heroesReducer from './slices/heroesSlice';
import movieReducer from './slices/movieSlice';

export const store = configureStore({
	reducer: {
		home: homeReducer,
		heroes: heroesReducer,
		movie: movieReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
