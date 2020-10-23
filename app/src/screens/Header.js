import React, { PureComponent } from 'react';
import { StyleSheet, TextInput, View, Image, Text, TouchableHighlight, StatusBar, Platform, TouchableOpacity } from "react-native";
import colors from '../styles/Colors';
import { sizeWidth, sizeFont, sizeHeight } from '../util/Size';
import Validation from '../util/Validation';
import PropTypes from 'prop-types'

export default class Header extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    static propTypes = {
        title: PropTypes.any,
        imgCloseBack: PropTypes.any,
        BackPress: PropTypes.func,

    };
    render() {
        const { title, imgCloseBack, } = this.props;
        return (

            <View style={styles.container}>
                <TouchableOpacity activeOpacity={0.7} onPress={() => this.BackPress()} style={styles.firstView}>
                    {Validation.isEmpty(imgCloseBack) ? '' : <Image source={imgCloseBack} resizeMode="contain" style={styles.backImgStyle}></Image>}
                </TouchableOpacity>
                <View style={styles.centerView}>
                    <Text style={styles.titleStyle}>{title}</Text>
                </View>
                <View style={styles.lastView}></View>
            </View>
        );
    }
    BackPress = () => {
        this.props.BackPress();
    }
};
const styles = StyleSheet.create({
    container: {
        height: sizeWidth(11), backgroundColor: colors.COLOR_BLUE, flexDirection: 'row'
    },
    firstView: {
        flex: 0.15, justifyContent: 'center', alignItems: 'center'
    },
    centerView: {
        flex: 1, alignSelf: 'center', justifyContent: 'center', alignItems: 'center'
    },
    lastView: {
        flex: 0.15
    },
    titleStyle: {
        fontSize: sizeFont(5), color: colors.COLOR_WHITE, fontWeight: 'bold'
    },
    backImgStyle: {
        height: sizeWidth(5), width: sizeWidth(5), tintColor: colors.COLOR_WHITE
    }
});