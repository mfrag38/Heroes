import React, { useEffect } from 'react';
import { View, StatusBar, ActivityIndicator } from 'react-native';
import HeroesHeader from '../../components/organisms/HeroesHeader';
import HeroesList from '../../components/molecules/HeroesList';
import styles from './styles';
import { getCharacters } from '../../api/characters';
import { RootState } from '../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import {
	increaseOffset,
	setHeroesCharacters,
	setIsLoading,
} from '../../redux/slices/heroesSlice';
import { scale } from 'react-native-utils-scale';

const HeroesScreen = () => {
	const { isLoading, offset } = useSelector(
		(state: RootState) => state.heroes,
	);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setIsLoading(true));
		getCharacters(0, {
			success: (res: any) => {
				dispatch(setHeroesCharacters(res.data.results));
				dispatch(increaseOffset(offset + res.data.limit));
				dispatch(setIsLoading(false));
			},
			error: (error: any) => {
				console.log('The Error:', error);
				dispatch(setIsLoading(false));
			},
		});
	}, []);

	return (
		<View style={styles.container}>
			<StatusBar
				animated
				backgroundColor='#000'
				barStyle='light-content'
			/>
			<HeroesHeader />
			<View style={styles.bodyContainer}>
				{isLoading === true ? (
					<View style={styles.loaderContainer}>
						<ActivityIndicator color='#000' size={scale(48)} />
					</View>
				) : (
					<HeroesList />
				)}
			</View>
		</View>
	);
};

export default HeroesScreen;
