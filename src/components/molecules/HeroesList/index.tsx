import React from 'react';
import { FlatList } from 'react-native';
import HeroItem from '../../atoms/HeroItem';
import styles from './styles';

/**
 * This function takes in an array of data and returns a FlatList component that renders a HeroItem
 * component for each item in the data array.
 * @data Array of items that will be rendered
 * @returns A function that returns a FlatList component.
 */
const HeroesList = ({ data }: { data: any[] }) => {
	const RenderCharacters = ({ character }: { character: any }) => {
		return <HeroItem character={character} />;
	};

	return (
		<FlatList
			data={data}
			renderItem={({ item }) => <RenderCharacters character={item} />}
			contentContainerStyle={styles.listContainer}
		/>
	);
};

export default HeroesList;
