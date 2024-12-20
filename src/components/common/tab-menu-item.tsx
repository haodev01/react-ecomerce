import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {svgsNames} from '~/assets/svgs';
import {BorderDashItem} from '~/components/common/border-dash-item.tsx';
import {SvgItem} from '~/components/items';
import {navigate} from '~/routes/AppStackNavigator.tsx';
import {routesName} from '~/constants';

export const TabMenuItem = ({item, hasBorderBottom = false}: any) => {
  const handleOnPress = async () => {
    if (item?.action === 'logout') {
      await navigate(routesName.HomeScreen);
    } else {
      await navigate(item.route);
    }
  };

  return (
    <TouchableOpacity className="w-full" onPress={handleOnPress}>
      <View className="w-full py-4 px-4 flex-row items-center justify-between">
        <SvgItem name={item.icon} />
        <View className="flex-1 mx-3 flex-row items-center">
          <Text className={'text-base text-222'}>{item.label}</Text>
        </View>
        {item.route && <SvgItem name={svgsNames.ArrowRight} />}
      </View>
      {hasBorderBottom && <BorderDashItem />}
    </TouchableOpacity>
  );
};
