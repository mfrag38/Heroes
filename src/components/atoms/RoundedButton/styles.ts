import { StyleSheet } from 'react-native';
import { fontScale, scale } from 'react-native-utils-scale';

export default StyleSheet.create({
	container: {
		height: scale(60),
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'stretch',
		marginHorizontal: scale(64),
		borderRadius: scale(16),
		overflow: 'hidden',
	},
	buttonContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'stretch',
	},
	buttonText: {
		fontSize: fontScale(16),
		fontWeight: '600',
	},
});
