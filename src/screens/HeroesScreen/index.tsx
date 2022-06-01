import React from 'react';
import { View, StatusBar } from 'react-native';
import HeroesHeader from '../../components/organisms/HeroesHeader';
import HeroesList from '../../components/molecules/HeroesList';
import characters from '../../data/characters.json';
import styles from './styles';

const HeroesScreen = () => {
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
