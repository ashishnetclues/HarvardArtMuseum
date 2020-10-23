import { Platform, StatusBar, Dimensions } from "react-native";
import { isIPhoneX } from "../util/Device";
import { sizeWidth } from "../util/Size";
const STATUS_BAR_IOS_HEIGHT = isIPhoneX() ? 30 : 20;
export const STATUS_BAR_HEIGHT =
  Platform.OS === "ios" ? STATUS_BAR_IOS_HEIGHT : StatusBar.currentHeight;
export const BOTTOM_BAR_HEIGHT = isIPhoneX() ? 34 : 0;
export const TOOL_BAR_HEIGHT = sizeWidth(12) + STATUS_BAR_HEIGHT;
export const ONE_COUNT_PLAY = 30 * 1000;
export const DEFAULT_VOLUME = 3 / 5;
export const MIN_VOLUME = -6;
export const MAX_VOLUME = 6;
export const ONE_STEP_VOLUME = 1 / 150;
export const DEVICE_WIDTH = Dimensions.get("window").width;
export const DEVICE_HEIGHT = Dimensions.get("window").height;
const statusBarHeight = Platform.OS === "ios" ? (isIPhoneX() ? 44 : 20) : 0;
const navBarHeight = Platform.OS === "ios" ? 44 : 56;
export const headerHeight = statusBarHeight + navBarHeight;// + safeAreaHeight + 49; 

export const convertVolume = volume => {
  return precisionRound((volume - DEFAULT_VOLUME) * 15, 1);
};

//FIX ME CHECK BEFORE GO LIVE
export const TEST_EMAILID = "demo1.netclues@gmail.com"
export const IOS_CLIENT_ID = "782794250254-p8a3o6vvl790hmnjlca0cohulaes9em0.apps.googleusercontent.com"
export const GOOGLE_WEBID = "466267934046-q1rf3mot6oeuq67km1kq4ml5748prffi.apps.googleusercontent.com"

export const SIDEMENUDATA = [
  {
    id: 0,
    title: 'Home',
    icon: require("../../res/images/home.png")
  },
  {
    id:1,
    title: 'Notification',
    icon: require("../../res/images/notification.png")
  },
  {
    id:2,
    title: 'Contact Us',
    icon: require("../../res/images/contact-us.png")
  },
  {
    id:3,
    title: 'About Us',
    icon: require("../../res/images/about-us.png")
  },
  
];

export const HOMEDATA = [
  {
    id: 0,
    time:'1h ago',
    title: 'Form',
    subtitle: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of  De Finibus Bonorum et Malorum for use in a type specimen book.',
    icon: require("../../res/images/home_active.png")
  },
  {
    id:1,
    time:'7h ago',
    title: 'Visa',
    subtitle: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of  De Finibus Bonorum et Malorum for use in a type specimen book.',
    icon: require("../../res/images/bell.png")
  },
  {
    id:2,
    time:'2days',
    title: 'Citizenship',
    subtitle: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of  De Finibus Bonorum et Malorum for use in a type specimen book.',
    icon: require("../../res/images/box.png")
  },
  {
      id:3,
      time:'1 week',
      title: 'Contact Us',
      subtitle: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of  De Finibus Bonorum et Malorum for use in a type specimen book.',
      icon: require("../../res/images/box.png")
    },
    {
      id:3,
      time:'1 week',
      title: 'Contact Us',
      subtitle: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of  De Finibus Bonorum et Malorum for use in a type specimen book.',
      icon: require("../../res/images/box.png")
    },
    {
      id:3,
      time:'1 week',
      title: 'Contact Us',
      subtitle: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of  De Finibus Bonorum et Malorum for use in a type specimen book.',
      icon: require("../../res/images/box.png")
    },
    {
      id:3,
      time:'1 week',
      title: 'Contact Us',
      subtitle: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of  De Finibus Bonorum et Malorum for use in a type specimen book.',
      icon: require("../../res/images/box.png")
    },
    {
      id:3,
      time:'1 week',
      title: 'Contact Us',
      subtitle: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of  De Finibus Bonorum et Malorum for use in a type specimen book.',
      icon: require("../../res/images/box.png")
    },
];