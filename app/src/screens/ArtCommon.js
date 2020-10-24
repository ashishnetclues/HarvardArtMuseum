import React, { Component } from "react";
import { StyleSheet, TextInput, View, Text, Image, TouchableOpacity } from "react-native";
import propTypes from 'prop-types'
import { sizeWidth, sizeFont } from "../util/Size";
import colors from "../styles/Colors";
import Validation from '../util/Validation'

export default class ArtCommon extends Component {
    static propTypes = {
        myIndex: propTypes.any,
        myItem: propTypes.any,
        titleText: propTypes.any,
        titleTextStyle: propTypes.any,
        imgSource: propTypes.any,
        imgStyle: propTypes.any,
        bottomTitle: propTypes.any,
        bottomTitleStyle: propTypes.any,
        bottomdesc: propTypes.any,
        bottomdescStyle: propTypes.any,
        titleNumberLines: propTypes.any,
        onItemPress: propTypes.func,
    };

    static defaultProps = {
        titleTextStyle: { color: colors.COLOR_MAIN_TEXT, fontSize: sizeFont(3.5), textAlign: 'center', paddingLeft: sizeWidth(1), paddingRight: sizeWidth(1),height:sizeWidth(10) },
        imgStyle: { height: sizeWidth(35), width: '70%', alignSelf: 'center',marginTop:sizeWidth(2),marginBottom:sizeWidth(2) },
        bottomTitleStyle: { color: colors.COLOR_MAIN_TEXT, fontSize: sizeFont(2.5), paddingLeft: sizeWidth(1), paddingRight: sizeWidth(1), paddingTop: sizeWidth(2), paddingBottom: sizeWidth(1), textAlign: 'center' },
        bottomdescStyle: { color: colors.COLOR_MAIN_TEXT, fontSize: sizeFont(2.5), paddingLeft: sizeWidth(1), paddingRight: sizeWidth(1), textAlign: 'center' },
        titleNumberLines : 2 

    }
    onItemPress = (index) => {
        // this.view.bounce(100).then(endState => console.log(endState.finished ? 'bounce finished' : 'bounce cancelled'));
        this.props.onItemPress();
    }

    render() {
        const { titleTextStyle, titleText, imgSource, imgStyle, bottomTitle, bottomTitleStyle, bottomdesc, bottomdescStyle, titleNumberLines,onItemPress,myIndex,myItem } = this.props;
        return (
            <TouchableOpacity onPress={() => this.onItemPress(myIndex, myItem)} style={[styles.container]}>
                <Text numberOfLines={titleNumberLines} style={titleTextStyle}>{titleText}</Text>
                { Validation.isEmpty(imgSource) ? 
                    <View style={{ height: sizeWidth(35), width: '70%', alignSelf: 'center', backgroundColor: colors.COLOR_BLUE, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: colors.COLOR_MAIN_TEXT, fontSize: sizeFont(4), fontWeight: 'bold',textAlign:'center' }}>{'NO IMAGE FOUND'}</Text>
                    </View>
                 :
                <Image style={imgStyle} resizeMode="cover" source={{uri:imgSource}}></Image> }
                <Text style={bottomTitleStyle}>{bottomTitle}</Text>
                <Text style={bottomdescStyle}>{bottomdesc}</Text>
            </TouchableOpacity>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        width: sizeWidth(46), marginTop: sizeWidth(3), backgroundColor: colors.COLOR_BLUE, padding: sizeWidth(3),marginLeft:sizeWidth(2)
    }
})