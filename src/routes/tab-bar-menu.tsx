import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useInsets} from '~/hooks/use-insets.ts';
import LinearGradient from 'react-native-linear-gradient';
import {TabBarMenuItem} from '~/routes/tab-bar-menu-item.tsx';
import {getCurrentRouteName} from '~/routes/AppStackNavigator.tsx';
import {routesName} from '~/constants';

export const TabBarMenu = ({state, navigation}: any) => {
  const {styleInsets} = useInsets();

  const onPressTab = (index: any) => {
    const route = state.routes[index];
    const isFocused = state.index === index;
    const event = navigation.emit({
      type: 'tabPress',
      target: route.key,
      canPreventDefault: true,
    });
    if (!isFocused && !event.defaultPrevented) {
      navigation.navigate(route.name, route.params);
    }
  };

  const onLongPressTab = (index: any) => {
    const route = state.routes[index];
    navigation.emit({
      type: 'tabLongPress',
      target: route.key,
    });
  };

  const styles = StyleSheet.create({
    shadowNavBar: {
      backgroundColor: '#fff',
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 16},
      shadowOpacity: 0.15,
      shadowRadius: 16,
      elevation: 16,
    },
  });

  return (
    <View className="w-full relative h-0">
      <View className="w-full absolute bottom-6">
        <LinearGradient
          colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.1)']}
          className="w-full h-full absolute top-0 bottom-0"
        />
        <View className="w-full" style={styleInsets.pb}>
          <View
            style={styles.shadowNavBar}
            className="w-max mx-auto flex-row items-center px-4 h-[64] rounded-full">
            <TabBarMenuItem
              name="Home"
              isFocus={state.index === 0}
              onPress={() => onPressTab(0)}
              onLongPress={() => onLongPressTab(0)}
            />
            <TabBarMenuItem
              name="Home"
              isFocus={state.index === 1}
              onPress={() => onPressTab(1)}
              onLongPress={() => onLongPressTab(1)}
            />
            <TabBarMenuItem
              name="Profile"
              isFocus={state.index === 2}
              onPress={() => onPressTab(2)}
              onLongPress={() => onLongPressTab(2)}
            />
          </View>
        </View>
      </View>
    </View>
  );
};
