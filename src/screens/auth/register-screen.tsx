import {Text, TextInput, View} from 'react-native';
import {AppButton} from '~/components/common';
import {useLogin} from '~/hooks/use-login.tsx';
import {useRegister} from '~/hooks/use-register.tsx';

const RegisterScreen = () => {
  const {
    setEmail,
    setPassword,
    setFirstName,
    setLastName,
    messageError,
    handleRegister,
  } = useRegister();
  return (
    <View className=" flex-1 min-h-screen flex items-center justify-center px-4 ">
      <View className="mb-4 w-full">
        <Text className="text-base mb-1">First Name</Text>
        <TextInput
          onChangeText={value => setFirstName(value)}
          className="rounded-md border border-1  w-full border-gray-300 px-4"
          placeholder="First Name..."
        />
        {!!messageError.firstName && (
          <Text className="text-red-500 mt-1">{messageError.firstName}</Text>
        )}
      </View>
      <View className="mb-4 w-full ">
        <Text className="text-base mb-1">Last Name</Text>
        <TextInput
          onChangeText={value => setLastName(value)}
          className="rounded-md border border-1  w-full border-gray-300 px-4"
          placeholder="Last Name..."
        />
        {!!messageError.lastName && (
          <Text className="text-red-500 mt-1">{messageError.lastName}</Text>
        )}
      </View>
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
      <AppButton label="Register" onPress={handleRegister} />
    </View>
  );
};
export default RegisterScreen;
