import Toast from 'react-native-toast-message';

export const useToast = () => {
  const showToast = (message = 'Có lỗi  xảy ra', type = 'success') => {
    Toast.show({
      type: type,
      text1: 'Thông báo',
      text2: message,
    });
  };

  return {
    showToast,
  };
};
