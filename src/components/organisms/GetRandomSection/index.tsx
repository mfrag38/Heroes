import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import RoundedButton from '../../atoms/RoundedButton';
import styles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import {
	setIsRandomLoading,
	setShouldReplay,
	setShouldShowReplay,
} from '../../../redux/slices/homeSlice';
import { getCharacters } from '../../../api/characters';
import { RootState } from '../../../redux/store';
import { generateRandom } from '../../../utils/randomGenerator';
import ICharactersResponse from '../../../models/charactersResponse/ICharactersResponse';

/**
 * It's a function that returns a View component that contains a Text component and a RoundedButton
 * component.
 * @returns A View component with a Text component and a RoundedButton component.
 */
const GetRandomSection = () => {
	const { navigate } = useNavigation();

	const dispatch = useDispatch();

	const { totalCharacters, shouldReplay } = useSelector(
		(state: RootState) => state.home,
	);

	useEffect(() => {
		if (shouldReplay === true) {
			setTimeout(() => {
				handleRandom();
			}, 300);
		}
	}, [shouldReplay]);

	const handleRandom = () => {
		dispatch(setShouldReplay(false));
		dispatch(setIsRandomLoading(true));
		const random = generateRandom(totalCharacters);
		getCharacters(random, {
			success: (res: ICharactersResponse) => {
				dispatch(setIsRandomLoading(false));
				dispatch(setShouldShowReplay(true));
				navigate('MovieDetails', {
					prev: 'HomeRandom',
					randomName: res.data.results[0].name,
				});
			},
			error: (error: any) => {
				console.log('The Error:', error);
				dispatch(setIsRandomLoading(false));
			},
		});
	};

	return (
		<View style={styles.container}>
			<Text style={styles.sectionTitle}>
				Get a random movie for a random hero
			</Text>
			<RoundedButton
				buttonTitle='Randomize'
				buttonColor='#DC143C'
				titleColor='#fff'
				onPress={handleRandom}
			/>
		</View>
	);
};

export default GetRandomSection;
