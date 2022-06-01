import React, { useState } from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';
import { scale } from 'react-native-utils-scale';
import { useDispatch, useSelector } from 'react-redux';
import { getCharacters } from '../../../api/characters';
import {
	addToHeroesCharacters,
	increaseOffset,
	setIsFooterLoading,
} from '../../../redux/slices/heroesSlice';
import { RootState } from '../../../redux/store';
import HeroItem from '../../atoms/HeroItem';
import styles from './styles';

/**
 * This function takes in an array of data and returns a FlatList component that renders a HeroItem
 * component for each item in the data array.
 * @data Array of items that will be rendered
 * @returns A function that returns a FlatList component.
 */
const HeroesList = () => {
	const { characters, offset, isFooterLoading } = useSelector(
		(state: RootState) => state.heroes,
	);

	const dispatch = useDispatch();

	const [callOnScrollEnd, setCallOnScrollEnd] = useState(false);

	const RenderCharacters = ({ character }: { character: any }) => {
		return <HeroItem character={character} />;
	};

	const fetchMoreCharacters = async () => {
		dispatch(setIsFooterLoading(true));
		getCharacters(offset, {
			success: (res: any) => {
				dispatch(addToHeroesCharacters(res.data.results));
				dispatch(increaseOffset(offset + 10));
				dispatch(setIsFooterLoading(false));
			},
			error: (error: any) => {
				console.log('The Error:', error);
				dispatch(setIsFooterLoading(false));
			},
		});
	};

	const footerLoader = () => (
		<View style={styles.loaderContainer}>
			<ActivityIndicator color='#000' size={scale(48)} />
		</View>
	);

	return (
		<FlatList
			data={characters}
			renderItem={({ item }) => <RenderCharacters character={item} />}
			contentContainerStyle={styles.listContainer}
			initialNumToRender={10}
			onEndReachedThreshold={0.3}
			onEndReached={() => setCallOnScrollEnd(true)}
			onMomentumScrollEnd={() => {
				callOnScrollEnd && fetchMoreCharacters();
				setCallOnScrollEnd(false);
			}}
			ListFooterComponent={isFooterLoading ? footerLoader : null}
		/>
	);
};

export default HeroesList;
