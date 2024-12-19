import {
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

const Stack = createNativeStackNavigator();

export type AllNavigatorParams = {
  LoginScreen: undefined;
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
};
export type CommonNavigatorParams = {
  LoginScreen: undefined;
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
};
const navigationRef = createNavigationContainerRef<AllNavigatorParams>();

export const AppStackNavigator = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName={routesName.TabHome}
        screenOptions={{
          headerShown: false,
          animation: 'ios_from_right',
        }}>
        <Stack.Screen name={routesName.TabHome} component={TabHome} />
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export function timeout(ms: number): Promise<void> {
  return new Promise(r => setTimeout(r, ms));
}

export function navigate<K extends keyof AllNavigatorParams>(
  name: any,
  params?: AllNavigatorParams[K],
) {
  if (navigationRef.isReady()) {
    return Promise.race([
      new Promise<void>(resolve => {
        const handler = () => {
          resolve();
          navigationRef.removeListener('state', handler);
        };
        navigationRef.addListener('state', handler);

        // @ts-ignore I dont know what would make typescript happy but I have a life -prf
        navigationRef.navigate(name, params);
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
