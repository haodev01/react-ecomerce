export function validateEmail(email: string) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
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
