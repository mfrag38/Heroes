import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface HomeState {
	isLoading: boolean;
	isRandomLoading: boolean;
	characters: any[];
	totalCharacters: 0;
	shouldShowReplay: boolean;
	shouldReplay: boolean;
}

const initState: HomeState = {
	isLoading: false,
	isRandomLoading: false,
	characters: [],
	totalCharacters: 0,
	shouldShowReplay: false,
	shouldReplay: false,
};

export const homeSlice = createSlice({
	name: 'home',
	initialState: initState,
	reducers: {
		setIsLoading: (state: any, action: PayloadAction) => {
			state.isLoading = action.payload;
		},
		setIsRandomLoading: (state: any, action: PayloadAction) => {
			state.isRandomLoading = action.payload;
		},
		setHomeCharacters: (state: any, action: PayloadAction) => {
			state.characters = action.payload;
		},
		setTotalCharacters: (state: any, action: PayloadAction) => {
			state.totalCharacters = action.payload;
		},
		setShouldShowReplay: (state: any, action: PayloadAction) => {
			state.shouldShowReplay = action.payload;
		},
		setShouldReplay: (state: any, action: PayloadAction) => {
			state.shouldReplay = action.payload;
		},
	},
});

export const {
	setIsLoading,
	setIsRandomLoading,
	setHomeCharacters,
	setTotalCharacters,
	setShouldShowReplay,
	setShouldReplay,
} = homeSlice.actions;

export default homeSlice.reducer;
