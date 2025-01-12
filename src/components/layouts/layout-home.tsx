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
import {SvgItem} from '~/components/items';
import {AvatarItem} from '~/components/items/avatar-item.tsx';
import {routesName} from '~/constants';
import {useAuth} from '~/hooks/use-auth.tsx';
import {useInsets} from '~/hooks/use-insets.ts';
import {navigate} from '~/routes/AppStackNavigator.tsx';
import {formatCurrency} from '../../helpers';

export const LayoutHome = ({children}: any) => {
  const {styleInsets, bottom} = useInsets();

  const {isLogged, account} = useAuth();

  const isRouteHome = true;

  const gotoProfile = async () => {
    await navigate(routesName.HomeScreen);
  };

  const styles = StyleSheet.create({
    pbHome: {
      paddingBottom: Math.max(bottom, 16) + 84,
    },
  });
  console.log({account});

  const labelUser = isLogged ? account?.username : 'Guest';

  return (
    <View className="w-full flex-1 relative" style={[styleInsets.pt]}>
      <View className="w-full h-full absolute" style={styleInsets.minusTop}>
        <View className="w-full h-full bg-primary" />
      </View>
      <View className="w-full px-4 h-11 flex-row items-center justify-between">
        {account?.avatar ? (
          <Image
            source={{uri: account?.avatar}}
            className="w-10 h-10 rounded-full"
            width={40}
            height={40}
          />
        ) : (
          <AvatarItem width={40} />
        )}
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
            {isLogged && (
              <View>
                <Text className="font-bold text-base text-white">
                  {formatCurrency(account?.availableBalance)}
                </Text>
              </View>
            )}
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
                Dai
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
