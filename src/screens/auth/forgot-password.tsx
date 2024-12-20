import {OtpInput} from 'react-native-otp-entry';
import {Text, TextInput, View} from 'react-native';
import {useState} from 'react';
import {AppButton} from '~/components/common';
import {navigate} from '~/routes/AppStackNavigator.tsx';
import {LayoutAuth} from '~/components/layouts/layout-auth.tsx';
import {useFetch} from '~/hooks/use-fetch.tsx';
import {listApi, routesName} from '~/constants';
import Toast from 'react-native-toast-message';
import {useToast} from '~/hooks/use-toast.ts';

export enum STEP_FORGOT_PASSWORD {
  'EMAIL' = 'EMAIL',
  'CONFIRM_OTP' = 'CONFIRM_OTP',
}
const ConfirmOtpScreen = () => {
  const [otp, setOtp] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [step, setStep] = useState(STEP_FORGOT_PASSWORD.EMAIL);

  const {postManual} = useFetch();
  const {showToast} = useToast();

  const handleForgotPassword = async () => {
    postManual(listApi.SEND_OTP_FORGOT_PASSWORD, {
      email,
    })
      .then(async () => {
        setStep(STEP_FORGOT_PASSWORD.CONFIRM_OTP);
      })
      .catch(error => {
        showToast(error?.response?.data?.info?.message, 'error');
      });
  };

  const handleConfirmForgotPassword = async () => {
    postManual(listApi.FORGOT_PASSWORD, {
      email,
      otp,
      password,
    })
      .then(async () => {
        showToast('Thay đổi mật khất thành công', 'success');
        await navigate(routesName.LoginScreen);
      })
      .catch(error => {
        showToast(error?.response?.data?.info?.message, 'error');
      });
  };

  const handlePress = async () => {
    if (step === STEP_FORGOT_PASSWORD.EMAIL) {
      return await handleForgotPassword();
    }
    await handleConfirmForgotPassword();
  };
  return (
    <LayoutAuth onBack={() => navigate(routesName.TabHome)}>
      <View className=" flex-1 min-h-screen flex mt-4 px-4 ">
        <Text className="text-2xl font-bold">Quên mật khẩu</Text>
        <Text className="text-md mb-6">
          Vui lòng nhập thông tin để tiếp tục
        </Text>
        {step === STEP_FORGOT_PASSWORD.EMAIL && (
          <View>
            <View className="mt-4 w-full">
              <Text className="text-base mb-1">Email</Text>
              <TextInput
                value={email}
                onChangeText={value => setEmail(value)}
                className="rounded-md border border-1  w-full border-gray-300 px-4"
                placeholder="Mật khẩu..."
              />
            </View>
          </View>
        )}
        {step === STEP_FORGOT_PASSWORD.CONFIRM_OTP && (
          <View>
            <OtpInput
              numberOfDigits={6}
              focusColor="#1677ff"
              placeholder="******"
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
                  width: 50,
                  height: 50,
                },
              }}
            />
            <View>
              <View className="mt-4 w-full">
                <Text className="text-base mb-1">Mật khẩu</Text>
                <TextInput
                  value={password}
                  onChangeText={value => setPassword(value)}
                  className="rounded-md border border-1  w-full border-gray-300 px-4"
                  placeholder="Mật khẩu..."
                />
              </View>
            </View>
          </View>
        )}
        <View className="mt-4 w-full">
          <AppButton label="Xác nhận" onPress={handlePress} />
        </View>
      </View>
    </LayoutAuth>
  );
};

export default ConfirmOtpScreen;
