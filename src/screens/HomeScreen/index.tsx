import React, { useEffect } from 'react';
import { View, StatusBar } from 'react-native';
import { scale } from 'react-native-utils-scale';
import characters from '../../data/characters.json';
import styles from './styles';
import HeroesPreviewSection from '../../components/organisms/HeroesPreviewSection';
import Separator from '../../components/atoms/Separator';
import GetRandomSection from '../../components/organisms/GetRandomSection';
import HomeHeader from '../../components/organisms/HomeHeader';
import { getCharacters } from '../../api/characters';

/**
 * HomeScreen is a function that returns a View component that contains a HomeHeader component, a View
 * component that contains a GetRandomSection component and a Separator component, and a
 * HeroesPreviewSection component.
 * @returns A function that returns a view.
 */
const HomeScreen = () => {
	useEffect(() => {
		getCharacters(10, 0, {
			success: (res: any) => {
				console.log('The Res:', res);
			},
			error: (error: any) => {
				console.log('The Error:', error);
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
				<HeroesPreviewSection characters={characters} />
			</View>
		</View>
	);
};

export default HomeScreen;
