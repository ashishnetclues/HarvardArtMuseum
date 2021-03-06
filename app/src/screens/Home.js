import React, { Component } from 'react';
import { ActivityIndicator,FlatList, StyleSheet, Text, View, TouchableOpacity, Linking, SafeAreaView, Keyboard, ImageBackground } from 'react-native';
import { connect } from 'react-redux';
import NavigationActions from '../routers/NavigationActions';
import { LogDisplay } from '../util/Utils';
import { API_KEY, getServiceCall, webServiceEndpoint } from '../webServices/WebServices';
import ArtCommon from './ArtCommon'
import colors from '../styles/Colors';
import { sizeWidth,sizeFont,sizeHeight } from '../util/Size';
import Validation from '../util/Validation';
import Header from '../screens/Header'
import {
    setDataList
} from '../actions/OrganizationAction';
import { StatusBar } from 'expo-status-bar';

const PAGE_SIZE = 50

class Home extends Component {
    /* *****************************************************************************    LIFECYCLE METHOD  ******************************************************************************** */
    /* Constructor */
    constructor(props) {
        super(props);
        this.state = {
            dialogVisible: false,
            loadMore:true,
            page:0,
        };
    }
    //LifeCycle Method
    componentDidMount() {
        this.loadData();
    }
    handleLoadMore = () => {
        if (this.state.loadMore === false) {
            this.setState({ loadMore: true });
            this.loadData();
        }
    };
    loadData = () => {
        let params={'apikey':API_KEY,
        size:PAGE_SIZE,
        page:this.state.page
      }
    getServiceCall(webServiceEndpoint.GET_LIST,params).then(response=>{
    LogDisplay("response",response);
    if(this.state.page<response.data.info.pages){
        this.state.page = this.state.page + 1
    }
    let array = response.data.records.map(obj=>{
    if(!Validation.isEmpty(obj.people)) {
        if(obj.people.length==1){
            return {...obj,nameAll:obj.people[0]["displayname"],cultureAll: "( " + obj.people[0]["culture"] + " )"}
        } else {
            var tempNameAll, tempCultureAll;
            obj.people.map((peopleObj,peopleIndex)=>{
                if(peopleIndex==0) {
                    tempNameAll = peopleObj.hasOwnProperty("displayname") && !Validation.isEmpty(peopleObj["displayname"]) ? peopleObj["displayname"] : ""
                    tempCultureAll = peopleObj.hasOwnProperty("culture") && !Validation.isEmpty(peopleObj["culture"]) ? "(" + peopleObj["culture"] + ")" : ""
                } else {
                    tempNameAll = peopleObj.hasOwnProperty("displayname") && !Validation.isEmpty(peopleObj["displayname"]) ? tempNameAll + "&" + peopleObj["displayname"] : ""
                    tempCultureAll = peopleObj.hasOwnProperty("culture") && !Validation.isEmpty(peopleObj["culture"]) ? tempCultureAll + " & (" + peopleObj["culture"] + ")" : ""
                }
            })
            return {...obj,nameAll:tempNameAll,cultureAll:tempCultureAll}
        }
    }
    
    
    })
    this.props.setDataList([...this.props.dataList, ...array])
    this.setState({loadMore:false});


    }).catch(error=>{
    LogDisplay("error",error);
    this.setState({loadMore:false});
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

    renderFooter = () => {
        //it will show indicator at the bottom of the list when data is loading otherwise it returns null
        return (
            this.state.loadMore === true ?
                <ActivityIndicator
                    style={{color: colors.COLOR_BLUE}}
                />
                : null
        );
    };
    /* Render */
    render() {
        return(
            <SafeAreaView style={{flex:1}}>
                <StatusBar style="auto" />
                <View style={styles.container}>
                    <Header BackimgTint={colors.COLOR_BLUE} BackgoundColor={colors.COLOR_WHITE} title={'Art List'}/>
                    <View style={styles.flatlistView}>
                        <FlatList 
                        showsVerticalScrollIndicator={false}
                        numColumns={2} 
                        data={this.props.dataList} 
                        renderItem={this.renderItem}
                        ListFooterComponent={this.renderFooter.bind(this)}
                        onEndReachedThreshold={0.01}
                        keyExtractor={(item, index) => item.id.toString()}
                        onEndReached={this.handleLoadMore.bind(this)}
                        />
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
    flatlistView:{ backgroundColor: colors.COLOR_WHITE,paddingBottom: sizeWidth(3),flex:1,marginRight:sizeWidth(1.5) }
});

const mapStateToProps = state => {
    return {
        dataList: state.OrganizationReducer.dataArray,
      };
};

const mapDispatchToProps = dispatch => {
    return {
        setDataList: dataList => dispatch(setDataList(dataList)), 
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Home);