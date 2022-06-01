import { StyleSheet } from 'react-native';
import { fontScale, scale } from 'react-native-utils-scale';

export default StyleSheet.create({
	bodyContainer: {
		flex: 1,
		justifyContent: 'center',
		alignSelf: 'stretch',
		top: -16,
		borderTopLeftRadius: scale(16),
		borderTopRightRadius: scale(16),
		overflow: 'hidden',
		backgroundColor: '#fff',
	},
	roundedContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'stretch',
	},
	infoContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'stretch',
		marginHorizontal: scale(16),
		marginVertical: scale(32),
		paddingHorizontal: scale(8),
	},
	infoTitle: {
		fontSize: fontScale(22),
		fontWeight: 'bold',
		color: '#000',
	},
	infoValue: {
		flex: 1,
		fontSize: fontScale(20),
		fontWeight: '600',
		marginHorizontal: scale(16),
		color: '#000',
	},
});
