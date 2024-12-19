import {validateEmail} from '~/helpers';
import {useState} from 'react';
import {useFetch} from '~/hooks/use-fetch.tsx';
import {listApi} from '~/constants';
import {navigate} from '~/routes/AppStackNavigator.tsx';

export const useRegister = () => {
  const [email, setEmail] = useState('vegilam637@mowline.com');
  const [password, setPassword] = useState('Abc@2023');
  const [username, setUserName] = useState('haonc');
  const [messageError, setMessageError] = useState({
    email: '',
    password: '',
    username: '',
  });

  const {postManual} = useFetch();

  const onValidate = () => {
    const newMessageError = {...messageError};
    if (!username) {
      newMessageError.username = 'Tên đăng nhập không được để trống';
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
    if (!password) {
      newMessageError.password = 'Password không được để trống';
    } else {
      newMessageError.password = '';
    }
    if (
      newMessageError.email ||
      newMessageError.username ||
      newMessageError.password
    ) {
      setMessageError({
        ...newMessageError,
      });
      return true;
    }

    setMessageError({
      email: '',
      password: '',
      username: '',
    });
    return false;
  };

  const handleRegister = () => {
    const isValidated = onValidate();
    if (isValidated) {
      return;
    }
    postManual(listApi.REGISTER, {
      email,
      password,
      confirmPassword: password,
      username,
    })
      .then(async () => {
        await navigate('ConfirmOtpScreen', {
          email,
          type: 'register',
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  return {
    email,
    password,
    username,
    setEmail,
    setPassword,
    setUserName,
    messageError,
    handleRegister,
  };
};
