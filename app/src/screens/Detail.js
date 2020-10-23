import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity, Linking, SafeAreaView, Keyboard, ImageBackground } from 'react-native';

// //Imported Libraries
// import NetInfo from '@react-native-community/netinfo';
import { connect } from 'react-redux';
// import TextTicker from 'react-native-text-ticker'

// // Common Classes 
// import { sizeFont, sizeHeight, sizeWidth } from '../../util/Size';
// import { errMessage, Strings } from '../../strings/Strings';
// import colors from '../../../res/styles/Colors';
// import NavigationActions from '../../routers/NavigationActions';
// import NetHandleBack from '../../component/NetHandleBack';
// import NetScreenReplace from '../../component/NetScreenReplace';
// import NetIcons from '../../component/NetIcons';
// import { LogDisplay } from '../../util/Utils';
// import NetHeaderClass from '../../component/NetHeaderClass';
// import { DrawerActions } from 'react-navigation-drawer';
// import { Images } from '../../util/ImagesConst';
// import { HOMEDATA } from '../../util/Constant';
// import NetTextLabel from '../../component/NetTextLabel';
// import { pageName, TrackScreen } from '../../util/FirebaseAnalytics';
// import NetAlert from '../../component/NetAlert'
// import { FONT_NORMAL, FONT_MEDEIUM, FONT_BOLD, FONT_REGULAR, FONT_LIGHT } from './../../util/Font';

// var unsubscribe;
export default class Detail extends Component {
    /* *****************************************************************************    LIFECYCLE METHOD  ******************************************************************************** */
    /* Constructor */
    constructor(props) {
        super(props);
        this.state = {
            dialogVisible: false
        };
    }
    //LifeCycle Method
    componentDidMount() {
        // unsubscribe = NetInfo.addEventListener(state => {
        //     this.setState({ isConnected: state.isInternetReachable });
        //     this.forceUpdate();
        // });

        // NetInfo.fetch().done(state => {
        //     this.setState({ isConnected: state.isInternetReachable });
        //     this.forceUpdate();
        // });
    }
    componentWillUnmount() {
        // unsubscribe();
    };

    /* *****************************************************************************    CUSTOM METHOD  ******************************************************************************** */
  

    
    /* *****************************************************************************     DESIGN METHOD   ******************************************************************************** */
    /* Render */
    render() {
        return(
            <View style={{flex:1}}>
                <Text>{'hello home called'}</Text>
            </View>
        )
        // if (
        //     this.state.isConnected === true || this.state.isConnected == undefined
        // ) {
        //     return (
        //         <SafeAreaView style={[styles.container, { backgroundColor: colors.COLOR_GREEN }]}>
 
        //                 <NetHeaderClass onPressRight={() => Linking.openURL('mailto:example@gmail.com?subject=example&body=example')}
        //                     onPressSecondRight={() => this.onCallclick("212121212")} onPress={() => this.onMenuclick()}
        //                     rightSource={Images.ic_email} secondRightSource={Images.ic_phone} source={Images.ic_menu}
        //                     imgCenterSource={Images.ic_text_icon} />

        //                 <View style={styles.container}>
        //                     <FlatList
        //                         data={HOMEDATA}
        //                         bounces={false}
        //                         // style={styles.flatList}
        //                         extraData={this.state}
        //                         showsVerticalScrollIndicator={false}
        //                         renderItem={this.renderItem}
        //                         keyExtractor={(item, index) => index.toString()}
        //                     />
        //                 </View>
                       

        //             <NetAlert
        //                 title={"Exit App"}
        //                 message={"Are you sure you want to exit?"}
        //                 dialogVisible={this.state.dialogVisible}
        //                 negativeButtonText={"No"}
        //                 positiveButtonText={"Yes"}
        //                 negativeButtonClick={() => console.log("Cancle")}
        //                 positiveButtonClick={() => console.log("Done")}
        //             />
        //         </SafeAreaView>
        //     );
        // } else {
        //     return <NetScreenReplace />;
        // }
    }
    // /* renderItem for Flatlist */
    // renderItem = ({ item: item, index }) => {
    //     return (
           
    //     );
    // };
}
/* StyleSheet */
const styles = StyleSheet.create({
    // container: { flex: 1, },
    // titleStyle: { flex: 1, alignSelf: 'center', fontSize: sizeFont(4), color: colors.COLOR_YELLOW,fontFamily:FONT_MEDEIUM },
    // timeStyle: { margin: 2, flex: 0.2, fontSize: sizeFont(3), color: colors.COLOR_BROWN,fontFamily:FONT_MEDEIUM  },
    // subtitleStyle: { margin: 2, marginTop: 5, fontSize: sizeFont(3), color: colors.COLOR_BROWN,fontFamily:FONT_REGULAR },
    // titleViewStyle: { flex: 1, borderBottomRightRadius: 5, marginLeft: 10 },
    // itemiconStyle: { marginTop: 3, height: sizeWidth(6) },
    // itemMainViewStyle: { marginLeft: sizeWidth(4), marginRight: sizeWidth(4), borderRadius: 6, marginTop: 10, marginBottom: 1, padding: 14, backgroundColor: colors.white },
    // flatList: { paddingLeft: sizeWidth(4), paddingLeft: sizeWidth(4), paddingRight: sizeWidth(4), paddingTop: sizeWidth(3), paddingBottom: sizeWidth(3) },
    // txtTickerAlert: {fontFamily:FONT_BOLD, paddingRight: 5, fontSize: sizeFont(3.4), color: colors.COLOR_BROWN, alignSelf: 'center' },
    // txtTickerstyle: {fontFamily:FONT_REGULAR, color: colors.COLOR_BROWN, fontSize: sizeFont(3.4), color: colors.COLOR_BROWN, textAlign: 'auto', padding: sizeWidth(2) },
    // viewTickerstyle: { backgroundColor: colors.COLOR_YELLOW, margin: sizeWidth(4), flexDirection: 'row', paddingLeft: 7, paddingRight: 7 },
    // tickermainview: { backgroundColor: colors.COLOR_GREEN, borderColor: 'red', borderTopWidth: 0, shadowOffset: { height: 0, width: 0 }, shadowOpacity: 0, elevation: 0 },
    // viewTextTicker: { flex: 1, justifyContent: 'center' },
});

// export default connect()(Detail);
