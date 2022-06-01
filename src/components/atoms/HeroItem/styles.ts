import { StyleSheet } from 'react-native';
import { fontScale, scale } from 'react-native-utils-scale';

export default StyleSheet.create({
	container: {
		marginVertical: scale(8),
		borderRadius: scale(16),
		borderWidth: scale(1),
		borderColor: '#000',
		overflow: 'hidden',
		backgroundColor: '#DDD',
	},
	heroImage: {
		height: scale(150),
		alignSelf: 'stretch',
		borderTopLeftRadius: scale(16),
		borderTopRightRadius: scale(16),
		overflow: 'hidden',
	},
	heroNameContainer: {
		marginVertical: scale(2),
		paddingHorizontal: scale(16),
	},
	heroName: {
		fontSize: fontScale(18),
		fontWeight: '800',
		color: '#000',
	},
});
