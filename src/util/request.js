import axios from 'axios';

import { setDelay } from './setDelay';

const instance = axios.create();

const request = (method, url, data, delay = true, headers) => new Promise((resolve, reject) => {
  (() => {
    if (method === 'get') {
      return instance.request({
        url, method, params: data, headers,
      });
    }
    return instance.request({
      url, method, data, headers: {},
    });
  })()
    .then((res) => {
      if (delay) {
        setDelay(() => {
          resolve(res.data);
        });
      } else {
        resolve(res.data);
      }
    })
    .catch((err) => {
      const { data: error } = err.response || {};
      reject(error);
    });
});

export const Request = {
  get: (endpoint, data, delay, headers) => request('get', endpoint, data, delay, headers),
  post: (endpoint, data, delay) => request('post', endpoint, data, delay),
  put: (endpoint, data, delay) => request('put', endpoint, data, delay),
  del: (endpoint, data, delay) => request('delete', endpoint, data, delay),
};
