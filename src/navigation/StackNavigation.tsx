import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import HeroesScreen from '../screens/HeroesScreen';
import MovieDetailsScreen from '../screens/MovieDetailsScreen';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen name='Home' component={HomeScreen} />
			<Stack.Screen name='Heroes' component={HeroesScreen} />
			<Stack.Screen name='MovieDetails' component={MovieDetailsScreen} />
		</Stack.Navigator>
	);
};

export default StackNavigator;
