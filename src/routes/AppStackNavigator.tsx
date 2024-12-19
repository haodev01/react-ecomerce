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
};
const navigationRef = createNavigationContainerRef<AllNavigatorParams>();

export const AppStackNavigator = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{
          headerShown: false,
          animation: 'ios_from_right',
        }}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ConfirmOtpScreen" component={ConfirmOtpScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export function timeout(ms: number): Promise<void> {
  return new Promise(r => setTimeout(r, ms));
}

export function navigate<K extends keyof AllNavigatorParams>(
  name: K,
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
