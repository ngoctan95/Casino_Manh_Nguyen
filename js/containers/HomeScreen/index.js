import React from "react";
import {View, ScrollView, TouchableOpacity, Platform, RefreshControl, Image, StatusBar} from "react-native";
import BaseScreen from "../BaseScreen/index";
import {styles} from "./style";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import I18n from "../../shared/utils/locale/i18n";
import {DrawerActions} from "react-navigation";
import {ScreenNames} from "../../route/ScreenNames";
import {getListLeague, getListUpcommingEvents, getListJoinedLeagues, getListCreatedLeagues, updateDeviceToken, resetReducer} from "./actions";
import IAHeader from "../../shared/components/IAHeader";
import IAText from "../../shared/components/IAText";
import IAHeaderWithButtons from "../../shared/components/IAHeaderWithButtons";
import IALocalStorage from "../../shared/utils/storage/IALocalStorage";
import icons from "../../shared/utils/icons/icons";
import FastImage from "react-native-fast-image";
import Constant from "../../shared/utils/constant/Constant";
import {images} from "../../../assets";

const langs = {
	welcome: I18n.t("home.welcome"),
	leagues: I18n.t("home.leagues"),
	allEvents: I18n.t("home.allEvent").toUpperCase(),
	myLeagues: I18n.t("home.myLeagues").toUpperCase(),
	upcommingEvent: I18n.t("home.upcommingEvent").toUpperCase(),
	createdLeague: I18n.t("home.createdLeague").toUpperCase(),
	joinedLeague: I18n.t("home.joinedLeague").toUpperCase(),
	event: I18n.t("home.event")
};
const nameButtons = [langs.allEvents, langs.myLeagues];

class HomeScreen extends BaseScreen {
	constructor(props) {
		super(props);
		this.state = {
			tab: langs.allEvents
		};
	}

	componentDidMount() {
		this._getData();

		// Update device token
		this._updateDeviceToken();
	}

	_getData() {
		// Get list UpcommingEvents
		this.props.getListUpcommingEvents();

		// Get list leagues
		this.props.getListLeague();

		// Get list created leagues
		this.props.getListCreatedLeagues();

		// Get list joined leagues
		this.props.getListJoinedLeagues();
	}

	async _updateDeviceToken() {
		const deviceToken = await IALocalStorage.getDeviceToken();
		this.props.updateDeviceToken({
			os: Platform.OS,
			token: deviceToken
		});
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.leagueStatus !== this.props.leagueStatus ||
          nextProps.upCommingEventsStatus !== this.props.upCommingEventsStatus) {
			this.handleResponseAPIs(nextProps);
		}
	}

	handleResponseAPIs(nextProps) {
		// not handle if the request is fetching
		if (nextProps.leagueStatus.isFetching() ||
        nextProps.upCommingEventsStatus.isFetching()) return;
		// handle response
		if (nextProps.upCommingEventsStatus.isFailure()) {
			// get error message from error object
			this.alertInfo(langs.error, nextProps.upCommingEventsError.data);
		}
		if (nextProps.leagueStatus.isFailure()) {
			// get error message from error object
			this.alertInfo(langs.error, nextProps.leagueError.data);
		}
	}

	_renderDrawerIco() {
  	return (
  		<TouchableOpacity onPress={()=>this._openDrawer()}>
  			<View style={styles.drawer}>
  				{ icons.drawer.IC_DRAWER }
  			</View>
  		</TouchableOpacity>
  	);
	}

	_renderBadge() {
  	return (
  		<View style={styles.badge}/>
  	);
	}
	_renderNotificationsIco() {
  	return (
  		<TouchableOpacity onPress={()=>this.goToScreen(ScreenNames.NotificationScreen)}>
  			<View>
  				{ icons.notification.IC_NOTIFICATION }
  				{ this._renderBadge() }
  			</View>
  		</TouchableOpacity>
  	);
	}

	_renderLogo() {
  	return (
  		<View>
  			{ this.state.tab == langs.myLeagues ?
  				null :
  				icons.logo.IC_LOGO
  			}
  		</View>
  	);
	}

  _goToCreateLeagueScreen = () => {
  	this.goToScreen(ScreenNames.CreateLeagueScreen);
  }

  _renderLeagues() {
  	return (
  		<View style={styles.leagueContainer}>
  			<View style={[styles.titleLeague, styles.marginWithBottomTitle]}>
  				<IAText text={langs.leagues.toUpperCase()} style={[styles.leagueStyle]}/>
  			</View>
  			{this._renderListLeagueItems()}
  		</View>
  	);
  }

  _goToLeagueDetail = (item) => {
  	this.goToScreen(ScreenNames.LeagueDetailScreen, {item});
  }

  _renderListLeagueItems() {
  	var leaguesList = this.props.leagues;
  	return leaguesList.map(item => {
  		return (
  			<TouchableOpacity key={item.id} onPress={()=>{this._goToLeagueDetail(item);}}>
  				<View elevation={4} style={styles.leagueItemContainer} >
  					<View style={styles.imgContentContainer}>
  						<FastImage
  							style={styles.imageItemContainer}
  							source={{
  								uri: item.image ? item.image : Constant.MOCKING_DATA.PLACE_HOLDER,
  								priority: FastImage.priority.high,
  							}}
  							resizeMode={FastImage.resizeMode.cover}/>
  					</View>
  					<View style={styles.itemContentContainer}>
  						<IAText style={styles.titleItem} text={item.name.toUpperCase()}/>
  						<IAText style={styles.descItem} text={item.detail} numberOfLines={4}/>
  					</View>
  				</View>
  			</TouchableOpacity>
  		);
  	});
  }

  _renderUpcommingEvents() {
  	return (
  		<View style={[styles.leagueContainer, styles.marginWithTopTitle]}>
  			<IAText text={langs.upcommingEvent.toUpperCase()} style={[styles.leagueStyle, styles.marginWithBottomTitle]}/>
  			{this._renderUpcommingEventItems()}
  		</View>
  	);
  }

  _renderUpcommingEventItems() {
  	var upCommingEvents = this.props.upCommingEvents;
  	return upCommingEvents.map(item => {
  		var name = item.name ? item.name : "";
  		var detail = item.detail ? item.detail : "";
  		return (
  			<View elevation={4} style={styles.leagueItemContainer} key={item.id}>
  				<View style={styles.imgContentContainer}>
  					<FastImage
  						style={styles.imageItemContainer}
  						source={{
  							uri: item.image ? item.image : Constant.MOCKING_DATA.PLACE_HOLDER,
  							priority: FastImage.priority.high,
  						}}
  						resizeMode={FastImage.resizeMode.cover}/>
  				</View>
  				<View style={styles.itemContentContainer}>
  					<IAText style={styles.titleItem} text={name.toUpperCase()}/>
  					<IAText style={styles.descItem} text={detail} numberOfLines={4}/>
  				</View>
  			</View>
  		);
  	});
  }

  _renderListCreatedLeagueItems() {
  	var createdLeagues = this.props.createdLeagues;
  	return createdLeagues.map(item => {
  		return (
  			<View elevation={4} style={styles.leagueItemContainer} key={item.title}>
  				<View style={styles.imgContentContainer}>
  					<FastImage
  						style={styles.imageItemContainer}
  						source={{
  							uri: item.image,
  							priority: FastImage.priority.high,
  						}}
  						resizeMode={FastImage.resizeMode.cover}/>
  				</View>
  				<View style={styles.itemContentContainer}>
  					<View style={{flexDirection: "row"}}>
  						<IAText style={styles.eventDetailItem} text={langs.event}/>
  						<IAText style={styles.eventItem} text={item.event}/>
  					</View>
  					<IAText style={styles.titleItem} text={item.title.toUpperCase()} numberOfLines={2} multiLine={true}/>
  					<IAText style={styles.descItem} text={item.description} numberOfLines={4}/>
  				</View>
  			</View>
  		);
  	});
  }

  _renderListJoinedLeagueItems() {
  	var joinedLeagues = this.props.joinedLeagues;
  	return joinedLeagues.map(item => {
  		return (
  			<View elevation={4} style={styles.leagueItemContainer} key={item.event}>
  				<View style={styles.imgContentContainer}>
  					<FastImage
  						style={styles.imageItemContainer}
  						source={{
  							uri: item.image,
  							priority: FastImage.priority.high,
  						}}
  						resizeMode={FastImage.resizeMode.cover}/>
  				</View>
  				<View style={styles.itemContentContainer}>
  					<IAText style={styles.titleItem} text={item.event.toUpperCase()}/>
  					<IAText style={styles.descItem} text={item.description} numberOfLines={4}/>
  				</View>
  			</View>
  		);
  	});
  }

  _renderAllEvents() {
  	return (
  		<View>
  			{ this._renderLeagues() }
  			{ this._renderUpcommingEvents() }
  		</View>
  	);
  }

  _renderCreatedLeagues() {
  	return (
  		<View style={styles.leagueContainer}>
  			<View style={styles.titleLeague}>
  				<IAText text={langs.createdLeague.toUpperCase()} style={styles.leagueStyle}/>
  			</View>
  			{this._renderListCreatedLeagueItems()}
  		</View>
  	);
  }

  _renderJoinedLeague() {
  	return (
  		<View style={[styles.leagueContainer, styles.marginWithTopTitle]}>
  			<IAText text={langs.joinedLeague.toUpperCase()} style={[styles.leagueStyle, styles.marginWithBottomTitle]}/>
  			{this._renderListJoinedLeagueItems()}
  		</View>
  	);
  }

  _renderMyLeagues() {
  	return (
  		<View>
  			{ this._renderCreatedLeagues() }
  			{ this._renderJoinedLeague() }
  		</View>
  	);
  }

  _openDrawer() {
  	this.props.navigation.dispatch(DrawerActions.openDrawer());
  }

  _onRefresh = () => {
  	this._getData();
  }

  _renderBtn() {
  	return (
  		<TouchableOpacity onPress={()=>{this._goToCreateLeagueScreen();}} style={styles.plusBtn}>
  			<Image style={styles.plusBtn} source={images.plus}/>
  		</TouchableOpacity>
  	);
  }
  render() {
  	const {tab} = this.state;
  	var upCommingEventsStatusIsLoading = this.props.upCommingEventsStatus.isFetching();

  	return(
  		<View style={styles.mainContainer}>
  			<StatusBar barStyle="dark-content" backgroundColor="transparent" translucent={true}/>
  			<View style={{marginTop: 11}}>
  				<IAHeader
  					viewLeft={this._renderDrawerIco()}
  					onPressLeft={() => {this._openDrawer();}}
  					viewRight={this._renderNotificationsIco()}
  					onPressRight={() => this.goBack()}
  					viewCenter={this._renderLogo()}/>
  			</View>
  			<View style={styles.content}>
  				<IAText text={langs.welcome.toUpperCase()} style={styles.welcomeTitle}/>
  				<IAHeaderWithButtons
  					btnNames={nameButtons}
  					onBtnPress={(tabName)=>{
  						this.setState({tab: tabName},() => {});
  					}}
  					buttonSelected={this.state.tab}/>
  			</View>
  			<ScrollView
  				style={styles.scrollContainer}
  				showsVerticalScrollIndicator
  				refreshControl={
  					<RefreshControl
  						refreshing={upCommingEventsStatusIsLoading}
  						onRefresh={()=>this._onRefresh()}
  					/>
  				}
  			>
  				{tab == langs.allEvents ?
  					this._renderAllEvents()
  					:
  					this._renderMyLeagues()
  				}
  			</ScrollView>
  			{ this._renderBtn() }
  		</View>
  	);
  }
}
const mapStateToProps = state => {
	return {
		leagueStatus: state.homeReducer.leagues.status,
		leagues: state.homeReducer.leagues.data,
		leagueError: state.homeReducer.leagues.error,

		upCommingEventsStatus: state.homeReducer.upCommingEvents.status,
		upCommingEvents: state.homeReducer.upCommingEvents.data,
		upCommingEventsError: state.homeReducer.upCommingEvents.error,

		createdLeaguesStatus: state.homeReducer.createdLeagues.status,
		createdLeagues: state.homeReducer.createdLeagues.data,
		createdLeaguesError: state.homeReducer.createdLeagues.error,

		joinedLeaguesStatus: state.homeReducer.joinedLeagues.status,
		joinedLeagues: state.homeReducer.joinedLeagues.data,
		joinedLeaguesError: state.homeReducer.joinedLeagues.error,
	};
};
const mapDispatchToProps = dispatch =>
	bindActionCreators({
		getListLeague,
		getListUpcommingEvents,
		getListJoinedLeagues,
		getListCreatedLeagues,
		updateDeviceToken,
		resetReducer
	}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);