import {Text, TextInput, View} from 'react-native';
import {AppButton} from '~/components/common';
import {DialogBase} from '~/components/common/modal/dialog-base.tsx';
import {useState} from 'react';
import {useToast} from '~/hooks/use-toast.ts';

interface Props {
  visible: boolean;
  onHide: () => void;
}

export const DialogContact = (props: Props) => {
  const {visible, onHide} = props;

  const [email, setEmail] = useState('');
  const [username, setUserName] = useState('');
  const [message, setMessage] = useState('');
  const [phone, setPhone] = useState('');

  const {showToast} = useToast();

  const handlePressContact = () => {
    if (!email || !phone || !username || !message) {
      return showToast('Vui lòng nhập đầy đủ thông tin', 'error');
    }
    onHide();
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
          placeholder="Tên đăng nhập ..."
        />
      </View>
      <View className="mb-4 w-full">
        <Text className="text-base mb-1">Điện thoại</Text>
        <TextInput
          keyboardType="phone-pad"
          value={phone}
          onChangeText={value => setPhone(value)}
          className="rounded-md border border-1  w-full border-gray-300 px-4"
          placeholder="Điện thoại ..."
        />
      </View>
      <View className="mb-4 w-full">
        <Text className="text-base mb-1">Email</Text>
        <TextInput
          value={email}
          onChangeText={value => setEmail(value)}
          className="rounded-md border border-1  w-full border-gray-300 px-4"
          placeholder="Email..."
        />
      </View>
      <View className="mb-4 w-full">
        <Text className="text-base mb-1">Thông tin cần tư vấn</Text>
        <TextInput
          value={message}
          onChangeText={value => setMessage(value)}
          className="rounded-md border border-1  w-full border-gray-300 px-4"
          placeholder="Thông tin cần tư vấn..."
        />
      </View>
      <AppButton label="Gửi ngay" onPress={handlePressContact} />
    </DialogBase>
  );
};
