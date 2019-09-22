import {StyleSheet} from "react-native";
import {colors} from "../../shared/utils/colors/colors";
import {fonts} from "../../shared/utils/fonts/fonts";
import {ScreenHeight} from "../../shared/utils/dimension/Divices";
import {ifIphoneX} from "react-native-iphone-x-helper";

const LOGO_MARGIN_TOP = ScreenHeight / 11 ;

export const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		width: null,
		height: null,
	},
	videoContainer: {
		position: "absolute",
		top: 0,
		left: 0,
		right: 0,
		bottom: 0
	},
	logo: {
		marginTop: ifIphoneX ? LOGO_MARGIN_TOP : LOGO_MARGIN_TOP - 15,
	},
	title: {
		fontFamily: fonts.family.nunito.bold,
		fontSize: 55,
		letterSpacing: 0,
		textAlign: "center",
		color: colors.white,
		justifyContent: "center",
		alignItems: "center",
		alignSelf: "center",
		alignContent: "center",
		width: "80%",
		position: "absolute",
		top: ScreenHeight / 4 - 70,
		left: "10%",
	},
	motto: {
		fontFamily: fonts.family.nunito.regular,
		fontSize: 16,
		letterSpacing: 0,
		textAlign: "center",
		color: colors.white,
		justifyContent: "center",
		alignItems: "center",
		alignSelf: "center",
		alignContent: "center",
		width: "70%",
		position: "absolute",
		top: ScreenHeight - 150,
		left: "15%",
	},
	absolute: {
		position: "absolute",
		top: 0,
		left: 0,
		bottom: 0,
		right: 0,
		height: ScreenHeight,
    width: "100%",
  }
});

export default {
	styles
};
