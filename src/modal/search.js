import { Request } from '../util';
import { API } from './apis';

export const search = async (data, callback) => {
  try {
    const result = await Request.get(API.search, data, false);
    callback({ success: true, result });
  } catch (error) {
    console.log('TCL: search -> error', error);
    callback({ success: false });
  }
};
