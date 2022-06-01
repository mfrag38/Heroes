import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
	Animated,
	ImageBackground,
	Dimensions,
	TouchableOpacity,
	View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';

const height = Dimensions.get('window').height;

const MovieHeader = ({
	animatedValue,
	poster,
}: {
	animatedValue: Animated.Value;
	poster: string;
}) => {
	const { goBack } = useNavigation();
	const MAX_HEIGHT = height / 2.75;
	const MIN_HEIGHT = 75;

	const animateHeaderHeight = animatedValue.interpolate({
		inputRange: [0, MAX_HEIGHT],
		outputRange: [MAX_HEIGHT, MIN_HEIGHT],
		extrapolate: 'clamp',
	});

	return (
		<Animated.View
			style={[
				styles.container,
				{
					height: animateHeaderHeight,
				},
			]}
		>
			<ImageBackground
				source={{
					uri: poster,
				}}
				resizeMode='cover'
				style={styles.headerImage}
			>
				<View style={styles.backIconContainer}>
					<TouchableOpacity
						style={styles.backIconButton}
						onPress={goBack}
					>
						<Icon name='chevron-left' size={24} color='#fff' />
					</TouchableOpacity>
				</View>
			</ImageBackground>
		</Animated.View>
	);
};

export default MovieHeader;
