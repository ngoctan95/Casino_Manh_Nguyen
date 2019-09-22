import React from "react";
import {StatusBar, View, Image, Text, ImageBackground, TouchableOpacity} from "react-native";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import BaseScreen from "../BaseScreen";
import {styles} from "./style";
import {images} from "../../../assets/index";
import {ScreenNames} from "../../route/ScreenNames";
import I18n from "../../shared/utils/locale/i18n";
import *  as Animatable from "react-native-animatable";
import Utils from "../../shared/utils/stuff/Utils";
import Constant from "../../shared/utils/constant/Constant";
import {colors} from "../../shared/utils/colors/colors";
import IAButton from "../../shared/components/IAButton";
import fonts from "../../shared/utils/fonts/fonts";

const langs = {
	title: I18n.t("welcomeScreen.title"),
	motto: I18n.t("welcomeScreen.motto"),
	loginFBSDK: I18n.t("welcomeScreen.loginFBSDK"),
	loginGoogleSDK: I18n.t("welcomeScreen.loginGoogleSDK"),
	support: I18n.t("welcomeScreen.support"),
	km: I18n.t("welcomeScreen.km")
};

class WelcomeScreen extends BaseScreen {
	constructor(props) {
		super(props);
		this.state = {
			shouldShowTitle: false,
			currentIndexRandomized: 0,
		};
	}

	componentWillMount() {
		const currentIndexRandomized = Utils.randomInRange(0, 2);
		this.setState({currentIndexRandomized});
	}

	componentDidMount() {
		this._updateTitle();
		this._updateTimeLeftToGoToHomeScreen();
	}

	_updateTitle() {
		setTimeout(()=>{
			this.setState({
				shouldShowTitle: true,
			});
		}, 1500);
	}

	_updateTimeLeftToGoToHomeScreen() {
		setTimeout(()=>{
			this._directOpenScreenByUserToken();
		}, 5000);
	}

	componentWillReceiveProps(nextProps) {
		if (!nextProps) {
			return;
		}
	}

	async _directOpenScreenByUserToken () {
		this._goToHomeScreen();
	}

  _goToHomeScreen = () => {
  	this.goToScreen(ScreenNames.HomeScreen);
  }

  _goToLoginFacebook() {
  	this.goToScreen(ScreenNames.SplashScreen);
  }
  _goToLoginFacebook1() {
  	this.goToScreen(ScreenNames.SplashScreen, {km: true});
  }

  _goToLoginFacebook2() {
  	this.goToScreen(ScreenNames.ZaloScreen);
  }

  render() {
  	return (
  		<ImageBackground source={images.bg} style={styles.mainContainer}>
  			<StatusBar barStyle="light-content" hidden/>
  			<Animatable.View
  				style={styles.absolute}
  				animation={"fadeIn"}
  				duration={Constant.CONTENT_TIME_OUT}>

  				<View style={styles.buttonContainer}>
  					<Animatable.View animation="fadeInLeft" duration={Constant.BUTTON_TIME_OUT} style={styles.login}>
  						<IAButton title={langs.loginFBSDK.toUpperCase()} titleStyle={styles.loginTitle} onPress={()=>{this._goToLoginFacebook();}}/>
  					</Animatable.View>
  					{/* <Animatable.View animation="fadeInRight" duration={Constant.BUTTON_TIME_OUT} style={styles.signUp}>
  						<IAButton title={langs.loginGoogleSDK.toUpperCase()} titleStyle={styles.signUpTitle} onPress={()=>{this._goToLoginFacebook();}}/>
  					</Animatable.View>
  					<Animatable.View animation="pulse" iterationCount="infinite" duration={Constant.BUTTON_TIME_OUT} style={[styles.login, {backgroundColor: colors.yellow}]}>
  						<IAButton title={langs.km.toUpperCase()} titleStyle={styles.signUpTitle} onPress={()=>{this._goToLoginFacebook1();}}/>
  					</Animatable.View> */}
  				</View>
  			</Animatable.View>
  			{/* <TouchableOpacity style={{position: "absolute", bottom: 10, left: 10}} onPress={()=>{this._goToLoginFacebook2();}}>
  				<Animatable.View animation="pulse" iterationCount="infinite">
  					<Image source={images.support} style={{width: 40, height: 40}}/>
  					<Text style={{fontSize: 9, color: colors.white, fontFamily: fonts.family.nunito.bold}}>{langs.support.toUpperCase()}</Text>
  				</Animatable.View>
  			</TouchableOpacity> */}
  		</ImageBackground>
  	);
  }
}

// eslint-disable-next-line no-unused-vars
const mapStateToProps = state => {
	return {};
};

const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{},
		dispatch
	);

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(WelcomeScreen);
