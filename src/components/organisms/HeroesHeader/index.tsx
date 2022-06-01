import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';

const HeroesHeader = (props: any) => {
	const { goBack } = useNavigation();

	return (
		<View style={styles.container}>
			<View style={styles.backIconContainer}>
				<TouchableOpacity
					style={styles.backIconButton}
					onPress={goBack}
				>
					<Icon name='chevron-left' size={24} color='#fff' />
				</TouchableOpacity>
			</View>
			<Text style={styles.title}>Heroes</Text>
		</View>
	);
};

export default HeroesHeader;
