import React from 'react';
import {
  ActivityIndicator,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {AppButton} from '../../components/common';
import ImageAvatar from '../../components/common/image-avatar';
import {LayoutCommon} from '../../components/layouts/layout-common';
import {listApi} from '../../constants';
import {onValidatePhone, uploadBase64ToCloudinary} from '../../helpers';
import {useAuth} from '../../hooks/use-auth';
import {useFetch} from '../../hooks/use-fetch';
import {useLogin} from '../../hooks/use-login';
import {useToast} from '../../hooks/use-toast';
import {goBack} from '../../routes/AppStackNavigator';

const UpdateProfileScreen = () => {
  const {account} = useAuth();
  const [username, setUsername] = React.useState(account?.username);
  const [phone, setPhone] = React.useState(account?.phone);
  const [base64Image, setBase64Image] = React.useState(account?.avatar);
  const [isLoading, setIsLoading] = React.useState(false);

  const {putManual} = useFetch();
  const {showToast} = useToast();
  const {getProfile} = useLogin();

  const handleUpdate = async () => {
    setIsLoading(true);
    let imageUrl: string | undefined;
    if (base64Image.length > 1000) {
      const response = await uploadBase64ToCloudinary(base64Image);
      imageUrl = response?.url;
    } else {
      imageUrl = base64Image;
    }
    if (!phone || !username || !imageUrl) {
      setIsLoading(false);
      return showToast('Vui lòng nhập đày đủ thông tin', 'error');
    }
    if (onValidatePhone(phone)) {
      setIsLoading(false);
      return showToast('Số điện thoại không đúng định dạng', 'error');
    }
    putManual(listApi.UPDATE_PROFILE, {username, phone, avatar: imageUrl})
      .then(() => {
        showToast('Cập nhật tài khoản thaènh công', 'success');
      })
      .catch(error => {
        console.log(error);
        showToast(error?.response?.data?.info?.message, 'error');
      })
      .finally(async () => {
        await getProfile();
        setIsLoading(false);
      });
  };
  return (
    <LayoutCommon label="Thông tin tài khoản" onBack={goBack}>
      <View className="mt-6 px-4 mb-6">
        <ImageAvatar imageInit={base64Image} setBase64Image={setBase64Image} />
        <View className="mb-4 w-full mt-6">
          <Text className="text-base mb-1">Email</Text>
          <TextInput
            editable={false}
            value={account?.email}
            className="rounded-md border border-1  w-full border-gray-300 px-4"
            placeholder="Email..."
          />
        </View>
        <View className="mb-4 w-full">
          <Text className="text-base mb-1">Họ và tên</Text>
          <TextInput
            value={username}
            onChangeText={value => setUsername(value)}
            className="rounded-md border border-1  w-full border-gray-300 px-4"
            placeholder="Họ và tên..."
          />
        </View>
        <View className="mb-4 w-full">
          <Text className="text-base mb-1">Số điện thoại</Text>
          <TextInput
            value={phone}
            onChangeText={value => setPhone(value)}
            className="rounded-md border border-1  w-full border-gray-300 px-4"
            placeholder="Số điện thoại..."
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
          <AppButton label="Cập nhật" onPress={handleUpdate} />
        )}
      </View>
    </LayoutCommon>
  );
};

export default UpdateProfileScreen;
