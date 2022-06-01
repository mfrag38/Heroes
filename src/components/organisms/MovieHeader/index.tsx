import React from 'react';
import { Animated, Image, Dimensions } from 'react-native';
import styles from './styles';

const height = Dimensions.get('window').height;

const MovieHeader = ({
	animatedValue,
	poster,
}: {
	animatedValue: Animated.Value;
	poster: string;
}) => {
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
			<Image
				source={{
					uri: poster,
				}}
				resizeMode='cover'
				style={styles.headerImage}
			/>
		</Animated.View>
	);
};

export default MovieHeader;
