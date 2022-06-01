import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

/**
 * This function takes in a buttonTitle, buttonColor, titleColor, and onPress, and returns a view with
 * a touchable opacity that has a text element with the buttonTitle and titleColor.
 * @buttonTitle Button Title of type string
 * @buttonColor Button Color of type string
 * @titleColor Button Title Color of type string
 * @onPress Button on press function
 * @returns A View component with a TouchableOpacity component inside of it.
 */
const RoundedButton = ({
	buttonTitle,
	buttonColor,
	titleColor,
	onPress,
}: {
	buttonTitle: string;
	buttonColor: string;
	titleColor: string;
	onPress: any;
}) => {
	return (
		<View
			style={[
				styles.container,
				{
					backgroundColor: buttonColor,
				},
			]}
		>
			<TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
				<Text
					style={[
						styles.buttonText,
						{
							color: titleColor,
						},
					]}
				>
					{buttonTitle}
				</Text>
			</TouchableOpacity>
		</View>
	);
};

export default RoundedButton;
