import React, { useEffect } from 'react';
import { View, StatusBar } from 'react-native';
import { useDispatch } from 'react-redux';
import { scale } from 'react-native-utils-scale';
import styles from './styles';
import HeroesPreviewSection from '../../components/organisms/HeroesPreviewSection';
import Separator from '../../components/atoms/Separator';
import GetRandomSection from '../../components/organisms/GetRandomSection';
import HomeHeader from '../../components/organisms/HomeHeader';
import { getCharacters } from '../../api/characters';
import {
	setIsLoading,
	setHomeCharacters,
	setTotalCharacters,
} from '../../redux/slices/homeSlice';
import ICharactersResponse from '../../models/charactersResponse/ICharactersResponse';

/**
 * HomeScreen is a function that returns a View component that contains a HomeHeader component, a View
 * component that contains a GetRandomSection component and a Separator component, and a
 * HeroesPreviewSection component.
 * @returns A function that returns a view.
 */
const HomeScreen = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setIsLoading(true));
		getCharacters(0, {
			success: (res: ICharactersResponse) => {
				dispatch(setHomeCharacters(res?.data?.results));
				dispatch(setTotalCharacters(res?.data?.total));
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
			<HomeHeader />
			<View style={styles.bodyContainer}>
				<GetRandomSection />
				<Separator marginHorizontal={scale(16)} />
				<HeroesPreviewSection />
			</View>
		</View>
	);
};

export default HomeScreen;
