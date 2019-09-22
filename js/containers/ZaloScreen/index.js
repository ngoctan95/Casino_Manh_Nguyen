import React from "react";
import {StatusBar, Platform , View, TouchableOpacity,Image,  Text} from "react-native";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import BaseScreen from "../BaseScreen";
import {styles} from "./style";
import {images} from "../../../assets/index";
import {ScreenNames} from "../../route/ScreenNames";
import *  as Animatable from "react-native-animatable";
import Utils from "../../shared/utils/stuff/Utils";
import Constant from "../../shared/utils/constant/Constant";
import {ScreenWidth} from "../../shared/utils/dimension/Divices";
import Ionicons from "react-native-vector-icons/Ionicons";
import {colors} from "../../shared/utils/colors/colors";
import fonts from "../../shared/utils/fonts/fonts";
class ZaloScreen extends BaseScreen {
	constructor(props) {
		super(props);
		this.state = {
			shouldShowTitle: false,
			currentIndexRandomized: 0,
		};
	}

	componentWillMount() {
		const currentIndexRandomized = Utils.randomInRange(0, 3);
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
		}, Constant.SPLASH_TIME_OUT);
	}

	componentWillReceiveProps(nextProps) {
		if (!nextProps) {
			return;
		}
	}

	async _directOpenScreenByUserToken () {
		// const tokenExist = await IALocalStorage.getTokenFirstTime();
		// if (tokenExist) {
		//   this._goToWelcomeScreen();
		// } else {
		// 	this._goToHomeScreen();
		// }
	}

  _goToWelcomeScreen = () => {
  	this.goToScreen(ScreenNames.WelcomeScreen, {currentIndexRandomized: this.state.currentIndexRandomized});
  }

  _goToIntroductionScreen = () => {
  	this.goToScreen(ScreenNames.WelcomeScreen);
  }

  render() {
  	return (
  		<View  style={styles.mainContainer}>
  			<StatusBar barStyle="light-content" hidden/>
  	<Animatable.View
  				style={styles.absolute}
  				animation={"fadeIn"}
  				duration={Constant.CONTENT_TIME_OUT}>
  				<Image source={images.zalo} style={{width: ScreenWidth - 100, height: ScreenWidth - 100}}/>
  				<Text style={{marginLeft: 20, marginEnd: 20, marginTop: 20, textAlign: "center", fontSize: 14, color: colors.white, fontFamily: fonts.family.nunito.bold}}>Quét mã QR bằng Zalo trên điện thoại để tham gia nhóm hỗ trợ kucasino!</Text>
  			</Animatable.View>
  			{Platform.OS === "ios" ?
  				<TouchableOpacity onPress={()=>{this.goBack();}} style={{position: "absolute", top: 46, right: 10}}>
  					{/* <View style={{backgroundColor: colors.gray, widht: 28, height: 28, borderRadius: 14}}> */}
  					<Ionicons name="ios-close-circle" size={25} color={colors.blue_dodger}/>
  					{/* </View> */}
  					{/* <Text style={{color: colors.blue}}>Back >>></Text> */}
  				</TouchableOpacity> : null}
  		</View>
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
)(ZaloScreen);
