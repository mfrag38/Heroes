import { StyleSheet } from 'react-native';
import { fontScale, scale } from 'react-native-utils-scale';

export default StyleSheet.create({
	container: {
		width: scale(300),
		height: scale(300),
		justifyContent: 'flex-end',
		alignItems: 'flex-start',
		margin: scale(8),
		padding: scale(16),
		borderRadius: scale(16),
		overflow: 'hidden',
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
