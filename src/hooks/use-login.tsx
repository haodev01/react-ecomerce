import {validateEmail} from '~/helpers';
import {useState} from 'react';
import {useFetch} from '~/hooks/use-fetch.tsx';
import {listApi, routesName} from '~/constants';
import {useAppDispatch} from '~/store/hooks.ts';
import {
  changeAccessToken,
  changeUser,
  changeUserInfo,
} from '~/store/reducer/auth-reducer.ts';
import {navigate} from '~/routes/AppStackNavigator.tsx';
import {useToast} from '~/hooks/use-toast.ts';

export const useLogin = (screen = '', id = '') => {
  const [email, setEmail] = useState('trinhdinhdai22@gmail.com');
  const [password, setPassword] = useState('Abc@2023');
  const [messageError, setMessageError] = useState({
    email: '',
    password: '',
  });

  const {postManual, getManual} = useFetch();
  const dispatch = useAppDispatch();
  const {showToast} = useToast();

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
  const getProfile = async (accessToken = '') => {
    getManual(listApi.AUTH_ME, {
      accessToken,
    })
      .then((response: any) => {
        dispatch(changeUserInfo(response.returnValue));
      })
      .catch(error => {
        showToast(error?.response?.data?.info?.message, 'error');
      });
  };

  const handleLogin = async () => {
    const isValidated = onValidate();
    if (isValidated) {
      return;
    }
    postManual(listApi.LOGIN, {
      email,
      password,
    })
      .then(async (response: any) => {
        showToast('Đăng nhập thành công', 'success');
        const data = response.returnValue;
        dispatch(changeUser(data));
        dispatch(changeAccessToken(data.accessToken));
        await getProfile(data.accessToken);
        if (screen) {
          return navigate(
            screen === routesName.HomeScreen ? routesName.TabHome : screen,
            {
              id,
            },
            true,
          );
        }
        navigate(routesName.TabHome, {}, true);
      })
      .catch(error => {
        showToast(error?.response?.data?.info?.message, 'error');
        console.log(error);
      });
  };

  return {
    email,
    password,
    setEmail,
    setPassword,
    messageError,
    handleLogin,
    getProfile,
  };
};
