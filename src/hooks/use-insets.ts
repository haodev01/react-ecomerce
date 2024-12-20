import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Dimensions, StyleSheet} from 'react-native';
import {useEffect, useState} from 'react';

export const useInsets = () => {
  const insets = useSafeAreaInsets();
  const {width: widthScreen, height: heightScreen} = Dimensions.get('window');
  const {top, bottom: bottomInsets, left, right} = insets;
  const [bottom, setBottom] = useState(bottomInsets);

  useEffect(() => {
    setBottom(Math.max(bottom, bottomInsets));
  }, [bottomInsets]);

  const styleInsets = StyleSheet.create({
    ptIn: {
      paddingTop: top,
    },
    ptTop: {
      paddingTop: top,
    },
    py: {
      paddingTop: top,
      paddingBottom: bottom,
    },
    px: {
      paddingLeft: left,
      paddingRight: right,
    },
    pt: {
      paddingTop: Math.max(top, 8),
    },
    ptTop100: {
      paddingTop: top + 100,
    },
    ptTop102: {
      paddingTop: top + 102,
    },
    ptTop56: {
      paddingTop: top + 56,
    },
    topIn56: {
      top: top + 56,
    },
    minusTop: {
      top: -top,
    },
    hTop56: {
      height: top + 56,
    },
    hTop100: {
      height: top + 100,
    },
    minusMtTop: {
      marginTop: -top,
    },
    minusTop56: {
      top: -(top + 56),
    },
    minusTop100: {
      top: -(top + 100),
    },
    pb100: {
      paddingBottom: bottom + 100,
    },
    pb: {
      paddingBottom: bottom,
    },
    hInsetBottom56: {
      height: bottom + 56,
    },
    pt80: {
      paddingTop: top + 80,
    },
    pb80: {
      paddingBottom: bottom + 80,
    },
    top: {
      top,
    },
    bottom: {
      bottom,
    },
    left: {
      left,
    },
    left30: {
      left: left + 30,
    },
    right: {
      right,
    },
    right30: {
      right: right + 30,
    },
    top24: {
      top: top + 24,
    },
    bottom16: {
      bottom: bottom + 16,
    },
    bottom20: {
      bottom: bottom + 20,
    },
    bottom24: {
      bottom: bottom + 24,
    },
    wScreen: {
      width: widthScreen,
    },
    hScreen: {
      height: heightScreen,
    },
    hScreenMinusT56: {
      height: heightScreen - (top + 56),
    },
    gap12: {
      gap: 12,
    },
  });

  const styles = StyleSheet.create({
    aspectRatio_360_640: {
      aspectRatio: 360 / 640,
    },
    text_13_16: {
      fontSize: 13,
      lineHeight: 16,
    },
    cWhite: {
      color: '#fff',
    },
    c999: {
      color: '#999999',
    },
    aspectRatioPlayer: {
      aspectRatio: 16 / 9,
    },
  });

  return {
    styleInsets,
    widthScreen,
    heightScreen,
    styles,
    top,
    bottom,
    left,
    right,
  };
};
