import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigation/StackNavigation';
import { store } from './src/redux/store';

const App = () => {
	return (
		<Provider store={store}>
			<NavigationContainer>
				<StackNavigator />
			</NavigationContainer>
		</Provider>
	);
};

export default App;
