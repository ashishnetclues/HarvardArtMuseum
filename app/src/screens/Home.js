import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity, Linking, SafeAreaView, Keyboard, ImageBackground } from 'react-native';
import { connect } from 'react-redux';
import NavigationActions from '../routers/NavigationActions';
import { LogDisplay } from '../util/Utils';
import { API_KEY, getServiceCall, webServiceEndpoint } from '../webServices/WebServices';
import ArtCommon from './ArtCommon'
import colors from '../styles/Colors';
import { sizeWidth,sizeFont,sizeHeight } from '../util/Size';
import Validation from '../util/Validation';
import Header from '../screens/Header'


export default class Home extends Component {
    /* *****************************************************************************    LIFECYCLE METHOD  ******************************************************************************** */
    /* Constructor */
    constructor(props) {
        super(props);
        this.state = {
            dialogVisible: false,
            data:[],
        };
    }
    //LifeCycle Method
    componentDidMount() {
        getServiceCall(webServiceEndpoint.GET_LIST,{'apikey':API_KEY}).then(response=>{
            LogDisplay("response",response);

            let array = response.data.records.map(obj=>{
                if(!Validation.isEmpty(obj.people)) {
                    if(obj.people.length==1){
                        return {...obj,nameAll:obj.people[0]["displayname"],cultureAll: "( " + obj.people[0]["culture"] + " )"}
                    } else {
                        var tempNameAll, tempCultureAll;
                        obj.people.map((peopleObj,peopleIndex)=>{
                            if(peopleIndex==0) {
                                tempNameAll = peopleObj["displayname"]
                                tempCultureAll =  "(" + peopleObj["culture"] + ")"
                            } else {
                                tempNameAll = !Validation.isEmpty(peopleObj.hasOwnProperty("displayname")) ? tempNameAll + "&" + peopleObj["displayname"] : ""
                                tempCultureAll = !Validation.isEmpty(peopleObj.hasOwnProperty("culture")) ? tempCultureAll + " & (" + peopleObj["culture"] + ")" : ""
                            }
                        })
                        return {...obj,nameAll:tempNameAll,cultureAll:tempCultureAll}
                    }
                }
               
                
            })
            this.setState({data:array});


        }).catch(error=>{
            LogDisplay("error",error);
        })
    }

    onItemPress = (item) => {
        NavigationActions.navigate('Detail',{artObject:item})
    }

    renderItem = ({ item:item,index }) => {
        return(
             <ArtCommon myIndex={index} myItem={item} onItemPress={() => this.onItemPress(item, index)} titleText={item.title} bottomTitle={item.nameAll} bottomdesc={item.cultureAll} imgSource={item.hasOwnProperty('primaryimageurl')?item.primaryimageurl:""}/> 
       )
    }

    /* Render */
    render() {
        return(
            <SafeAreaView style={{flex:1}}>
                <View style={styles.container}>
                    <Header BackimgTint={colors.COLOR_WHITE} BackgoundColor={colors.COLOR_BLUE} title={'Art List'}/>
                    <View style={styles.flatlistView}>
                        <FlatList showsHorizontalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }} numColumns={2} data={this.state.data} renderItem={this.renderItem} />
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}
/* StyleSheet */
const styles = StyleSheet.create({
    container: { flex: 1 },
    listItemContainer: { flex: 0.5, marginTop: sizeWidth(3), marginLeft: sizeWidth(3),backgroundColor:colors.COLOR_BLUE,padding:sizeWidth(3)},
    flatlistView:{ flex: 1,backgroundColor: colors.COLOR_WHITE,paddingBottom: sizeWidth(3),paddingRight: sizeWidth(3), }
});

// export default connect()(Home);
