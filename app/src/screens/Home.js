import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity, Linking, SafeAreaView, Keyboard, ImageBackground } from 'react-native';

// //Imported Libraries
// import NetInfo from '@react-native-community/netinfo';
import { connect } from 'react-redux';
import NavigationActions from '../routers/NavigationActions';
import { LogDisplay } from '../util/Utils';
import { API_KEY, getServiceCall, webServiceEndpoint } from '../webServices/WebServices';
import ArtCommon from './ArtCommon'
import colors from '../styles/Colors';
import { sizeWidth,sizeFont,sizeHeight } from '../util/Size';
// import TextTicker from 'react-native-text-ticker'

export const artArray = [
    { id: 0, date: 'Sat 09 Nov, 2019', name: 'Wild Game Night at Craft F&B Co.', time: '07:00pm to 10:00pm', location: 'Craft F&B Co., Marquee Plaza, West Bay Road', adult: '$29', children: '$15', perPerson: '$29', description: 'Wild Game Night. Selection of Bison, Boar, Venison prepared in new and interesting ways.', featurePrice: '$29', featurename: 'Bacardi Mojitos, Prosecco, Bloody Marys & Caesars', isFav: false, org: "The Wharf", byText: "",img:require('../../../assets/Adult.png') },
    { id: 1, date: 'Sat 09 Nov, 2019', name: 'Wild Game Night at Craft F&B Co.', time: '07:00pm to 10:00pm', location: 'Craft F&B Co., Marquee Plaza, West Bay Road', adult: '$29', children: '$15', perPerson: '$29', description: 'Wild Game Night. Selection of Bison, Boar, Venison prepared in new and interesting ways.', featurePrice: '$29', featurename: 'Bacardi Mojitos, Prosecco, Bloody Marys & Caesars', isFav: false, byText: "RCBC", org: "",img:require('../../../assets/Adult.png') },
    { id: 2, date: 'Sat 09 Nov, 2019', name: 'Wild Game Night at Craft F&B Co.', time: '07:00pm to 10:00pm', location: 'Craft F&B Co., Marquee Plaza, West Bay Road', adult: '$29', children: '$15', perPerson: '$29', description: 'Wild Game Night. Selection of Bison, Boar, Venison prepared in new and interesting ways.', featurePrice: '$29', featurename: 'Bacardi Mojitos, Prosecco, Bloody Marys & Caesars', isFav: false, org: "The Wharf", byText: "",img:require('../../../assets/Adult.png') },
    { id: 3, date: 'Sat 09 Nov, 2019', name: 'Wild Game Night at Craft F&B Co.', time: '07:00pm to 10:00pm', location: 'Craft F&B Co., Marquee Plaza, West Bay Road', adult: '$29', children: '$15', perPerson: '$29', description: 'Wild Game Night. Selection of Bison, Boar, Venison prepared in new and interesting ways.', featurePrice: '$29', featurename: 'Bacardi Mojitos, Prosecco, Bloody Marys & Caesars', isFav: false, org: "The Wharf", byText: "",img:require('../../../assets/Adult.png') },
    { id: 4, date: 'Sat 09 Nov, 2019', name: 'Wild Game Night at Craft F&B Co.', time: '07:00pm to 10:00pm', location: 'Craft F&B Co., Marquee Plaza, West Bay Road', adult: '$29', children: '$15', perPerson: '$29', description: 'Wild Game Night. Selection of Bison, Boar, Venison prepared in new and interesting ways.', featurePrice: '$29', featurename: 'Bacardi Mojitos, Prosecco, Bloody Marys & Caesars', isFav: false, org: "The Wharf", byText: "",img:require('../../../assets/Adult.png') },
    { id: 5, date: 'Sat 09 Nov, 2019', name: 'Wild Game Night at Craft F&B Co.', time: '07:00pm to 10:00pm', location: 'Craft F&B Co., Marquee Plaza, West Bay Road', adult: '$29', children: '$15', perPerson: '$29', description: 'Wild Game Night. Selection of Bison, Boar, Venison prepared in new and interesting ways.', featurePrice: '$29', featurename: 'Bacardi Mojitos, Prosecco, Bloody Marys & Caesars', isFav: false, org: "The Wharf", byText: "",img:require('../../../assets/Adult.png') },
    { id: 6, date: 'Sat 09 Nov, 2019', name: 'Wild Game Night at Craft F&B Co.', time: '07:00pm to 10:00pm', location: 'Craft F&B Co., Marquee Plaza, West Bay Road', adult: '$29', children: '$15', perPerson: '$29', description: 'Wild Game Night. Selection of Bison, Boar, Venison prepared in new and interesting ways.', featurePrice: '$29', featurename: 'Bacardi Mojitos, Prosecco, Bloody Marys & Caesars', isFav: false, org: "The Wharf", byText: "",img:require('../../../assets/Adult.png') },
    { id: 7, date: 'Sat 09 Nov, 2019', name: 'Wild Game Night at Craft F&B Co.', time: '07:00pm to 10:00pm', location: 'Craft F&B Co., Marquee Plaza, West Bay Road', adult: '$29', children: '$15', perPerson: '$29', description: 'Wild Game Night. Selection of Bison, Boar, Venison prepared in new and interesting ways.', featurePrice: '$29', featurename: 'Bacardi Mojitos, Prosecco, Bloody Marys & Caesars', isFav: false, org: "The Wharf", byText: "",img:require('../../../assets/Adult.png') },
    { id: 8, date: 'Sat 09 Nov, 2019', name: 'Wild Game Night at Craft F&B Co.', time: '07:00pm to 10:00pm', location: 'Craft F&B Co., Marquee Plaza, West Bay Road', adult: '$29', children: '$15', perPerson: '$29', description: 'Wild Game Night. Selection of Bison, Boar, Venison prepared in new and interesting ways.', featurePrice: '$29', featurename: 'Bacardi Mojitos, Prosecco, Bloody Marys & Caesars', isFav: false, org: "The Wharf", byText: "",img:require('../../../assets/Adult.png') },
    { id: 9, date: 'Sat 09 Nov, 2019', name: 'Wild Game Night at Craft F&B Co.', time: '07:00pm to 10:00pm', location: 'Craft F&B Co., Marquee Plaza, West Bay Road', adult: '$29', children: '$15', perPerson: '$29', description: 'Wild Game Night. Selection of Bison, Boar, Venison prepared in new and interesting ways.', featurePrice: '$29', featurename: 'Bacardi Mojitos, Prosecco, Bloody Marys & Caesars', isFav: false, org: "The Wharf", byText: "",img:require('../../../assets/Adult.png') },
    { id: 10, date: 'Sat 09 Nov, 2019', name: 'Wild Game Night at Craft F&B Co.', time: '07:00pm to 10:00pm', location: 'Craft F&B Co., Marquee Plaza, West Bay Road', adult: '$29', children: '$15', perPerson: '$29', description: 'Wild Game Night. Selection of Bison, Boar, Venison prepared in new and interesting ways.', featurePrice: '$29', featurename: 'Bacardi Mojitos, Prosecco, Bloody Marys & Caesars', isFav: false, org: "The Wharf", byText: "",img:require('../../../assets/Adult.png') },
    { id: 11, date: 'Sat 09 Nov, 2019', name: 'Wild Game Night at Craft F&B Co.', time: '07:00pm to 10:00pm', location: 'Craft F&B Co., Marquee Plaza, West Bay Road', adult: '$29', children: '$15', perPerson: '$29', description: 'Wild Game Night. Selection of Bison, Boar, Venison prepared in new and interesting ways.', featurePrice: '$29', featurename: 'Bacardi Mojitos, Prosecco, Bloody Marys & Caesars', isFav: false, org: "The Wharf", byText: "",img:require('../../../assets/Adult.png') },
    { id: 12, date: 'Sat 09 Nov, 2019', name: 'Wild Game Night at Craft F&B Co.', time: '07:00pm to 10:00pm', location: 'Craft F&B Co., Marquee Plaza, West Bay Road', adult: '$29', children: '$15', perPerson: '$29', description: 'Wild Game Night. Selection of Bison, Boar, Venison prepared in new and interesting ways.', featurePrice: '$29', featurename: 'Bacardi Mojitos, Prosecco, Bloody Marys & Caesars', isFav: false, org: "The Wharf", byText: "",img:require('../../../assets/Adult.png') },
    { id: 13, date: 'Sat 09 Nov, 2019', name: 'Wild Game Night at Craft F&B Co.', time: '07:00pm to 10:00pm', location: 'Craft F&B Co., Marquee Plaza, West Bay Road', adult: '$29', children: '$15', perPerson: '$29', description: 'Wild Game Night. Selection of Bison, Boar, Venison prepared in new and interesting ways.', featurePrice: '$29', featurename: 'Bacardi Mojitos, Prosecco, Bloody Marys & Caesars', isFav: false, org: "The Wharf", byText: "",img:require('../../../assets/Adult.png') },
    { id: 14, date: 'Sat 09 Nov, 2019', name: 'Wild Game Night at Craft F&B Co.', time: '07:00pm to 10:00pm', location: 'Craft F&B Co., Marquee Plaza, West Bay Road', adult: '$29', children: '$15', perPerson: '$29', description: 'Wild Game Night. Selection of Bison, Boar, Venison prepared in new and interesting ways.', featurePrice: '$29', featurename: 'Bacardi Mojitos, Prosecco, Bloody Marys & Caesars', isFav: false, org: "The Wharf", byText: "",img:require('../../../assets/Adult.png') },
    { id: 15, date: 'Sat 09 Nov, 2019', name: 'Wild Game Night at Craft F&B Co.', time: '07:00pm to 10:00pm', location: 'Craft F&B Co., Marquee Plaza, West Bay Road', adult: '$29', children: '$15', perPerson: '$29', description: 'Wild Game Night. Selection of Bison, Boar, Venison prepared in new and interesting ways.', featurePrice: '$29', featurename: 'Bacardi Mojitos, Prosecco, Bloody Marys & Caesars', isFav: false, org: "The Wharf", byText: "",img:require('../../../assets/Adult.png') },
    { id: 16, date: 'Sat 09 Nov, 2019', name: 'Wild Game Night at Craft F&B Co.', time: '07:00pm to 10:00pm', location: 'Craft F&B Co., Marquee Plaza, West Bay Road', adult: '$29', children: '$15', perPerson: '$29', description: 'Wild Game Night. Selection of Bison, Boar, Venison prepared in new and interesting ways.', featurePrice: '$29', featurename: 'Bacardi Mojitos, Prosecco, Bloody Marys & Caesars', isFav: false, org: "The Wharf", byText: "",img:require('../../../assets/Adult.png') },
    { id: 17, date: 'Sat 09 Nov, 2019', name: 'Wild Game Night at Craft F&B Co.', time: '07:00pm to 10:00pm', location: 'Craft F&B Co., Marquee Plaza, West Bay Road', adult: '$29', children: '$15', perPerson: '$29', description: 'Wild Game Night. Selection of Bison, Boar, Venison prepared in new and interesting ways.', featurePrice: '$29', featurename: 'Bacardi Mojitos, Prosecco, Bloody Marys & Caesars', isFav: false, org: "The Wharf", byText: "",img:require('../../../assets/Adult.png') },
    { id: 18, date: 'Sat 09 Nov, 2019', name: 'Wild Game Night at Craft F&B Co.', time: '07:00pm to 10:00pm', location: 'Craft F&B Co., Marquee Plaza, West Bay Road', adult: '$29', children: '$15', perPerson: '$29', description: 'Wild Game Night. Selection of Bison, Boar, Venison prepared in new and interesting ways.', featurePrice: '$29', featurename: 'Bacardi Mojitos, Prosecco, Bloody Marys & Caesars', isFav: false, org: "The Wharf", byText: "" ,img:require('../../../assets/Adult.png') },
    { id: 19, date: 'Sat 09 Nov, 2019', name: 'Wild Game Night at Craft F&B Co.', time: '07:00pm to 10:00pm', location: 'Craft F&B Co., Marquee Plaza, West Bay Road', adult: '$29', children: '$15', perPerson: '$29', description: 'Wild Game Night. Selection of Bison, Boar, Venison prepared in new and interesting ways.', featurePrice: '$29', featurename: 'Bacardi Mojitos, Prosecco, Bloody Marys & Caesars', isFav: false, org: "The Wharf", byText: "" ,img:require('../../../assets/Adult.png') },
    { id: 20, date: 'Sat 09 Nov, 2019', name: 'Wild Game Night at Craft F&B Co.', time: '07:00pm to 10:00pm', location: 'Craft F&B Co., Marquee Plaza, West Bay Road', adult: '$29', children: '$15', perPerson: '$29', description: 'Wild Game Night. Selection of Bison, Boar, Venison prepared in new and interesting ways.', featurePrice: '$29', featurename: 'Bacardi Mojitos, Prosecco, Bloody Marys & Caesars', isFav: false, org: "The Wharf", byText: "" ,img:require('../../../assets/Adult.png') },
    { id: 21, date: 'Sat 09 Nov, 2019', name: 'Wild Game Night at Craft F&B Co.', time: '07:00pm to 10:00pm', location: 'Craft F&B Co., Marquee Plaza, West Bay Road', adult: '$29', children: '$15', perPerson: '$29', description: 'Wild Game Night. Selection of Bison, Boar, Venison prepared in new and interesting ways.', featurePrice: '$29', featurename: 'Bacardi Mojitos, Prosecco, Bloody Marys & Caesars', isFav: false, org: "The Wharf", byText: "" ,img:require('../../../assets/Adult.png') },
    { id: 22, date: 'Sat 09 Nov, 2019', name: 'Wild Game Night at Craft F&B Co.', time: '07:00pm to 10:00pm', location: 'Craft F&B Co., Marquee Plaza, West Bay Road', adult: '$29', children: '$15', perPerson: '$29', description: 'Wild Game Night. Selection of Bison, Boar, Venison prepared in new and interesting ways.', featurePrice: '$29', featurename: 'Bacardi Mojitos, Prosecco, Bloody Marys & Caesars', isFav: false, org: "The Wharf", byText: "" ,img:require('../../../assets/Adult.png') },
    { id: 23, date: 'Sat 09 Nov, 2019', name: 'Wild Game Night at Craft F&B Co.', time: '07:00pm to 10:00pm', location: 'Craft F&B Co., Marquee Plaza, West Bay Road', adult: '$29', children: '$15', perPerson: '$29', description: 'Wild Game Night. Selection of Bison, Boar, Venison prepared in new and interesting ways.', featurePrice: '$29', featurename: 'Bacardi Mojitos, Prosecco, Bloody Marys & Caesars', isFav: false, org: "The Wharf", byText: "" ,img:require('../../../assets/Adult.png') },
    { id: 24, date: 'Sat 09 Nov, 2019', name: 'Wild Game Night at Craft F&B Co.', time: '07:00pm to 10:00pm', location: 'Craft F&B Co., Marquee Plaza, West Bay Road', adult: '$29', children: '$15', perPerson: '$29', description: 'Wild Game Night. Selection of Bison, Boar, Venison prepared in new and interesting ways.', featurePrice: '$29', featurename: 'Bacardi Mojitos, Prosecco, Bloody Marys & Caesars', isFav: false, org: "The Wharf", byText: "" ,img:require('../../../assets/Adult.png') },
    { id: 25, date: 'Sat 09 Nov, 2019', name: 'Wild Game Night at Craft F&B Co.', time: '07:00pm to 10:00pm', location: 'Craft F&B Co., Marquee Plaza, West Bay Road', adult: '$29', children: '$15', perPerson: '$29', description: 'Wild Game Night. Selection of Bison, Boar, Venison prepared in new and interesting ways.', featurePrice: '$29', featurename: 'Bacardi Mojitos, Prosecco, Bloody Marys & Caesars', isFav: false, org: "The Wharf", byText: "" ,img:require('../../../assets/Adult.png') },
    { id: 26, date: 'Sat 09 Nov, 2019', name: 'Wild Game Night at Craft F&B Co.', time: '07:00pm to 10:00pm', location: 'Craft F&B Co., Marquee Plaza, West Bay Road', adult: '$29', children: '$15', perPerson: '$29', description: 'Wild Game Night. Selection of Bison, Boar, Venison prepared in new and interesting ways.', featurePrice: '$29', featurename: 'Bacardi Mojitos, Prosecco, Bloody Marys & Caesars', isFav: false, org: "The Wharf", byText: "" ,img:require('../../../assets/Adult.png') },
    { id: 27, date: 'Sat 09 Nov, 2019', name: 'Wild Game Night at Craft F&B Co.', time: '07:00pm to 10:00pm', location: 'Craft F&B Co., Marquee Plaza, West Bay Road', adult: '$29', children: '$15', perPerson: '$29', description: 'Wild Game Night. Selection of Bison, Boar, Venison prepared in new and interesting ways.', featurePrice: '$29', featurename: 'Bacardi Mojitos, Prosecco, Bloody Marys & Caesars', isFav: false, org: "The Wharf", byText: "" ,img:require('../../../assets/Adult.png') },
    { id: 28, date: 'Sat 09 Nov, 2019', name: 'Wild Game Night at Craft F&B Co.', time: '07:00pm to 10:00pm', location: 'Craft F&B Co., Marquee Plaza, West Bay Road', adult: '$29', children: '$15', perPerson: '$29', description: 'Wild Game Night. Selection of Bison, Boar, Venison prepared in new and interesting ways.', featurePrice: '$29', featurename: 'Bacardi Mojitos, Prosecco, Bloody Marys & Caesars', isFav: false, org: "The Wharf", byText: "" ,img:require('../../../assets/Adult.png') },
    { id: 29, date: 'Sat 09 Nov, 2019', name: 'Wild Game Night at Craft F&B Co.', time: '07:00pm to 10:00pm', location: 'Craft F&B Co., Marquee Plaza, West Bay Road', adult: '$29', children: '$15', perPerson: '$29', description: 'Wild Game Night. Selection of Bison, Boar, Venison prepared in new and interesting ways.', featurePrice: '$29', featurename: 'Bacardi Mojitos, Prosecco, Bloody Marys & Caesars', isFav: false, org: "The Wharf", byText: "" ,img:require('../../../assets/Adult.png') },
    { id: 30, date: 'Sat 09 Nov, 2019', name: 'Wild Game Night at Craft F&B Co.', time: '07:00pm to 10:00pm', location: 'Craft F&B Co., Marquee Plaza, West Bay Road', adult: '$29', children: '$15', perPerson: '$29', description: 'Wild Game Night. Selection of Bison, Boar, Venison prepared in new and interesting ways.', featurePrice: '$29', featurename: 'Bacardi Mojitos, Prosecco, Bloody Marys & Caesars', isFav: false, org: "The Wharf", byText: "" ,img:require('../../../assets/Adult.png') },
    { id: 31, date: 'Sat 09 Nov, 2019', name: 'Wild Game Night at Craft F&B Co.', time: '07:00pm to 10:00pm', location: 'Craft F&B Co., Marquee Plaza, West Bay Road', adult: '$29', children: '$15', perPerson: '$29', description: 'Wild Game Night. Selection of Bison, Boar, Venison prepared in new and interesting ways.', featurePrice: '$29', featurename: 'Bacardi Mojitos, Prosecco, Bloody Marys & Caesars', isFav: false, org: "The Wharf", byText: "" ,img:require('../../../assets/Adult.png') },
    { id: 32, date: 'Sat 09 Nov, 2019', name: 'Wild Game Night at Craft F&B Co.', time: '07:00pm to 10:00pm', location: 'Craft F&B Co., Marquee Plaza, West Bay Road', adult: '$29', children: '$15', perPerson: '$29', description: 'Wild Game Night. Selection of Bison, Boar, Venison prepared in new and interesting ways.', featurePrice: '$29', featurename: 'Bacardi Mojitos, Prosecco, Bloody Marys & Caesars', isFav: false, org: "The Wharf", byText: "" ,img:require('../../../assets/Adult.png') },
    { id: 33, date: 'Sat 09 Nov, 2019', name: 'Wild Game Night at Craft F&B Co.', time: '07:00pm to 10:00pm', location: 'Craft F&B Co., Marquee Plaza, West Bay Road', adult: '$29', children: '$15', perPerson: '$29', description: 'Wild Game Night. Selection of Bison, Boar, Venison prepared in new and interesting ways.', featurePrice: '$29', featurename: 'Bacardi Mojitos, Prosecco, Bloody Marys & Caesars', isFav: false, org: "The Wharf", byText: "" ,img:require('../../../assets/Adult.png') },
    { id: 34, date: 'Sat 09 Nov, 2019', name: 'Wild Game Night at Craft F&B Co.', time: '07:00pm to 10:00pm', location: 'Craft F&B Co., Marquee Plaza, West Bay Road', adult: '$29', children: '$15', perPerson: '$29', description: 'Wild Game Night. Selection of Bison, Boar, Venison prepared in new and interesting ways.', featurePrice: '$29', featurename: 'Bacardi Mojitos, Prosecco, Bloody Marys & Caesars', isFav: false, org: "The Wharf", byText: "" ,img:require('../../../assets/Adult.png') },
    { id: 35, date: 'Sat 09 Nov, 2019', name: 'Wild Game Night at Craft F&B Co.', time: '07:00pm to 10:00pm', location: 'Craft F&B Co., Marquee Plaza, West Bay Road', adult: '$29', children: '$15', perPerson: '$29', description: 'Wild Game Night. Selection of Bison, Boar, Venison prepared in new and interesting ways.', featurePrice: '$29', featurename: 'Bacardi Mojitos, Prosecco, Bloody Marys & Caesars', isFav: false, org: "The Wharf", byText: "" ,img:require('../../../assets/Adult.png') },
    { id: 36, date: 'Sat 09 Nov, 2019', name: 'Wild Game Night at Craft F&B Co.', time: '07:00pm to 10:00pm', location: 'Craft F&B Co., Marquee Plaza, West Bay Road', adult: '$29', children: '$15', perPerson: '$29', description: 'Wild Game Night. Selection of Bison, Boar, Venison prepared in new and interesting ways.', featurePrice: '$29', featurename: 'Bacardi Mojitos, Prosecco, Bloody Marys & Caesars', isFav: false, org: "The Wharf", byText: "" ,img:require('../../../assets/Adult.png') },
    { id: 37, date: 'Sat 09 Nov, 2019', name: 'Wild Game Night at Craft F&B Co.', time: '07:00pm to 10:00pm', location: 'Craft F&B Co., Marquee Plaza, West Bay Road', adult: '$29', children: '$15', perPerson: '$29', description: 'Wild Game Night. Selection of Bison, Boar, Venison prepared in new and interesting ways.', featurePrice: '$29', featurename: 'Bacardi Mojitos, Prosecco, Bloody Marys & Caesars', isFav: false, org: "The Wharf", byText: "" ,img:require('../../../assets/Adult.png') },
    { id: 38, date: 'Sat 09 Nov, 2019', name: 'Wild Game Night at Craft F&B Co.', time: '07:00pm to 10:00pm', location: 'Craft F&B Co., Marquee Plaza, West Bay Road', adult: '$29', children: '$15', perPerson: '$29', description: 'Wild Game Night. Selection of Bison, Boar, Venison prepared in new and interesting ways.', featurePrice: '$29', featurename: 'Bacardi Mojitos, Prosecco, Bloody Marys & Caesars', isFav: false, org: "The Wharf", byText: "" ,img:require('../../../assets/Adult.png') },
    { id: 39, date: 'Sat 09 Nov, 2019', name: 'Wild Game Night at Craft F&B Co.', time: '07:00pm to 10:00pm', location: 'Craft F&B Co., Marquee Plaza, West Bay Road', adult: '$29', children: '$15', perPerson: '$29', description: 'Wild Game Night. Selection of Bison, Boar, Venison prepared in new and interesting ways.', featurePrice: '$29', featurename: 'Bacardi Mojitos, Prosecco, Bloody Marys & Caesars', isFav: false, org: "The Wharf", byText: "" ,img:require('../../../assets/Adult.png') },
    { id: 40, date: 'Sat 09 Nov, 2019', name: 'Wild Game Night at Craft F&B Co.', time: '07:00pm to 10:00pm', location: 'Craft F&B Co., Marquee Plaza, West Bay Road', adult: '$29', children: '$15', perPerson: '$29', description: 'Wild Game Night. Selection of Bison, Boar, Venison prepared in new and interesting ways.', featurePrice: '$29', featurename: 'Bacardi Mojitos, Prosecco, Bloody Marys & Caesars', isFav: false, org: "The Wharf", byText: "" ,img:require('../../../assets/Adult.png') },
    { id: 41, date: 'Sat 09 Nov, 2019', name: 'Wild Game Night at Craft F&B Co.', time: '07:00pm to 10:00pm', location: 'Craft F&B Co., Marquee Plaza, West Bay Road', adult: '$29', children: '$15', perPerson: '$29', description: 'Wild Game Night. Selection of Bison, Boar, Venison prepared in new and interesting ways.', featurePrice: '$29', featurename: 'Bacardi Mojitos, Prosecco, Bloody Marys & Caesars', isFav: false, org: "The Wharf", byText: "" ,img:require('../../../assets/Adult.png') },
    { id: 42, date: 'Sat 09 Nov, 2019', name: 'Wild Game Night at Craft F&B Co.', time: '07:00pm to 10:00pm', location: 'Craft F&B Co., Marquee Plaza, West Bay Road', adult: '$29', children: '$15', perPerson: '$29', description: 'Wild Game Night. Selection of Bison, Boar, Venison prepared in new and interesting ways.', featurePrice: '$29', featurename: 'Bacardi Mojitos, Prosecco, Bloody Marys & Caesars', isFav: false, org: "The Wharf", byText: "" ,img:require('../../../assets/Adult.png') },
    { id: 43, date: 'Sat 09 Nov, 2019', name: 'Wild Game Night at Craft F&B Co.', time: '07:00pm to 10:00pm', location: 'Craft F&B Co., Marquee Plaza, West Bay Road', adult: '$29', children: '$15', perPerson: '$29', description: 'Wild Game Night. Selection of Bison, Boar, Venison prepared in new and interesting ways.', featurePrice: '$29', featurename: 'Bacardi Mojitos, Prosecco, Bloody Marys & Caesars', isFav: false, org: "The Wharf", byText: "" ,img:require('../../../assets/Adult.png') },
    { id: 44, date: 'Sat 09 Nov, 2019', name: 'Wild Game Night at Craft F&B Co.', time: '07:00pm to 10:00pm', location: 'Craft F&B Co., Marquee Plaza, West Bay Road', adult: '$29', children: '$15', perPerson: '$29', description: 'Wild Game Night. Selection of Bison, Boar, Venison prepared in new and interesting ways.', featurePrice: '$29', featurename: 'Bacardi Mojitos, Prosecco, Bloody Marys & Caesars', isFav: false, org: "The Wharf", byText: "" ,img:require('../../../assets/Adult.png') },
    { id: 45, date: 'Sat 09 Nov, 2019', name: 'Wild Game Night at Craft F&B Co.', time: '07:00pm to 10:00pm', location: 'Craft F&B Co., Marquee Plaza, West Bay Road', adult: '$29', children: '$15', perPerson: '$29', description: 'Wild Game Night. Selection of Bison, Boar, Venison prepared in new and interesting ways.', featurePrice: '$29', featurename: 'Bacardi Mojitos, Prosecco, Bloody Marys & Caesars', isFav: false, org: "The Wharf", byText: "" ,img:require('../../../assets/Adult.png') },
  ]

export default class Home extends Component {
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
        getServiceCall(webServiceEndpoint.GET_LIST,{'apikey':API_KEY}).then(response=>{
            LogDisplay("response",response);
        }).catch(error=>{
            LogDisplay("error",error);
        })
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

    onItemPress = (item) => {
        alert(JSON.stringify(item))
        NavigationActions.navigate('Detail')
    }

    renderItem = ({ item:item,index }) => {
        return(
          // <View style={styles.listItemContainer}>
          //   <Text style={{color: colors.COLOR_MAIN_TEXT,fontSize:sizeFont(3.5),textAlign:'center',paddingLeft:sizeWidth(1),paddingRight:sizeWidth(1)}}>{item.name}</Text>
          //   <Image style={{ height: sizeWidth(35), width: '70%',alignSelf:'center' }} resizeMode="contain" source={item.img}></Image>
          //   <Text style={{color:colors.COLOR_MAIN_TEXT,fontSize:sizeFont(2),paddingLeft:sizeWidth(1),paddingRight:sizeWidth(1),paddingTop:sizeWidth(2),paddingBottom:sizeWidth(1),textAlign:'center'}}>{item.date}</Text>
          //   <Text style={{color:colors.COLOR_MAIN_TEXT,fontSize:sizeFont(2),paddingLeft:sizeWidth(1),paddingRight:sizeWidth(1),textAlign:'center'}}>{item.time}</Text>
            <ArtCommon myIndex={index} myItem={item} onItemPress={() => this.onItemPress(item, index)} titleText={item.name} bottomTitle={item.date} bottomdesc={item.time} imgSource={item.img}/> 
          // </View>
       )
    }

    /* Render */
    render() {
        return(
            <View style={styles.container}>
                <View style={styles.flatlistView}>
                    <FlatList numColumns={2} data={artArray} renderItem={this.renderItem} />
                </View>
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
    container: { flex: 1 },
    listItemContainer: { flex: 0.5, marginTop: sizeWidth(3), marginLeft: sizeWidth(3),backgroundColor:colors.COLOR_BLUE,padding:sizeWidth(3)},
    flatlistView:{ flex: 1,backgroundColor: colors.COLOR_WHITE,paddingBottom: sizeWidth(3),paddingRight: sizeWidth(3), }
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

// export default connect()(Home);
