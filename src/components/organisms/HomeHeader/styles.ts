import { StyleSheet } from 'react-native';
import { fontScale, scale } from 'react-native-utils-scale';

export default StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		alignSelf: 'stretch',
		paddingHorizontal: scale(16),
		elevation: 3,
		backgroundColor: '#f8f8f8',
	},
	headerTitle: {
		flex: 1,
		fontSize: fontScale(30),
		fontWeight: 'bold',
		textShadowColor: '#000',
		textShadowOffset: {
			width: scale(3),
			height: scale(2),
		},
		textShadowRadius: scale(15),
		color: '#e8e8e8',
	},
	headerImage: {
		width: scale(150),
		height: scale(75),
	},
});
