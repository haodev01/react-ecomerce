import {Alert} from 'react-native';
import axios from 'axios';
import {generateSignature} from '~/helpers/hash.ts';
import moment from 'moment';

export function validateEmail(email: string) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
export function onValidatePhone(phone: string) {
  const regex = /^(0[3|5|7|8|9][0-9]{9})$/;
  return regex.test(phone);
}
export const formatVND = (amount: number) => {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  }).format(amount);
};

export const formatTimeAgo = (timestamp: string): string => {
  const inputTime = new Date(timestamp);
  if (isNaN(inputTime.getTime())) {
    return 'Thời gian không hợp lệ';
  }

  // Trừ đi 7 giờ (7 * 60 * 60 * 1000 ms)
  const adjustedTime = inputTime.getTime() + 7 * 60 * 60 * 1000;

  const now = Date.now();
  const diffInSeconds = Math.floor((now - adjustedTime) / 1000);
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  const diffInHours = Math.floor(diffInMinutes / 60);
  const diffInDays = Math.floor(diffInHours / 24);
  const diffInMonths = Math.floor(diffInDays / 30);
  const diffInYears = Math.floor(diffInDays / 365);

  if (diffInSeconds < 60) {
    return 'Vừa xong';
  } else if (diffInMinutes < 60) {
    return `${diffInMinutes} phút trước`;
  } else if (diffInHours < 24) {
    return `${diffInHours} giờ trước`;
  } else if (diffInDays < 30) {
    return `${diffInDays} ngày trước`;
  } else if (diffInMonths < 12) {
    return `${diffInMonths} tháng trước`;
  } else {
    return `${diffInYears} năm trước`;
  }
};
const base64ToBlob = (base64, mimeType = '') => {
  // Loại bỏ tiền tố "data:[mime];base64," nếu có
  const base64WithoutPrefix = base64.replace(/^data:[^;]+;base64,/, '');
  const byteCharacters = atob(base64WithoutPrefix);
  const byteNumbers = new Array(byteCharacters.length)
    .fill(0)
    .map((_, i) => byteCharacters.charCodeAt(i));
  const byteArray = new Uint8Array(byteNumbers);

  return new Blob([byteArray], {type: mimeType});
};

export const base64ToFile = (
  base64: any,
  fileName: any,
  mimeType = 'image/png',
) => {
  const blob = base64ToBlob(base64, mimeType);
  return new File([blob], fileName, {type: mimeType});
};

const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/dswehgbyg/image/upload';
const API_KEY = '428629543573612';
const API_SECRET = 'NXYm2F-7RyozMtSnQu5Uga53lf8';
export const uploadBase64ToCloudinary = async (base64: any) => {
  try {
    const timestamp = Math.floor(Date.now() / 1000).toString();
    const formData = new FormData();
    const base64Data = base64.replace(/^data:image\/\w+;base64,/, '');

    // Thêm Base64 vào FormData

    const params = [
      {key: 'public_id', value: timestamp, disabled: false},
      {key: 'timestamp', value: timestamp, disabled: false},
      {key: 'api_key', value: API_KEY, disabled: false},
      {key: 'file', value: base64, disabled: false},
      {key: 'signature', value: API_SECRET, disabled: false},
    ];
    const signature = generateSignature(params, API_SECRET, timestamp);
    formData.append('signature', signature);
    formData.append('api_key', API_KEY);
    formData.append('timestamp', timestamp);
    formData.append('public_id', timestamp);

    formData.append('file', `data:image/png;base64,${base64Data}`);

    const result = await axios.post(CLOUDINARY_URL, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return result.data;
  } catch (error) {
    console.error('Error uploading image:', error);
    Alert.alert('Error', 'Could not upload the image.');
  }
};
export const formatDateDDMMYYYY = (date: any) => {
  if (!date) {
    return '';
  }
  try {
    return moment(date).format('DD/MM/YYYY');
  } catch (e) {
    return moment().format('DD/MM/YYYY');
  }
};
export const formatDateYYYYMMDD = (date: any) => {
  if (!date) {
    return '';
  }
  try {
    return moment(date).format('YYYY-MM-DD');
  } catch (e) {
    return moment().format('YYYY-MM-DD');
  }
};
export const calculateDays = (start, end) => {
  const startDay = new Date(start);
  const endDay = new Date(end);
  const timeDiff = endDay - startDay;
  const dayDiff = timeDiff / (1000 * 60 * 60 * 24);
  return `${dayDiff + 1} ngày`;
};

export const formatCurrency = (
  amount: number | string,
  options: {
    currency?: string;
    minimumFractionDigits?: number;
    maximumFractionDigits?: number;
  } = {},
): string => {
  const {
    currency = 'VND',
    minimumFractionDigits = 0,
    maximumFractionDigits = 0,
  } = options;

  const numAmount = typeof amount === 'string' ? parseFloat(amount) : amount;

  if (isNaN(numAmount)) return '';

  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: minimumFractionDigits,
    maximumFractionDigits: maximumFractionDigits,
  }).format(numAmount);
};
