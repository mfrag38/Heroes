import React, { useEffect } from 'react';
import { View, StatusBar } from 'react-native';
import HeroesHeader from '../../components/organisms/HeroesHeader';
import HeroesList from '../../components/molecules/HeroesList';
import characters from '../../data/characters.json';
import styles from './styles';
import { getCharacters } from '../../api/characters';

const HeroesScreen = (props: any) => {
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
			<HeroesHeader />
			<View style={styles.bodyContainer}>
				<HeroesList data={characters} />
			</View>
		</View>
	);
};

export default HeroesScreen;
