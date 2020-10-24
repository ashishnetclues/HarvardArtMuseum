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
