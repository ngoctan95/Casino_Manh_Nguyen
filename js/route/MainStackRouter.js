import {Easing, Animated} from "react-native";
/* eslint-disable react/display-name */
import {
	createStackNavigator,
	createAppContainer,
} from "react-navigation";
import React from "react";
import SplashScreen from "../containers/SplashScreen/index";
import WelcomeScreen from "../containers/WelcomeScreen/index";
import ZaloScreen from "../containers/ZaloScreen/index";
import createAnimatedSwitchNavigator from "react-navigation-animated-switch";
import {Transition} from "react-native-reanimated";


function screenAnimConfig () {
	return {
		transitionSpec: {
			duration: 2000,
			easing: Easing.out(Easing.poly(4)),
			timing: Animated.timing,
			useNativeDriver: true,
		},
		screenInterpolator: ({layout, position, scene}) => {
			const {index} = scene;
			const {initWidth} = layout;

			const translateX = position.interpolate({
				inputRange: [index - 1, index, index + 1],
				outputRange: [-initWidth, 0, 0],
			});

			const opacity = position.interpolate({
				inputRange: [index - 1, index - 0.99, index],
				outputRange: [0, 1, 1],
			});

			return {opacity, transform: [{translateX}]};
		},
	};
}
export default class AppContainer extends React.Component {

	render() {
		// SwitchNavigator for using the multiple stack in the same route
		const AppSwitchNavigator = createAnimatedSwitchNavigator({
			// IntroductionScreen: {screen: IntroductionScreen},
			// SplashScreen: {screen: SplashScreen},
			WelcomeScreen: {screen: WelcomeScreen},
		}, {
			transition: (
				<Transition.Together>
					<Transition.Out
						type="slide-bottom"
						durationMs={700}
						interpolation="easeIn"
					/>
					<Transition.In type="fade" durationMs={700} />
				</Transition.Together>
			),
		});

		// ScreenNavigator for separately each screen into stack one
		const MainScreenNavigator = createStackNavigator(
			{
				MainScreen: {screen: AppSwitchNavigator},
				SplashScreen: {screen: SplashScreen},
				ZaloScreen: {screen: ZaloScreen}
			},
			{
				mode: "modal",
				headerMode: "none",
				transparentCard: true,
				transitionConfig: () => screenAnimConfig()
			}
		);
		const App = createAppContainer(MainScreenNavigator);
		return <App {...this.props} />;
	}

}
