import axios from 'axios';
let baseURL;

process.env.NODE_ENV === 'production'
  ? (baseURL = 'https://fathomless-everglades-73012.herokuapp.com')
  // ? (baseURL = window.location.origin)
  : (baseURL = 'http://localhost:5000');

const service = axios.create({ withCredentials: true, baseURL });

const actions = {
  isLoggedIn: async () => {
    return await service.get('/is-logged-in')
  },
  signUp: async (user) => {
    return await service.post('/signup', user)
  },
  logIn: async (user) => {
    return await service.post('/login', user)
  },
  logOut: async () => {
    return await service.get('/logout')
  },
  returnMobilityData: async (regionName) => {
    return await service.get('/mobilities', {params: 
      { region: regionName }
    })
  },
  updateUserGroceryData: async (user) => {
    return await service.post('/saved-grocery-data', user)
  },
  updateUserParksData: async (user) => {
    return await service.post('/saved-parks-data', user)
  }
};

export default actions;
