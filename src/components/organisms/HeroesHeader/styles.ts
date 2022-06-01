import { StyleSheet } from 'react-native';
import { fontScale, scale } from 'react-native-utils-scale';

export default StyleSheet.create({
	container: {
		height: scale(64),
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'stretch',
		elevation: 3,
		backgroundColor: '#000',
	},
	backIconContainer: {
		width: scale(48),
		height: scale(48),
		justifyContent: 'center',
		alignItems: 'center',
		position: 'absolute',
		left: scale(8),
		borderRadius: scale(24),
		overflow: 'hidden',
	},
	title: {
		flex: 1,
		fontSize: fontScale(30),
		fontWeight: 'bold',
		textAlign: 'center',
		color: '#fff',
	},
});
