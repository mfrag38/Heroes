import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface MovieState {
	isLoading: boolean;
	movie: any;
}

const initState: MovieState = {
	isLoading: false,
	movie: null,
};

export const movieSlice = createSlice({
	name: 'movie',
	initialState: initState,
	reducers: {
		setIsLoading: (state: any, action: PayloadAction) => {
			state.isLoading = action.payload;
		},
		setMovie: (state: any, action: PayloadAction) => {
			state.movie = action.payload;
		},
		clearMovie: (state: any) => {
			state.movie = {};
		},
	},
});

export const { setIsLoading, setMovie, clearMovie } = movieSlice.actions;

export default movieSlice.reducer;
