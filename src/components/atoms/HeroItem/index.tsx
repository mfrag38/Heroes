import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import ICharacter from '../../../models/character/ICharacter';
import { setShouldShowReplay } from '../../../redux/slices/homeSlice';
import { urlSecurity } from '../../../utils/httpsGenerator';
import styles from './styles';

/**
 * This function takes in a character object and returns a View component with an Image and a Text
 * component inside of it.
 * @character Character object that contains character info
 * @returns A View component with an Image and a View component with a Text component.
 */
const HeroItem = ({ character }: { character: ICharacter }) => {
	const { navigate } = useNavigation();
	const dispatch = useDispatch();

	return (
		<View style={styles.container}>
			<TouchableOpacity
				style={styles.heroButton}
				onPress={() => {
					dispatch(setShouldShowReplay(false));
					navigate('MovieDetails', {
						prev: 'Heroes',
						heroName: character.name,
					});
				}}
			>
				<Image
					source={{
						uri: `${urlSecurity(character.thumbnail.path)}.${
							character.thumbnail.extension
						}`,
					}}
					resizeMode='cover'
					style={styles.heroImage}
				/>
				<View style={styles.heroNameContainer}>
					<Text style={styles.heroName}>{character.name}</Text>
				</View>
			</TouchableOpacity>
		</View>
	);
};

export default HeroItem;
