import React, { useEffect } from 'react';
import {
	Text,
	View,
	ScrollView,
	StatusBar,
	Animated,
	ActivityIndicator,
	Alert,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { scale } from 'react-native-utils-scale';
import Separator from '../../components/atoms/Separator';
import MovieHeader from '../../components/organisms/MovieHeader';
import styles from './styles';
import { getMovies } from '../../api/movies';
import { generateRandom } from '../../utils/randomGenerator';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import {
	clearMovie,
	setIsLoading,
	setMovie,
} from '../../redux/slices/movieSlice';
import {
	setShouldReplay,
	setShouldShowReplay,
} from '../../redux/slices/homeSlice';

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
	const { params } = useRoute();

	const { isLoading, movie } = useSelector((state: RootState) => state.movie);

	const { goBack, addListener } = useNavigation();
	const dispatch = useDispatch();

	useEffect(() => {
		const listener = addListener('beforeRemove', () => {
			dispatch(clearMovie());
		});

		return listener;
	}, []);

	console.log('The Movie:', movie);

	useEffect(() => {
		dispatch(setIsLoading(true));
		if (params.prev === 'HomeRandom') {
			getMovies(params.randomName, {
				success: (res: any) => {
					if (res.Error) {
						dispatch(setIsLoading(false));
						Alert.alert(
							'Error',
							'Cannot find a movie for that random superhero, Would you like to try again?',
							[
								{
									text: 'no',
									onPress: () => {
										dispatch(setShouldReplay(false));
										goBack();
									},
								},
								{
									text: 'yes',
									onPress: () => {
										dispatch(setShouldReplay(true));
										goBack();
									},
								},
							],
						);
					} else {
						dispatch(
							setMovie(
								res.Search[generateRandom(res.Search.length)],
							),
						);
						dispatch(setIsLoading(false));
					}
				},
				error: (error: any) => {
					console.log('The Error:', error);
					dispatch(setIsLoading(false));
				},
			});
		} else {
			getMovies(params.heroName, {
				success: (res: any) => {
					if (res.Error) {
						dispatch(setIsLoading(false));
						Alert.alert(
							'Error',
							`No movie found for ${params.heroName}, Try again with different one.`,
							[
								{
									text: 'Ok',
									onPress: goBack,
								},
							],
						);
					} else {
						dispatch(
							setMovie(
								res.Search[generateRandom(res.Search.length)],
							),
						);
						dispatch(setIsLoading(false));
					}
				},
				error: (error: any) => {
					console.log('The Error:', error);
					dispatch(setIsLoading(false));
				},
			});
		}
	}, []);

	var AnimatedHeaderValue = new Animated.Value(0);

	return isLoading ? (
		<View style={styles.loaderContainer}>
			<ActivityIndicator color='#000' size={scale(48)} />
		</View>
	) : (
		<View style={styles.container}>
			<StatusBar
				animated
				backgroundColor='#0000'
				barStyle='light-content'
				translucent
			/>
			<MovieHeader
				animatedValue={AnimatedHeaderValue}
				poster={movie ? movie.Poster : ''}
				replay={() => {
					dispatch(setShouldShowReplay(false));
					dispatch(setShouldReplay(true));
					goBack();
				}}
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
								{movie ? movie.Title : ''}
							</Text>
						</View>
						<Separator marginHorizontal={scale(16)} />
						<View style={styles.infoContainer}>
							<Text style={styles.infoTitle}>Year:</Text>
							<Text style={styles.infoValue}>
								{movie ? movie.Year : ''}
							</Text>
						</View>
						<Separator marginHorizontal={scale(16)} />
						<View style={styles.infoContainer}>
							<Text style={styles.infoTitle}>Type:</Text>
							<Text style={styles.infoValue}>
								{movie ? movie.Type : ''}
							</Text>
						</View>
						<Separator marginHorizontal={scale(16)} />
						<View style={styles.infoContainer}>
							<Text style={styles.infoTitle}>IMDB ID:</Text>
							<Text style={styles.infoValue}>
								{movie ? movie.imdbID : ''}
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
