import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useSelector } from 'react-redux';
import { Text, TouchableOpacity, View, ActivityIndicator } from 'react-native';
import HeroesPreviewList from '../../molecules/HeroesPreviewList';
import styles from './styles';
import { RootState } from '../../../redux/store';
import { scale } from 'react-native-utils-scale';

/**
 * HeroesPreviewSection is a function that takes in an array of characters and returns a View component
 * that contains a View component that contains a Text component that contains a string, a View
 * component that contains a View component that contains a Text component that contains a string, and
 * a HeroesPreviewList component that contains an array of characters.
 * @characters  List of characters
 * @returns A View component with a View component with a Text component inside of it.
 */
const HeroesPreviewSection = () => {
	const { navigate } = useNavigation();
	const { isLoading } = useSelector((state: RootState) => state.home);

	return (
		<View style={styles.container}>
			<View style={styles.sectionTitleContainer}>
				<Text style={styles.sectionTitle}>
					Or you can select a hero to get a random movie
				</Text>
			</View>
			<View style={styles.listSectionContainer}>
				<View style={styles.listTitleContainer}>
					<TouchableOpacity
						style={styles.listTitleButton}
						onPress={() => navigate('Heroes')}
					>
						<Text style={styles.listTitle}>
							View Full List {'>'}
						</Text>
					</TouchableOpacity>
				</View>
				{isLoading === true ? (
					<View style={styles.loaderContainer}>
						<ActivityIndicator color='#000' size={scale(48)} />
					</View>
				) : (
					<HeroesPreviewList />
				)}
			</View>
		</View>
	);
};

export default HeroesPreviewSection;
