import {
  CommonActions,
  createNavigationContainerRef,
  NavigationContainer,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '~/screens/auth/login-screen.tsx';
import RegisterScreen from '~/screens/auth/register-screen.tsx';
import HomeScreen from '~/screens/home/home-screen.tsx';
import ConfirmOtpScreen from '~/screens/auth/confirm-otp.tsx';
import ForgotPassword from '~/screens/auth/forgot-password.tsx';
import {TabHome} from '~/routes/tab-home.tsx';
import {routesName} from '~/constants';
import PostDetailScreen from '~/screens/post/post=detail-screen.tsx';
import {CommentDetailScreen} from '~/screens/post/comment-detail.tsx';
import TourDetailScreen from '~/screens/tour/tour-detail-screen.tsx';
import TourScreen from '~/screens/tour/tour-screen.tsx';
import React from 'react';
import CartScreen from '~/screens/cart/cart-screen.tsx';
import CreatePostScreen from '~/screens/post/create-post-screen.tsx';
import ListPostUserScreen from '../screens/post/list-post-user';
import EditPostScreen from '../screens/post/edit-post-screen';
import PostUserScreen from '../screens/post/post-user-screen';
import ListTourUserScreen from '~/screens/tour/list-tour-user-screen';
import OrderDetailScreen from '~/screens/orders/order-detail';

const Stack = createNativeStackNavigator();

export type AllNavigatorParams = {
  LoginScreen: {
    screen?: string;
    id?: string;
  };
  RegisterScreen: undefined;
  HomeScreen: undefined;
  ConfirmOtpScreen: {
    email?: string;
    type?: string;
  };
  ForgotPassword: undefined;
  TabHome: undefined;
  PostDetailScreen: {
    id: string;
  };
  TourDetailScreen: {
    id: string;
  };
  CommentDetailScreen: {
    id: string;
    title: string;
  };
  ListTourUserScreen: undefined;
  OrderDetailScreen: {
    id: string;
  };
};
export type CommonNavigatorParams = {
  LoginScreen: {
    screen?: string;
    id?: string;
  };
  RegisterScreen: undefined;
  HomeScreen: undefined;
  ConfirmOtpScreen: {
    email?: string;
    type?: string;
  };
  ForgotPassword: undefined;
  TabHome: undefined;
  PostDetailScreen: {
    id: string;
  };
  TourDetailScreen: {
    id: string;
  };
  CommentDetailScreen: {
    id: string;
    title: string;
  };
  EditPostScreen: {
    id: string;
  };
  PostUserScreen: undefined;
  ListTourUserScreen: undefined;
  OrderDetailScreen: {
    id: string;
  };
};
const navigationRef = createNavigationContainerRef<AllNavigatorParams>();

export const AppStackNavigator = () => {
  // @ts-ignore
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName={routesName.TabHome}
        screenOptions={{
          headerShown: false,
          animation: 'ios_from_right',
        }}>
        <Stack.Screen name={routesName.TabHome} component={TabHome} />
        <Stack.Screen name="TourScreen" component={TourScreen} />
        <Stack.Screen name={routesName.LoginScreen} component={LoginScreen} />
        <Stack.Screen
          name={routesName.RegisterScreen}
          component={RegisterScreen}
        />
        <Stack.Screen name={routesName.HomeScreen} component={HomeScreen} />
        <Stack.Screen
          name={routesName.ConfirmOtpScreen}
          component={ConfirmOtpScreen}
        />
        <Stack.Screen
          name={routesName.ForgotPassword}
          component={ForgotPassword}
        />
        <Stack.Screen
          name={routesName.PostDetailScreen}
          component={PostDetailScreen}
        />
        <Stack.Screen
          name={routesName.CommentDetailScreen}
          component={CommentDetailScreen}
        />
        <Stack.Screen
          name={routesName.TourDetailScreen}
          component={TourDetailScreen}
        />
        <Stack.Screen name={routesName.CartScreen} component={CartScreen} />
        <Stack.Screen
          name={routesName.CreatePostScreen}
          component={CreatePostScreen}
        />
        <Stack.Screen
          name={routesName.ListPostUserScreen}
          component={ListPostUserScreen}
        />
        <Stack.Screen
          name={routesName.EditPostScreen}
          component={EditPostScreen}
        />
        <Stack.Screen
          name={routesName.PostUserScreen}
          component={PostUserScreen}
        />
        <Stack.Screen
          name={routesName.ListTourUserScreen}
          component={ListTourUserScreen}
        />
        <Stack.Screen
          name={routesName.OrderDetailScreen}
          component={OrderDetailScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export function timeout(ms: number): Promise<void> {
  return new Promise(r => setTimeout(r, ms));
}

function reset(): Promise<void> {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: routesName.TabHome}],
      }),
    );
    return Promise.race([
      timeout(1e3),
      new Promise<void>(resolve => {
        const handler = () => {
          resolve();
          navigationRef.removeListener('state', handler);
        };
        navigationRef.addListener('state', handler);
      }),
    ]);
  } else {
    return Promise.resolve();
  }
}

export function navigate<K extends keyof AllNavigatorParams>(
  name: any,
  params?: AllNavigatorParams[K],
  isReplace = false,
) {
  if (navigationRef.isReady()) {
    return Promise.race([
      new Promise<void>(async resolve => {
        const handler = () => {
          resolve();
          navigationRef.removeListener('state', handler);
        };
        navigationRef.addListener('state', handler);

        // @ts-ignore I dont know what would make typescript happy but I have a life -prf
        if (isReplace) {
          await reset();
          navigationRef.navigate(name, params);
        } else {
          navigationRef.navigate(name, params);
        }
      }),
      timeout(1e3),
    ]);
  }
  return Promise.resolve();
}
export const goBack = () => {
  navigationRef.goBack();
};
export function getCurrentRouteName() {
  if (navigationRef.isReady()) {
    return navigationRef.getCurrentRoute()?.name;
  } else {
    return '';
  }
}
