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
		backgroundColor: '#000',
	},
	headerTitle: {
		flex: 1,
		fontSize: fontScale(30),
		fontWeight: 'bold',
		color: '#fff',
	},
	headerImage: {
		width: scale(150),
		height: scale(75),
	},
});
