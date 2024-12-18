import {OtpInput} from 'react-native-otp-entry';
import {Text, View} from 'react-native';
import {useState} from 'react';
import {AppButton} from '~/components/common';
import {navigate} from '~/routes/AppStackNavigator.tsx';

const ConfirmOtpScreen = () => {
  const [otp, setOtp] = useState('');

  const handleConfirmOtp = async () => {
    await navigate('HomeScreen');
  };
  return (
    <View className=" flex-1 min-h-screen flex items-center justify-center px-4 ">
      <Text className="text-base mb-4">
        Vui lòng nhập OTP bạn nhận được qua email
      </Text>
      <OtpInput
        numberOfDigits={4}
        focusColor="#1677ff"
        placeholder="****"
        onTextChange={value => {
          setOtp(value);
        }}
        theme={{
          containerStyle: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 12,
          },
          pinCodeContainerStyle: {
            width: 60,
          },
        }}
      />
      <View className="mt-4 w-full">
        <AppButton
          disabled={otp.length < 4}
          label="Xác nhận"
          onPress={handleConfirmOtp}
        />
      </View>
    </View>
  );
};

export default ConfirmOtpScreen;
