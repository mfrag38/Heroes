import React from 'react';
import { View, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import ICharacter from '../../../models/character/ICharacter';
import { RootState } from '../../../redux/store';
import HeroPreviewItem from '../../atoms/HeroPreviewItem';
import styles from './styles';

/**
 * It's a function that takes an array of data and returns a view that contains a flatlist that renders
 * a list of characters.
 * @data Array of items that will be rendered
 * @returns A function that returns a list view.
 */
const HeroesPreviewList = () => {
	const { characters } = useSelector((state: RootState) => state.home);

	const RenderCharacters = ({ character }: { character: ICharacter }) => {
		return <HeroPreviewItem character={character} />;
	};

	return (
		<View style={styles.container}>
			<FlatList
				data={characters}
				renderItem={({ item }) => <RenderCharacters character={item} />}
				horizontal
				showsHorizontalScrollIndicator={false}
				contentContainerStyle={styles.listContentContainer}
			/>
		</View>
	);
};

export default HeroesPreviewList;
