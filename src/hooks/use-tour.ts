import {useEffect, useState} from 'react';
import {useFetch} from '~/hooks/use-fetch.tsx';
import {useToast} from '~/hooks/use-toast.ts';
import {listApi} from '~/constants';

export const useTour = () => {
  const [type, setType] = useState<any>(null);
  const [city, setCity] = useState<any>(null);
  const [minPrice, setMinPrice] = useState<any>(null);
  const [maxPrice, setMaxPrice] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  const [listTour, setListTour] = useState([]);
  const {getManual} = useFetch();
  const {showToast} = useToast();
  const getListTour = async () => {
    setIsLoading(true);
    getManual(listApi.GET_TOUR, {
      types: type?.value,
      province: city?.value,
      minPrice: minPrice !== 0 ? minPrice : null,
      maxPrice: maxPrice !== 0 ? maxPrice : null,
    })
      .then((response: any) => {
        setListTour(response?.returnValue?.data);
      })
      .catch(error => {
        showToast(error?.response?.data?.info?.message, 'error');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  useEffect(() => {
    getListTour().then();
  }, []);

  return {
    listTour,
    setType,
    setCity,
    city,
    type,
    minPrice,
    setMinPrice,
    maxPrice,
    setMaxPrice,
    getListTour,
    isLoading,
  };
};
