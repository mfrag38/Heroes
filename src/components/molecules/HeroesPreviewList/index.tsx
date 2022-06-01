import React from 'react';
import { View, FlatList } from 'react-native';
import HeroPreviewItem from '../../atoms/HeroPreviewItem';
import styles from './styles';

/**
 * It's a function that takes an array of data and returns a view that contains a flatlist that renders
 * a list of characters.
 * @data Array of items that will be rendered
 * @returns A function that returns a list view.
 */
const HeroesPreviewList = ({ data }: { data: any[] }) => {
	const RenderCharacters = ({ character }: { character: any }) => {
		return <HeroPreviewItem character={character} />;
	};

	return (
		<View style={styles.container}>
			<FlatList
				data={data}
				renderItem={({ item }) => <RenderCharacters character={item} />}
				horizontal
				showsHorizontalScrollIndicator={false}
				contentContainerStyle={styles.listContentContainer}
			/>
		</View>
	);
};

export default HeroesPreviewList;
