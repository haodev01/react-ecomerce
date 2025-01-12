import {useAppSelector} from '~/store/hooks.ts';

export const useAuth = () => {
  const userInfo = useAppSelector(state => state.auth);
  const account = useAppSelector(state => state.auth.userInfo);

  const user = userInfo.user;

  const isLogged = !!userInfo.accessToken;

  return {
    isLogged,
    user,
    accessToken: userInfo.accessToken,
    account,
  };
};
