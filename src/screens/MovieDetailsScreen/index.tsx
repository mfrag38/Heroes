import React from 'react';
import { Text, View, ScrollView, StatusBar, Animated } from 'react-native';
import { scale } from 'react-native-utils-scale';
import Separator from '../../components/atoms/Separator';
import MovieHeader from '../../components/organisms/MovieHeader';
import movies from '../../data/movies.json';
import styles from './styles';

/**
 * The MovieDetailsScreen function returns a View component that contains a StatusBar component, a
 * MovieHeader component, and a View component that contains a ScrollView component that contains a
 * View component that contains a View component that contains a Text component, a Separator component,
 * a View component that contains a Text component, a Separator component, a View component that
 * contains a Text component, a Separator component, a View component that contains a Text component,
 * and a Separator component.
 * @returns A view with a status bar, a movie header, and a view with a scroll view.
 */
const MovieDetailsScreen = () => {
	var AnimatedHeaderValue = new Animated.Value(0);

	return (
		<View
			style={{
				flex: 1,
				justifyContent: 'center',
				alignSelf: 'stretch',
			}}
		>
			<StatusBar
				animated
				backgroundColor='#0000'
				barStyle='light-content'
				translucent
			/>
			<MovieHeader
				animatedValue={AnimatedHeaderValue}
				poster={movies[0].Poster}
			/>
			<View style={styles.bodyContainer}>
				<ScrollView
					scrollEventThrottle={16}
					onScroll={Animated.event(
						[
							{
								nativeEvent: {
									contentOffset: { y: AnimatedHeaderValue },
								},
							},
						],
						{ useNativeDriver: false },
					)}
				>
					<View style={styles.roundedContainer}>
						<View style={styles.infoContainer}>
							<Text style={styles.infoTitle}>Title:</Text>
							<Text style={styles.infoValue}>
								{movies[0].Title}
							</Text>
						</View>
						<Separator marginHorizontal={scale(16)} />
						<View style={styles.infoContainer}>
							<Text style={styles.infoTitle}>Year:</Text>
							<Text style={styles.infoValue}>
								{movies[0].Year}
							</Text>
						</View>
						<Separator marginHorizontal={scale(16)} />
						<View style={styles.infoContainer}>
							<Text style={styles.infoTitle}>Type:</Text>
							<Text style={styles.infoValue}>
								{movies[0].Type}
							</Text>
						</View>
						<Separator marginHorizontal={scale(16)} />
						<View style={styles.infoContainer}>
							<Text style={styles.infoTitle}>IMDB ID:</Text>
							<Text style={styles.infoValue}>
								{movies[0].imdbID}
							</Text>
						</View>
						<Separator marginHorizontal={scale(16)} />
					</View>
				</ScrollView>
			</View>
		</View>
	);
};

export default MovieDetailsScreen;
