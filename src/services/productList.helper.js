import axiosConfig from '../utils/axios.config';

export const ProductListing = async (data = '') => {
  return await axiosConfig
    .get('/products', data)
    .then(function (response) {
      console.log({ response });
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
      return false;
    });
};
