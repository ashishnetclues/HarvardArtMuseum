import analytics from '@react-native-firebase/analytics';

export const TrackScreen = async function (name){
    console.log("PAGENAME::::",name)
    // await firebase.analytics().setCurrentScreen(name,name)
    // await analytics().setCurrentScreen({ // depricated 
    //     name,name
    //   });
      await analytics().logScreenView({
        name,name
      });
}

export const pageName = {
    SPLASH_SCREEN :'Splash',
    HOME_SCREEN :'Home',
    LOGIN_SCREEN:'Login',
    ABOUTUS_SCREEN:'AboutUs',
    CONTACTUS_SCREEN:'ContactUs',
   
}