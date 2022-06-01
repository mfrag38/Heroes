import { StyleSheet } from 'react-native';
import { fontScale, scale } from 'react-native-utils-scale';

export default StyleSheet.create({
	container: {
		width: scale(300),
		height: scale(300),
		justifyContent: 'center',
		alignItems: 'center',
		margin: scale(8),
		borderRadius: scale(16),
		overflow: 'hidden',
	},
	imageContainer: {
		flex: 1,
		justifyContent: 'flex-end',
		alignItems: 'flex-start',
		alignSelf: 'stretch',
		padding: scale(16),
	},
	characterName: {
		alignSelf: 'stretch',
		fontSize: fontScale(18),
		fontWeight: 'bold',
		textShadowColor: '#000',
		textShadowOffset: {
			width: scale(3),
			height: scale(2),
		},
		textShadowRadius: scale(7.5),
		color: '#fff',
	},
});
