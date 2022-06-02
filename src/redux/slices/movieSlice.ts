import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import IMovie from '../../models/movie/IMovie';

export interface MovieState {
	isLoading: boolean;
	movie: IMovie | any;
}

const initState: MovieState = {
	isLoading: false,
	movie: {},
};

export const movieSlice = createSlice({
	name: 'movie',
	initialState: initState,
	reducers: {
		setIsLoading: (state: MovieState, action: PayloadAction<boolean>) => {
			state.isLoading = action.payload;
		},
		setMovie: (state: MovieState, action: PayloadAction<IMovie>) => {
			state.movie = action.payload;
		},
		clearMovie: (state: MovieState) => {
			state.movie = {};
		},
	},
});

export const { setIsLoading, setMovie, clearMovie } = movieSlice.actions;

export default movieSlice.reducer;
