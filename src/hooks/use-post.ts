import {useEffect, useState} from 'react';
import {useFetch} from '~/hooks/use-fetch.tsx';
import {listApi} from '~/constants';

export const usePost = () => {
  const [listPost, setListPost] = useState([]);
  const {getManual} = useFetch();
  const getListPost = async () => {
    getManual(listApi.LIST_POST, {})
      .then((response: any) => {
        setListPost(response?.returnValue?.data);
        console.log(response?.returnValue?.data);
      })
      .catch(error => {
        console.log(error?.response?.data?.info?.message);
      });
  };
  useEffect(() => {
    getListPost().then();
  }, []);

  return {
    listPost,
  };
};
