import {useEffect, useState} from 'react';
import {useFetch} from '~/hooks/use-fetch.tsx';
import {listApi} from '~/constants';
import {useToast} from './use-toast';

export const usePost = () => {
  const [listPost, setListPost] = useState([]);
  const {getManual} = useFetch();
  const {showToast} = useToast();
  const getListPost = async () => {
    getManual(listApi.LIST_POST, {})
      .then((response: any) => {
        setListPost(response?.returnValue?.data);
      })
      .catch(error => {
        showToast(error?.response?.data?.info?.message);
      });
  };
  useEffect(() => {
    getListPost().then();
  }, []);

  return {
    listPost,
  };
};
