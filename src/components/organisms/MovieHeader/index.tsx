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
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import styles from './styles';

const height = Dimensions.get('window').height;

const MovieHeader = ({
	animatedValue,
	poster,
	replay,
}: {
	animatedValue: Animated.Value;
	poster: string;
	replay?: Function;
}) => {
	const { goBack } = useNavigation();
	const { shouldShowReplay } = useSelector((state: RootState) => state.home);

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
				source={
					poster
						? poster !== 'N/A'
							? {
									uri: poster,
							  }
							: require('../../../assets/images/placeholder.png')
						: require('../../../assets/images/placeholder.png')
				}
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
				{shouldShowReplay ? (
					<View style={styles.replayIconContainer}>
						<TouchableOpacity
							style={styles.backIconButton}
							onPress={replay}
						>
							<Icon name='refresh' size={24} color='#fff' />
						</TouchableOpacity>
					</View>
				) : null}
			</ImageBackground>
		</Animated.View>
	);
};

export default MovieHeader;
