import { StyleSheet, Dimensions } from 'react-native';

const height = Dimensions.get('window').height;

export default StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		left: 0,
		right: 0,
	},
	headerImage: {
		alignSelf: 'stretch',
		height: height / 2.75,
	},
});
