import { Platform } from 'react-native';

export const IS_IOS = Platform.OS === 'ios';
export const IS_ANDROID = Platform.OS === 'android';
export const IS_WEB = Platform.OS === 'web';
export const IS_MOBILE = IS_IOS || IS_ANDROID;
