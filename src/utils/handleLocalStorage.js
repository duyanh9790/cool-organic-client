const handleLocalStorage = {
  get: (key) => {
    return localStorage.getItem(key);
  },
  set: (key, value) => {
    localStorage.setItem(key, value);
  },
  remove: (key) => {
    localStorage.removeItem(key);
  },
};

export default handleLocalStorage;