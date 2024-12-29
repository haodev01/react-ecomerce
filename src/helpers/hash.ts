import CryptoJS from 'crypto-js';
function jsonToQueryString(json: any) {
  return Object.keys(json)
    .map(function (key) {
      return encodeURIComponent(key) + '=' + json[key];
    })
    .join('&');
}
export function generateSignature(params: any, apiSecret: any, timestamp: any) {
  // Loại bỏ các tham số không cần thiết
  const excludedParams = ['signature', 'file', 'resource_type', 'api_key'];
  const data = {};
  let public_ids = [];
  for (const param of params) {
    if (excludedParams.includes(param?.key) || param?.disabled) {
      continue;
    }
    if (param?.key?.includes('public_ids')) {
      public_ids.push(param?.value);
    } else {
      data[param.key] = param?.value;
    }
  }
  data.timestamp = timestamp;
  if (public_ids.length !== 0) {
    data.public_ids = public_ids.join();
  }
  const ordered = Object.keys(data)
    .sort()
    .reduce((obj, key) => {
      obj[key] = data[key];
      return obj;
    }, {});
  const serialized = jsonToQueryString(ordered) + apiSecret;
  const signature = CryptoJS.SHA1(serialized).toString();

  return signature;
}
