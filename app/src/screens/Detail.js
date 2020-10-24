import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity, Linking, SafeAreaView, Keyboard, ImageBackground, Image } from 'react-native';

import colors from '../styles/Colors';
import { sizeWidth, sizeFont, sizeHeight } from '../util/Size';
import Validation from '../util/Validation';
import Header from '../screens/Header'
import { ScrollView } from 'react-native-gesture-handler';
export default class Detail extends Component {
    /* *****************************************************************************    LIFECYCLE METHOD  ******************************************************************************** */
    /* Constructor */
    constructor(props) {
        super(props);
        this.state = {
            dialogVisible: false,
            artObject: {},
        };
    }
    //LifeCycle Method
    componentDidMount() {
        this.setState({ artObject: this.props.navigation.state.params.artObject })
    }

    backPress = () => {
        this.props.navigation.goBack();
    }

    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={{ flex: 1 }}>
                    <Header BackimgTint={colors.COLOR_BLUE} BackgoundColor={colors.COLOR_WHITE} title={'Detail'} BackPress={() => this.backPress()} imgCloseBack={require('../../../assets/Back.png')} />
                    <ScrollView style={{flexGrow:1}}>
                    {/* Image */}
                    <View style={{ height: sizeWidth(60),width:'100%' }}>
                        {!this.state.artObject.hasOwnProperty('primaryimageurl') || Validation.isEmpty(this.state.artObject.primaryimageurl) ?
                            <View style={{ height: '100%', width: '100%', backgroundColor: colors.COLOR_BLUE, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ color: colors.COLOR_GREY, fontSize: sizeFont(5), fontWeight: 'bold' }}>{'NO IMAGE FOUND'}</Text>
                            </View>
                            : <Image resizeMode="contain" source={{ uri: this.state.artObject.primaryimageurl }} style={{ height: '100%', width: '100%', backgroundColor: colors.COLOR_WHITE }}></Image>
                        }
                    </View>
                    {/* Image */}

                    {/* Art Info */}
                    <View style={{ height: '10%', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', width: '97%', alignSelf: 'center' }}>
                        <Text style={{ color: colors.COLOR_GREY, fontSize: sizeFont(5), fontWeight: '600', paddingRight: sizeWidth(2), paddingLeft: sizeWidth(2) }}>{'Art Info'}</Text>
                        {this.state.artObject.verificationlevel == 0
                            ? <Image source={require('../../../assets/False.png')} resizeMode="contain" style={{ height: sizeWidth(5), width: sizeWidth(5) }}></Image>
                            : <Image source={require('../../../assets/True.png')} resizeMode="contain" style={{ height: sizeWidth(5), width: sizeWidth(5) }}></Image>
                        }
                    </View>
                    {/* Art Info */}

                    {/* Medium */}
                    {this.state.artObject.hasOwnProperty('medium') && !Validation.isEmpty(this.state.artObject.medium) ?
                        <View style={{ width: '97%', alignSelf: 'center', marginBottom: sizeWidth(2) }}>
                            <Text style={styles.descText}>
                                <Text>{'Medium:'}</Text>
                                <Text style={{ paddingLeft: sizeWidth(2.3) }}>{this.state.artObject.medium}</Text>
                            </Text>
                        </View>
                        : null}
                    {/* Medium */}

                   
                    {/* Division */}
                    {this.state.artObject.hasOwnProperty('division') && !Validation.isEmpty(this.state.artObject.division) ?
                    <View style={{ width: '97%', alignSelf: 'center', marginBottom: sizeWidth(2), marginTop: sizeWidth(2) }}>
                        <Text style={styles.descText}>
                            <Text>{'Division:'}</Text>
                            <Text style={{ paddingLeft: sizeWidth(2.3) }}>{this.state.artObject.division}</Text>
                        </Text>
                    </View> : null }
                    {/* Division */}


                    {/* Artist */}
                    {this.state.artObject.hasOwnProperty('nameAll') && !Validation.isEmpty(this.state.artObject.nameAll) ?
                    <View style={{ width: '97%', alignSelf: 'center', marginBottom: sizeWidth(2), marginTop: sizeWidth(2) }}>
                        <Text style={styles.descText}>
                            <Text>{'Artist:'}</Text>
                            <Text style={{ paddingLeft: sizeWidth(2.3) }}>{this.state.artObject.nameAll}</Text>
                        </Text>
                    </View> : null }

                    {/* Description */}
                    {this.state.artObject.hasOwnProperty('description') && !Validation.isEmpty(this.state.artObject.description) ?
                    <View style={{ width: '97%', alignSelf: 'center', marginBottom: sizeWidth(2), marginTop: sizeWidth(2) }}>
                        <Text style={styles.descText}>
                            <Text>{'Description:'}</Text>
                            <Text style={{ paddingLeft: sizeWidth(.32) }}>{this.state.artObject.description}</Text>
                        </Text>
                    </View> : null }


                    {this.state.artObject.hasOwnProperty('provenance') && !Validation.isEmpty(this.state.artObject.provenance) ?
                    <View style={{ justifyContent: 'center', alignItems: 'center', width: '97%',marginTop:sizeWidth(2) }}>
                        <Text style={{ color: colors.COLOR_GREY, fontSize: sizeFont(5), fontWeight: '600', paddingRight: sizeWidth(2), paddingLeft: sizeWidth(2) }}>{'Provenance'}</Text>
                        <Text style={{ fontSize: sizeFont(3.6), paddingRight: sizeWidth(2), paddingLeft: sizeWidth(2), width: '100%', marginTop: sizeWidth(2),color: colors.COLOR_GREY,fontWeight:'500' }}>{this.state.artObject.provenance}</Text>
                    </View> : null }

                    </ScrollView>


                    {this.state.artObject.hasOwnProperty('url') && !Validation.isEmpty(this.state.artObject.url) ?
                    <TouchableOpacity onPress={() => { Linking.openURL(this.state.artObject.url) }} style={{ width: '60%', backgroundColor: colors.COLOR_BLUE, justifyContent: 'center', alignItems: 'center', margin: sizeWidth(10), alignSelf: 'center', padding: sizeWidth(3) }}>
                        <Text>{'Click for more info'}</Text>
                    </TouchableOpacity> : null }
                </SafeAreaView>
            </View>
        )
    }
}
/* StyleSheet */
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    welcomeText: {
        color: colors.COLOR_BLUE,
        fontWeight: 'bold',
        fontSize: sizeWidth(4)
    },
    descText: {
        color: colors.COLOR_GREY,
        fontSize: sizeFont(3.6),
        fontWeight: "500"
    },
});

// export default connect()(Detail);
