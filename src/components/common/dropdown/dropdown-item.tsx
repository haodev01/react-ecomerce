import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {svgsNames} from '~/assets/svgs';
import {SvgItem} from '~/components/items';
import {ImagesStatic} from '~/assets/images';

interface Props {
  item: any;
  hasBorderBottom?: boolean;
  handleSelect: any;
  isSelected?: boolean;
}
export const DropdownOptionItem = React.memo(
  ({
    item,
    hasBorderBottom = true,
    isSelected,
    handleSelect = () => {},
  }: Props) => (
    <TouchableOpacity
      className="w-full flex-column"
      onPress={() => handleSelect(item)}>
      <View className="flex-row h-[56] items-center justify-center">
        <Text className="flex-1 text-[16px] text-222 items-center ">
          {item.label}
        </Text>
        <View>
          {isSelected && <SvgItem name={svgsNames.IconCheckCircle} />}
        </View>
      </View>
      <Image
        source={ImagesStatic.CardLine}
        className={`'w-full' ${hasBorderBottom && 'h-[2]'}`}
      />
    </TouchableOpacity>
  ),
);
