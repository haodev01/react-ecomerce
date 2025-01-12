import {Text, TextInput, View} from 'react-native';
import {AppButton} from '~/components/common';
import {DialogBase} from '~/components/common/modal/dialog-base.tsx';
import {useState} from 'react';
import {useToast} from '~/hooks/use-toast.ts';
import React from 'react';
import {useFetch} from '../../../hooks/use-fetch';
import {listApi} from '../../../constants';
import {onValidatePhone, validateEmail} from '../../../helpers';
interface Props {
  visible: boolean;
  onHide: () => void;
  tourGuideId: any;
}

export const DialogContact = (props: Props) => {
  const {visible, onHide, tourGuideId} = props;

  const [email, setEmail] = useState('');
  const [username, setUserName] = useState('');
  const [message, setMessage] = useState('');
  const [phone, setPhone] = useState('');

  const [messageError, setMessageError] = useState({
    email: '',
    username: '',
    message: '',
    phone: '',
  });

  const {showToast} = useToast();
  const {postManual} = useFetch();

  const onValidate = () => {
    const newMessageError = {...messageError};
    if (!username) {
      newMessageError.username = 'Họ và tên không được để trống';
    } else {
      newMessageError.username = '';
    }
    if (!email) {
      newMessageError.email = 'Email không được để trống';
    } else if (!validateEmail(email)) {
      newMessageError.email = 'Email không đúng định dạng';
    } else {
      newMessageError.email = '';
    }
    if (!phone) {
      newMessageError.phone = 'Password không được để trống';
    } else if (onValidatePhone(phone)) {
      newMessageError.phone = 'Số điện thoại không đúng định dạng';
    } else {
      newMessageError.phone = '';
    }
    if (!message) {
      newMessageError.message = 'Thông tin tư vấn không được để trống';
    } else {
      newMessageError.message = '';
    }
    if (
      newMessageError.email ||
      newMessageError.username ||
      newMessageError.phone ||
      newMessageError.message
    ) {
      setMessageError({
        ...newMessageError,
      });
      return true;
    }

    setMessageError({
      email: '',
      username: '',
      phone: '',
      message: '',
    });
    return false;
  };

  const handlePressContact = () => {
    const isValidated = onValidate();
    if (isValidated) {
      return;
    }
    postManual(listApi.USER_SEND_CONSULTATION, {
      email,
      phone,
      name: username,
      message,
      tourGuideId: 2,
    })
      .then(response => {
        console.log(response);
        showToast('Gửi thông tin tư vấn thành công', 'success');
      })
      .catch(error => {
        showToast(error?.response?.data?.info?.message, 'error');
      })
      .finally(() => {
        onHide();
        setUserName('');
        setPhone('');
        setEmail('');
        setMessage('');
        setMessageError({
          email: '',
          username: '',
          phone: '',
          message: '',
        });
      });
  };

  return (
    <DialogBase visible={visible} onHide={onHide}>
      <Text className="text-xl font-bold">Gửi thông tin tư vấn</Text>
      <View className="mb-4 w-full mt-6">
        <Text className="text-base mb-1">Họ tên</Text>
        <TextInput
          value={username}
          onChangeText={value => setUserName(value)}
          className="rounded-md border border-1  w-full border-gray-300 px-4"
          placeholder="Họ và tên ..."
          onBlur={() => onValidate()}
        />
        {!!messageError.username && (
          <Text className="text-red-500 mt-1">{messageError.username}</Text>
        )}
      </View>
      <View className="mb-4 w-full">
        <Text className="text-base mb-1">Điện thoại</Text>
        <TextInput
          keyboardType="phone-pad"
          value={phone}
          onChangeText={value => setPhone(value)}
          className="rounded-md border border-1  w-full border-gray-300 px-4"
          placeholder="Điện thoại ..."
          onBlur={() => onValidate()}
        />
        {!!messageError.phone && (
          <Text className="text-red-500 mt-1">{messageError.phone}</Text>
        )}
      </View>
      <View className="mb-4 w-full">
        <Text className="text-base mb-1">Email</Text>
        <TextInput
          value={email}
          onChangeText={value => setEmail(value)}
          className="rounded-md border border-1  w-full border-gray-300 px-4"
          placeholder="Email..."
          onBlur={() => onValidate()}
        />
        {!!messageError.email && (
          <Text className="text-red-500 mt-1">{messageError.email}</Text>
        )}
      </View>
      <View className="mb-4 w-full">
        <Text className="text-base mb-1">Thông tin cần tư vấn</Text>
        <TextInput
          value={message}
          onChangeText={value => setMessage(value)}
          className="rounded-md border border-1  w-full border-gray-300 px-4"
          placeholder="Thông tin cần tư vấn..."
          onBlur={() => onValidate()}
        />
        {!!messageError.message && (
          <Text className="text-red-500 mt-1">{messageError.message}</Text>
        )}
      </View>
      <AppButton label="Gửi ngay" onPress={handlePressContact} />
    </DialogBase>
  );
};
