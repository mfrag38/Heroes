import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface HeroesState {
	isLoading: boolean;
	isFooterLoading: boolean;
	characters: any[];
	offset: number;
}

const initState: HeroesState = {
	isLoading: false,
	isFooterLoading: false,
	characters: [],
	offset: 0,
};

export const homeSlice = createSlice({
	name: 'heroes',
	initialState: initState,
	reducers: {
		setIsLoading: (state: any, action: PayloadAction) => {
			state.isLoading = action.payload;
		},
		setIsFooterLoading: (state: any, action: PayloadAction) => {
			state.isFooterLoading = action.payload;
		},
		setHeroesCharacters: (state: any, action: PayloadAction) => {
			state.characters = action.payload;
		},
		addToHeroesCharacters: (state: any, action: PayloadAction) => {
			state.characters.push(...action.payload);
		},
		increaseOffset: (state: any, action: PayloadAction) => {
			state.offset = action.payload;
		},
	},
});

export const {
	setIsLoading,
	setIsFooterLoading,
	setHeroesCharacters,
	addToHeroesCharacters,
	increaseOffset,
} = homeSlice.actions;

export default homeSlice.reducer;
