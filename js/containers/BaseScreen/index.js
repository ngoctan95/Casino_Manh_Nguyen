import React, {Component} from "react";
import {View, Keyboard, Alert} from "react-native";
import LogManager from "../../shared/utils/logging/LogManager";
import {ScreenNames} from "../../route/ScreenNames";
import Ionicons from "react-native-vector-icons/Ionicons";
import I18n from "../../shared/utils/locale/i18n";

const langs = {
	ok: I18n.t("ok"),
};

class BaseScreen extends Component {
  static navigationOption = {
  	header: null,
  }

  // You wanna do the header, let modify here
  // static navigationOptions = ({navigation}) => ({
  //   title: "Title",
  //   headerLeft: <TouchableOpacity
  //       onPress={() => navigation.toggleDrawer()}>
  //     <Ionicon name="ios-menu" size={22.5} style={{color: colors.black}}/>
  //   </TouchableOpacity>,
  // })

  constructor(props) {
  	super(props);
  }

  /**
   * More simple and clean logging data
   * @param {*} className
   * @param {*} object
   */
  log(className = "", object = {}) {
  	// eslint-disable-next-line no-undef
  	if (__DEV__) {
  		return LogManager.showFullLog(className + ": " + LogManager.parseJsonObjectToJsonString(object));
  	} else {
  		return "";
  	}
  }

  /**
   * Dismiss keyboard which is active
   */
  dismissKeyboard () {
  	Keyboard.dismiss();
  }

  /**
   * Pop screen
   * @param {*} num
   */
  goBack(num = 1) {
  	this.props.navigation && this.props.navigation.pop(num);
  }

  /**
   * Go to another screen with name defined
   * @param {*} screen
   * @param {*} params
   */
  goToScreen(screen = ScreenNames.SplashScreen,  params = {}) {
  	this.props && this.props.navigation && this.props.navigation.navigate(screen, params);
  }

  /**
   * Render view back button
   */
  renderBackButton() {
  	return (
  		<View>
  			<Ionicons name={"ios-arrow-round-back"} size={42}/>
  		</View>
  	);
  }

  /**
   * Show alert message
   */
  alertInfo(title, msg, onPress = () => {}) {
  	Alert.alert(title, msg, [
  		{text: langs.ok, onPress: onPress},
  	]);
  }
}

export default BaseScreen;