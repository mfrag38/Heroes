import React from 'react';
import { Image, Text, View } from 'react-native';
import styles from './styles';

/* A function that returns a view with a text and an image. */
const HomeHeader = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.headerTitle}>Heroes</Text>
			<Image
				source={require('../../../assets/logo.png')}
				resizeMode='contain'
				style={styles.headerImage}
			/>
		</View>
	);
};

export default HomeHeader;
