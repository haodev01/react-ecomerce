import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import {AppButton} from '../../components/common/app-button';
import {LayoutCommon} from '../../components/layouts/layout-common';
import {listApi, routesName} from '../../constants';
import {useFetch} from '../../hooks/use-fetch';
import {useToast} from '../../hooks/use-toast';
import {goBack, navigate} from '../../routes/AppStackNavigator';

const ChangePasswordScreen = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [messageError, setMessageError] = useState({
    oldPassword: '',
    password: '',
    confirmPassword: '',
  });
  const onValidate = () => {
    if (!oldPassword) {
      setMessageError({
        ...messageError,
        oldPassword: 'Vui lòng nhập mật khẩu cũ',
      });
      return true;
    }
    if (!password) {
      setMessageError({
        ...messageError,
        password: 'Vui lòng nhập mật khẩu mới',
      });
      return true;
    }
    if (!confirmPassword) {
      setMessageError({
        ...messageError,
        confirmPassword: 'Vui lòng xác nhận mật khẩu mới',
      });
      return true;
    }
    if (password !== confirmPassword) {
      setMessageError({
        ...messageError,
        confirmPassword: 'Xác nhận mật khẩu mới không trùng khớp ',
      });
      return true;
    }
    setMessageError({
      oldPassword: '',
      password: '',
      confirmPassword: '',
    });
    return false;
  };
  const {putManual} = useFetch();
  const {showToast} = useToast();
  const handleChangePassword = () => {
    const isValid = onValidate();
    if (!isValid) {
      putManual(listApi.CHANGE_PASSWORD, {
        currentPassword: oldPassword,
        newPassword: password,
      })
        .then(() => {
          showToast('Đổi mật khâu thành công', 'success');
          navigate(routesName.TabHome);
        })
        .catch(error => {
          showToast(error?.response?.data?.info?.message, 'error');
        });
    }
  };
  return (
    <LayoutCommon label="Đổi mật khâu" onBack={goBack}>
      <View className=" flex-1 min-h-screen px-4 mt-4 ">
        <Text className="text-2xl font-bold">Đổi mật khẩu</Text>
        <Text className="text-md mb-6">
          Vui lòng nhập thông tin để tiếp tục
        </Text>
        <View className="mb-4 w-full">
          <Text className="text-base mb-1">Mật khẩu cũ</Text>
          <TextInput
            value={oldPassword}
            onChangeText={value => setOldPassword(value)}
            className="rounded-md border border-1  w-full border-gray-300 px-4"
            placeholder="Mật khẩu cũ..."
          />
          {!!messageError.oldPassword && (
            <Text className="text-red-500 mt-1">
              {messageError.oldPassword}
            </Text>
          )}
        </View>
        <View className="mb-4 w-full">
          <Text className="text-base mb-1">Mật khẩu mới</Text>
          <TextInput
            value={password}
            onChangeText={value => setPassword(value)}
            className="rounded-md border border-1  w-full border-gray-300 px-4"
            placeholder="Mật khẩu mới..."
          />
          {!!messageError.password && (
            <Text className="text-red-500  mt-1">{messageError.password}</Text>
          )}
        </View>
        <View className="mb-4 w-full">
          <Text className="text-base mb-1">Mật khẩu mới</Text>
          <TextInput
            value={confirmPassword}
            onChangeText={value => setConfirmPassword(value)}
            className="rounded-md border border-1  w-full border-gray-300 px-4"
            placeholder="Xác nhận mật khẩu..."
          />
          {!!messageError.confirmPassword && (
            <Text className="text-red-500  mt-1">
              {messageError.confirmPassword}
            </Text>
          )}
        </View>
        <AppButton label="Đổi mật khâu" onPress={handleChangePassword} />
      </View>
    </LayoutCommon>
  );
};
export default ChangePasswordScreen;
