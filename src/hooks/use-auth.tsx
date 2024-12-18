import {useAppSelector} from '~/store/hooks.ts';

export const useAuth = () => {
  const userInfo = useAppSelector(state => state.auth);

  const user = userInfo.user;

  const isLogged = !!userInfo.accessToken;

  return {
    isLogged,
    user,
    accessToken: userInfo.accessToken,
  };
};
