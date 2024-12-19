import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {svgsNames} from '~/assets/svgs';
import {ImagesStatic} from '~/assets/images';
import {useInsets} from '~/hooks/use-insets.ts';
import {navigate} from '~/routes/AppStackNavigator.tsx';
import {routesName} from '~/constants';
import {SvgItem} from '~/components/items';
import {AvatarItem} from '~/components/items/avatar-item.tsx';

export const LayoutHome = ({children}: any) => {
  const {styleInsets, bottom} = useInsets();

  const isRouteHome = true;

  const gotoNotification = async () => {
    await navigate(routesName.HomeScreen);
  };

  const gotoProfile = async () => {
    await navigate(routesName.HomeScreen);
  };

  const styles = StyleSheet.create({
    pbHome: {
      paddingBottom: Math.max(bottom, 16) + 84,
    },
  });

  const labelUser = 'haonc';

  return (
    <View className="w-full flex-1 relative" style={[styleInsets.pt]}>
      <View className="w-full h-full absolute" style={styleInsets.minusTop}>
        <View className="w-full h-full bg-primary" />
      </View>
      <View className="w-full px-4 h-11 flex-row items-center justify-between">
        <AvatarItem width={36} />
        {isRouteHome ? (
          <View className="flex-1 flex-row items-center justify-between">
            <View className="flex-1 flex-col justify-start ml-2">
              <Text className="text-xs text-white">Xin chào</Text>
              <Text
                className="text-base text-white font-semibold"
                numberOfLines={1}>
                {labelUser}
              </Text>
            </View>
          </View>
        ) : (
          <TouchableOpacity
            className="flex-1 flex-row items-center justify-between"
            onPress={gotoProfile}>
            <View className="flex-1 flex-col justify-start ml-2">
              <Text
                className="text-[22px] text-white font-semibold"
                numberOfLines={1}>
                {labelUser}
              </Text>
              <Text className="text-xs text-white" numberOfLines={1}>
                haonc
              </Text>
            </View>
            <View>
              <SvgItem name={svgsNames.ArrowRightWhite} />
            </View>
          </TouchableOpacity>
        )}
      </View>
      <View className="w-full flex-1 bg-f0f rounded-t-3xl overflow-hidden mt-[19] pb-10">
        <ScrollView
          className="w-full"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.pbHome}>
          {children}
        </ScrollView>
      </View>
    </View>
  );
};