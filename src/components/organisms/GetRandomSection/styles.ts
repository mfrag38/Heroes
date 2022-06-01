import { StyleSheet } from 'react-native';
import { fontScale, scale } from 'react-native-utils-scale';

export default StyleSheet.create({
	container: {
		flex: 1.25,
		justifyContent: 'space-evenly',
		alignItems: 'center',
		alignSelf: 'stretch',
		paddingHorizontal: scale(16),
	},
	sectionTitle: {
		fontSize: fontScale(18),
		fontWeight: '600',
		color: '#000',
	},
});
