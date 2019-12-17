import { Request } from '../util';
import { API } from './apis';

export const search = async (data, callback) => {
  try {
    const result = await Request.get(API.search, data, false);
    callback({ success: true, result });
  } catch {
    callback({ success: false });
  }
};

export const generalInfo = async (id, callback) => {
  try {
    const result = await Request.get(`${API.generalInfo + id}/generalinfo`, '', false);
    callback({ success: true, result });
  } catch {
    callback({ success: false });
  }
};
