import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import ICharacter from '../../models/character/ICharacter';

export interface HomeState {
	isLoading: boolean;
	isRandomLoading: boolean;
	characters: ICharacter[];
	totalCharacters: number;
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
		setIsLoading: (state: HomeState, action: PayloadAction<boolean>) => {
			state.isLoading = action.payload;
		},
		setIsRandomLoading: (
			state: HomeState,
			action: PayloadAction<boolean>,
		) => {
			state.isRandomLoading = action.payload;
		},
		setHomeCharacters: (
			state: HomeState,
			action: PayloadAction<ICharacter[]>,
		) => {
			state.characters = action.payload;
		},
		setTotalCharacters: (
			state: HomeState,
			action: PayloadAction<number>,
		) => {
			state.totalCharacters = action.payload;
		},
		setShouldShowReplay: (
			state: HomeState,
			action: PayloadAction<boolean>,
		) => {
			state.shouldShowReplay = action.payload;
		},
		setShouldReplay: (state: HomeState, action: PayloadAction<boolean>) => {
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
