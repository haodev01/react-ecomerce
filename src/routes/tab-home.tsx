import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '~/screens/home/home-screen.tsx';
import {TabBarMenu} from '~/routes/tab-bar-menu.tsx';
import TourScreen from '~/screens/tour/tour-screen.tsx';
import PostScreen from '~/screens/post/post-screen.tsx';
import ProfileScreen from '~/screens/profile/profile-screen.tsx';
const Tab = createBottomTabNavigator();

export const TabHome = () => {
  return (
    <Tab.Navigator
      tabBar={(props: any) => <TabBarMenu {...props} />}
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="TourScreen" component={TourScreen} />
      <Tab.Screen name="PostScreen" component={PostScreen} />
      <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
    </Tab.Navigator>
  );
};
