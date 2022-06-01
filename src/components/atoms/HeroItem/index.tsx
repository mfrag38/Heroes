import React from 'react';
import { Image, Text, View } from 'react-native';
import styles from './styles';

/**
 * This function takes in a character object and returns a View component with an Image and a Text
 * component inside of it.
 * @character Character object that contains character info
 * @returns A View component with an Image and a View component with a Text component.
 */
const HeroItem = ({ character }: { character: any }) => {
	return (
		<View style={styles.container}>
			<Image
				source={{
					uri: `${character.thumbnail.path}.${character.thumbnail.extension}`,
				}}
				resizeMode='cover'
				style={styles.heroImage}
			/>
			<View style={styles.heroNameContainer}>
				<Text style={styles.heroName}>{character.name}</Text>
			</View>
		</View>
	);
};

export default HeroItem;
