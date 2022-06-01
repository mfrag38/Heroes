import React from 'react';
import { View } from 'react-native';
import styles from './styles';

/** A function that takes in a parameter called
 * @marginHorizontal The margin value from right and left sides.
 */
const Separator = ({ marginHorizontal }: { marginHorizontal: number }) => {
	return (
		<View
			style={[
				styles.container,
				{
					marginHorizontal: marginHorizontal,
				},
			]}
		/>
	);
};

export default Separator;
