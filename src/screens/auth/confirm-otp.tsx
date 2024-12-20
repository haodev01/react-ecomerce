import {OtpInput} from 'react-native-otp-entry';
import {Text, View} from 'react-native';
import {useState} from 'react';
import {AppButton} from '~/components/common';
import {CommonNavigatorParams, navigate} from '~/routes/AppStackNavigator.tsx';
import {LayoutAuth} from '~/components/layouts/layout-auth.tsx';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useFetch} from '~/hooks/use-fetch.tsx';
import {listApi, routesName} from '~/constants';
import {useToast} from '~/hooks/use-toast.ts';

type Props = NativeStackScreenProps<CommonNavigatorParams, 'ConfirmOtpScreen'>;

const ConfirmOtpScreen = (props: Props) => {
  const {route} = props;

  const email = route.params?.email;
  const type = route.params?.type ?? '';

  const [otp, setOtp] = useState('');
  const {putManual} = useFetch();
  const {showToast} = useToast();

  const handleConfirmOtp = async () => {
    if (type === 'register') {
      putManual(`${listApi.CONFIRM_OTP}/${otp}`, {email})
        .then(async () => {
          showToast('Đăng ký tài khoản thành công', 'success');
          await navigate(routesName.LoginScreen);
        })
        .catch(error => {
          showToast(error?.response?.data?.info?.message, 'error');
        });
    }
  };
  return (
    <LayoutAuth onBack={() => navigate('HomeScreen')}>
      <View className=" flex-1 min-h-screen flex mt-4 px-4 ">
        <Text className="text-2xl font-bold">Xác nhận OTP</Text>
        <Text className="text-md mb-6">
          Vui lòng nhập thông tin để tiếp tục
        </Text>
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
        <View className="mt-4 w-full">
          <AppButton
            disabled={otp.length < 6}
            label="Xác nhận"
            onPress={handleConfirmOtp}
          />
        </View>
      </View>
    </LayoutAuth>
  );
};

export default ConfirmOtpScreen;
