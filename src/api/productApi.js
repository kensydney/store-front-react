import axios from 'axios';
import config from '../../config';

class ProductApi {
  static getAllProducts() {
    return new Promise((resolve, reject) => {
      setTimeout(async () => {
        const resp = await axios.get(`http://${config.host}:${config.port}/data`);
        resolve(Object.assign([], resp.data));
      }, 0);
    });
  }
}

export default ProductApi;