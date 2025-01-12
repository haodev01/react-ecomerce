import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {AppButton} from '~/components/common';
import {useLogin} from '~/hooks/use-login.tsx';
import {LayoutAuth} from '~/components/layouts/layout-auth.tsx';
import {
  CommonNavigatorParams,
  goBack,
  navigate,
} from '~/routes/AppStackNavigator.tsx';
import {routesName} from '~/constants';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';

type Props = NativeStackScreenProps<CommonNavigatorParams, 'LoginScreen'>;
const LoginScreen = (props: Props) => {
  const {route} = props;

  const screen = route.params?.screen ?? '';
  const id = route.params?.id ?? '';

  const {email, password, setEmail, setPassword, messageError, handleLogin} =
    useLogin(screen, id);
  return (
    <LayoutAuth onBack={goBack}>
      <View className=" flex-1 min-h-screen px-4 mt-4 ">
        <Text className="text-2xl font-bold">Đăng nhập tài khoản</Text>
        <Text className="text-md mb-6">
          Vui lòng nhập thông tin để tiếp tục
        </Text>
        <View className="mb-4 w-full">
          <Text className="text-base mb-1">Email</Text>
          <TextInput
            value={email}
            onChangeText={value => setEmail(value)}
            className="rounded-md border border-1  w-full border-gray-300 px-4"
            placeholder="Email..."
          />
          {!!messageError.email && (
            <Text className="text-red-500 mt-1">{messageError.email}</Text>
          )}
        </View>
        <View className="mb-4 w-full">
          <Text className="text-base mb-1">Mật khẩu</Text>
          <TextInput
            value={password}
            onChangeText={value => setPassword(value)}
            className="rounded-md border border-1  w-full border-gray-300 px-4"
            placeholder="Mật khẩu..."
          />
          {!!messageError.password && (
            <Text className="text-red-500  mt-1">{messageError.password}</Text>
          )}
        </View>
        <TouchableOpacity
          className="mb-6 text-right"
          onPress={() => navigate(routesName.ForgotPassword)}>
          <Text className="text-right text-base font-medium">
            Quên mật khẩu
          </Text>
        </TouchableOpacity>
        <AppButton label="Đăng nhập" onPress={handleLogin} />
        <View className="mt-6 flex items-center justify-center flex-row w-full gap-x-1">
          <Text>Bạn chưa có tài khoản?</Text>
          <TouchableOpacity onPress={() => navigate(routesName.RegisterScreen)}>
            <Text className="text-primary text-center">Đăng ký ngay</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LayoutAuth>
  );
};
export default LoginScreen;
