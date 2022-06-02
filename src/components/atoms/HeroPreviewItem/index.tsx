import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ImageBackground, Text, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import ICharacter from '../../../models/character/ICharacter';
import { setShouldShowReplay } from '../../../redux/slices/homeSlice';
import { urlSecurity } from '../../../utils/httpsGenerator';
import styles from './styles';

/**
 * This function takes in a character object and returns a styled ImageBackground component with a Text
 * component inside of it.
 * @character Character object that contains character info
 * @returns A function that returns ImageBackground view.
 */
const HeroPreviewItem = ({ character }: { character: ICharacter }) => {
	const { navigate } = useNavigation();
	const dispatch = useDispatch();

	return (
		<TouchableOpacity
			style={styles.container}
			onPress={() => {
				dispatch(setShouldShowReplay(false));
				navigate('MovieDetails', {
					prev: 'Home',
					heroName: character.name,
				});
			}}
		>
			<ImageBackground
				source={{
					uri: `${urlSecurity(character.thumbnail.path)}.${
						character.thumbnail.extension
					}`,
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
