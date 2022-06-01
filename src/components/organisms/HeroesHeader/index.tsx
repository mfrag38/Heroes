import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';

const HeroesHeader = () => {
	return (
		<View style={styles.container}>
			<View style={styles.backIconContainer}>
				<Icon name='chevron-left' size={24} color='#fff' />
			</View>
			<Text style={styles.title}>Heroes</Text>
		</View>
	);
};

export default HeroesHeader;
