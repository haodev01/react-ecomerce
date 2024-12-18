import {validateEmail} from '~/helpers';
import {useState} from 'react';
import {navigate} from '~/routes/AppStackNavigator.tsx';
import {useAppDispatch, useAppSelector} from '~/store/hooks.ts';
import {changeAccessToken} from '~/store/reducer/auth-reducer.ts';

export const useLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [messageError, setMessageError] = useState({
    email: '',
    password: '',
  });

  const dispatch = useAppDispatch();
  const onValidate = () => {
    if (!email) {
      setMessageError({
        ...messageError,
        email: !email ? 'Email không được để trống' : '',
        password: !password ? 'Password không được để trống' : '',
      });
      return true;
    }
    if (!validateEmail(email)) {
      setMessageError({
        ...messageError,
        email: 'Email không đúng định dạng',
      });
      return true;
    }
    if (!password) {
      setMessageError({
        ...messageError,
        password: 'Password không được để trống',
      });
      return true;
    }

    setMessageError({
      email: '',
      password: '',
    });

    return false;
  };

  const handleLogin = async () => {
    const isValidated = onValidate();
    if (isValidated) {
      return;
    }
    dispatch(changeAccessToken('haonc'));

    await navigate('ConfirmOtpScreen');
  };

  return {
    setEmail,
    setPassword,
    messageError,
    handleLogin,
  };
};
