import React from 'react';
import { Text, View } from 'react-native';
import RoundedButton from '../../atoms/RoundedButton';
import styles from './styles';

/**
 * It's a function that returns a View component that contains a Text component and a RoundedButton
 * component.
 * @returns A View component with a Text component and a RoundedButton component.
 */
const GetRandomSection = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.sectionTitle}>
				Get a random movie for a random hero
			</Text>
			<RoundedButton
				buttonTitle='Randomize'
				buttonColor='#DC143C'
				titleColor='#fff'
				onPress={() => {}}
			/>
		</View>
	);
};

export default GetRandomSection;
