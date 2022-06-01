import { StyleSheet, Dimensions, StatusBar } from 'react-native';
import { scale } from 'react-native-utils-scale';

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
	backIconContainer: {
		width: scale(48),
		height: scale(48),
		justifyContent: 'center',
		alignItems: 'center',
		position: 'absolute',
		left: scale(8),
		top: StatusBar.currentHeight! + scale(8),
		borderRadius: scale(24),
		overflow: 'hidden',
	},
	backIconButton: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'stretch',
	},
});
