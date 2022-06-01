import { StyleSheet } from 'react-native';
import { fontScale, scale } from 'react-native-utils-scale';

export default StyleSheet.create({
	container: {
		flex: 2,
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'stretch',
	},
	sectionTitleContainer: {
		justifyContent: 'center',
		alignItems: 'flex-start',
		alignSelf: 'stretch',
		marginVertical: scale(8),
		padding: scale(16),
	},
	sectionTitle: {
		fontSize: fontScale(16),
		fontWeight: '600',
		color: '#000',
	},
	listSectionContainer: {
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'center',
		alignSelf: 'stretch',
	},
	listTitleContainer: {
		height: scale(32),
		justifyContent: 'center',
		alignItems: 'flex-end',
		alignSelf: 'stretch',
		paddingHorizontal: scale(16),
	},
	listTitleButton: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	listTitle: {
		fontSize: fontScale(16),
		color: '#000',
	},
	loaderContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'stretch',
	},
});
