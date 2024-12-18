import {Image, Text, TextInput, View} from 'react-native';
import {AppButton} from '~/components/common';
import {useLogin} from '~/hooks/use-login.tsx';

const LoginScreen = () => {
  const {setEmail, setPassword, messageError, handleLogin} = useLogin();
  return (
    <View className=" flex-1 min-h-screen flex items-center justify-center px-4 ">
      <Image
        className="rounded-full"
        width={80}
        height={80}
        source={{
          uri: 'https://static.vecteezy.com/system/resources/previews/026/543/786/non_2x/tour-and-travel-logo-icon-illustration-vector.jpg',
        }}
      />
      <View className="mb-4 w-full">
        <Text className="text-base mb-1">Email</Text>
        <TextInput
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
          onChangeText={value => setPassword(value)}
          className="rounded-md border border-1  w-full border-gray-300 px-4"
          placeholder="Mật khẩu..."
        />
        {!!messageError.password && (
          <Text className="text-red-500  mt-1">{messageError.password}</Text>
        )}
      </View>
      <AppButton label="Login" onPress={handleLogin} />
    </View>
  );
};
export default LoginScreen;
