import React from 'react';
import { Text, View } from 'react-native';
import HeroesPreviewList from '../../molecules/HeroesPreviewList';
import styles from './styles';

/**
 * HeroesPreviewSection is a function that takes in an array of characters and returns a View component
 * that contains a View component that contains a Text component that contains a string, a View
 * component that contains a View component that contains a Text component that contains a string, and
 * a HeroesPreviewList component that contains an array of characters.
 * @characters  List of characters
 * @returns A View component with a View component with a Text component inside of it.
 */
const HeroesPreviewSection = ({ characters }: { characters: any[] }) => {
	return (
		<View style={styles.container}>
			<View style={styles.sectionTitleContainer}>
				<Text style={styles.sectionTitle}>
					Or you can select a hero to get a random movie
				</Text>
			</View>
			<View style={styles.listSectionContainer}>
				<View style={styles.listTitleContainer}>
					<Text style={styles.listTitle}>View Full List {'>'}</Text>
				</View>
				<HeroesPreviewList data={characters} />
			</View>
		</View>
	);
};

export default HeroesPreviewSection;
