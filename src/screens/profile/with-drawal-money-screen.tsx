import React, {useState} from 'react';
import {
  ActivityIndicator,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {AppButton} from '../../components/common';
import {LayoutCommon} from '../../components/layouts/layout-common';
import {useFetch} from '../../hooks/use-fetch';
import {useToast} from '../../hooks/use-toast';
import {goBack, navigate} from '../../routes/AppStackNavigator';
import {listApi, routesName} from '../../constants';
import {useLogin} from '../../hooks/use-login';

const WithDrawalMoneyScreen = () => {
  const [money, setMoney] = React.useState('');
  const [isLoading, setIsLoading] = useState(false);

  const {showToast} = useToast();
  const {postManual} = useFetch();
  const {getProfile} = useLogin();

  const handleWithDrawal = () => {
    if (!money) {
      return showToast('Vui lòng nhập số tiền muốn rút', 'error');
    }
    setIsLoading(true);
    postManual(listApi.TRANSACTION_USER_WITHDRAW, {
      amount: Number(money),
    })
      .then(() => {
        showToast('Yêu cầu rút tiền thaènh công', 'success');
        navigate(routesName.TabHome);
      })
      .catch(error => {
        showToast(error?.response?.data?.info?.message, 'error');
      })
      .finally(async () => {
        await getProfile();
        setIsLoading(false);
      });
  };
  return (
    <LayoutCommon label="Rút tiền" onBack={goBack}>
      <View className="px-4 mt-6">
        <View>
          <Text className="text-2xl font-bold">Rút tiền</Text>
          <Text className="text-md mb-6">
            Vui lòng nhập thông tin để tiếp tục
          </Text>
        </View>
        <View className="mb-4 w-full">
          <Text className="text-base mb-1">Số tiền muốn rút</Text>
          <TextInput
            keyboardType="numeric"
            value={money}
            onChangeText={value => setMoney(value)}
            className="rounded-md border border-1  w-full border-gray-300 px-4"
            placeholder="Mật khẩu..."
          />
        </View>
        {isLoading ? (
          <TouchableOpacity
            className={
              'w-full bg-primary rounded-lg h-12 flex items-center justify-center  '
            }>
            <ActivityIndicator size="small" color="white" />
          </TouchableOpacity>
        ) : (
          <AppButton label="Xác nhận" onPress={handleWithDrawal} />
        )}
      </View>
    </LayoutCommon>
  );
};

export default WithDrawalMoneyScreen;
