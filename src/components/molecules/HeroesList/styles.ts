import { StyleSheet } from 'react-native';
import { scale } from 'react-native-utils-scale';

export default StyleSheet.create({
	listContainer: {
		marginHorizontal: scale(16),
		paddingTop: scale(8),
	},
	loaderContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'stretch',
	},
});
