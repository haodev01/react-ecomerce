import http from '~/lib/http.ts';
import {useAuth} from '~/hooks/use-auth.tsx';

export const useFetch = () => {
  const {accessToken} = useAuth();

  const postManual = async (url: string, data: Record<string, unknown>) => {
    const asyncConfig = {
      accessToken: accessToken as string,
    };
    return await http.post(url, data, asyncConfig as any);
  };

  const getManual = async (url: string, params: Record<string, unknown>) => {
    const asyncConfig = {
      accessToken: accessToken as string,
    };
    return await http.get(url, {
      params: {...params},
      ...asyncConfig,
    });
  };

  const putManual = async (url: string, data: Record<string, unknown>) => {
    const asyncConfig = {
      accessToken: accessToken as string,
    };
    return await http.put(url, data, asyncConfig as any);
  };

  const deleteManual = async (url: string) => {
    const asyncConfig = {
      accessToken: accessToken as string,
    };
    return await http.delete(url, asyncConfig as any);
  };

  return {
    postManual,
    getManual,
    putManual,
    deleteManual,
  };
};
