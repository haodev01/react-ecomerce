import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {SvgItem as SvgIcon} from '~/components/items/svg-item.tsx';

interface TabBarMenuItemProps {
  name: string;
  onPress: any;
  onLongPress?: any;
  isFocus?: boolean;
}

export const TabBarMenuItem = (props: TabBarMenuItemProps) => {
  const {
    name = 'Home',
    isFocus = false,
    onPress = () => {},
    onLongPress = () => {},
  } = props;
  return (
    <TouchableOpacity
      className="w-[80] h-[64] flex-col items-center justify-center"
      onPress={onPress}
      onLongPress={onLongPress}>
      <View className="w-[30] h-[30]">
        <SvgIcon
          name={isFocus ? `Icon${name}Active` : `Icon${name}`}
          width={30}
          height={30}
        />
      </View>
    </TouchableOpacity>
  );
};
