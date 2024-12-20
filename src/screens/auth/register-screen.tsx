import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {AppButton} from '~/components/common';
import {useRegister} from '~/hooks/use-register.tsx';
import {LayoutAuth} from '~/components/layouts/layout-auth.tsx';
import {navigate} from '~/routes/AppStackNavigator.tsx';
import {routesName} from '~/constants';

const RegisterScreen = () => {
  const {
    username,
    email,
    password,
    setEmail,
    setPassword,
    setUserName,
    messageError,
    handleRegister,
  } = useRegister();
  return (
    <LayoutAuth onBack={() => navigate(routesName.TabHome)}>
      <View className=" flex-1 min-h-screen flex  px-4 mt-4 ">
        <Text className="text-2xl font-bold">Đăng ký tài khoản</Text>
        <Text className="text-md mb-6">
          Vui lòng nhập thông tin để tiếp tục
        </Text>
        <View className="mb-4 w-full">
          <Text className="text-base mb-1">Tên đăng nhập</Text>
          <TextInput
            value={username}
            onChangeText={value => setUserName(value)}
            className="rounded-md border border-1  w-full border-gray-300 px-4"
            placeholder="Tên đăng nhập ..."
          />
          {!!messageError.username && (
            <Text className="text-red-500 mt-1">{messageError.username}</Text>
          )}
        </View>
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
        <AppButton label="Đăng ký" onPress={handleRegister} />
        <View className="mt-6 flex items-center justify-center flex-row w-full gap-x-1">
          <Text>Bạn đã có tài khoản?</Text>
          <TouchableOpacity onPress={() => navigate(routesName.LoginScreen)}>
            <Text className="text-primary text-center">Đăng nhập ngay</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LayoutAuth>
  );
};
export default RegisterScreen;
