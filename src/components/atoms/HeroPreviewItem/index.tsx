import React from 'react';
import { ImageBackground, Text } from 'react-native';
import styles from './styles';

/**
 * This function takes in a character object and returns a styled ImageBackground component with a Text
 * component inside of it.
 * @character Character object that contains character info
 * @returns A function that returns ImageBackground view.
 */
const HeroPreviewItem = ({ character }: { character: any }) => {
	return (
		<ImageBackground
			source={{
				uri: `${character.thumbnail.path}.${character.thumbnail.extension}`,
			}}
			resizeMode='cover'
			style={styles.container}
		>
			<Text style={styles.characterName}>{character.name}</Text>
		</ImageBackground>
	);
};

export default HeroPreviewItem;
