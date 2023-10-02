import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api/',
  params: {
    key: 'de84abf6f17c45b6add7ba6cbf83c53c',
  },
});
