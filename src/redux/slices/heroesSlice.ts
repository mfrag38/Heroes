import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import ICharacter from '../../models/character/ICharacter';

export interface HeroesState {
	isLoading: boolean;
	isFooterLoading: boolean;
	characters: ICharacter[];
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
		setIsLoading: (state: HeroesState, action: PayloadAction<boolean>) => {
			state.isLoading = action.payload;
		},
		setIsFooterLoading: (
			state: HeroesState,
			action: PayloadAction<boolean>,
		) => {
			state.isFooterLoading = action.payload;
		},
		setHeroesCharacters: (
			state: HeroesState,
			action: PayloadAction<ICharacter[]>,
		) => {
			state.characters = action.payload;
		},
		addToHeroesCharacters: (
			state: HeroesState,
			action: PayloadAction<ICharacter[]>,
		) => {
			state.characters.push(...action.payload);
		},
		increaseOffset: (state: HeroesState, action: PayloadAction<number>) => {
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
