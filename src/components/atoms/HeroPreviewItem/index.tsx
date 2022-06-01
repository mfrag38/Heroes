import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ImageBackground, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

/**
 * This function takes in a character object and returns a styled ImageBackground component with a Text
 * component inside of it.
 * @character Character object that contains character info
 * @returns A function that returns ImageBackground view.
 */
const HeroPreviewItem = ({ character }: { character: any }) => {
	const { navigate } = useNavigation();

	return (
		<TouchableOpacity
			style={styles.container}
			onPress={() =>
				navigate('MovieDetails', {
					prev: 'Home',
					heroName: character.name,
				})
			}
		>
			<ImageBackground
				source={{
					uri: `${character.thumbnail.path}.${character.thumbnail.extension}`,
				}}
				resizeMode='cover'
				style={styles.imageContainer}
			>
				<Text style={styles.characterName}>{character.name}</Text>
			</ImageBackground>
		</TouchableOpacity>
	);
};

export default HeroPreviewItem;
