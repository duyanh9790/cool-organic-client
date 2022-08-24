const handleLocalStorage = (type, key, value = null) => {
  switch (type) {
    case 'set': {
      return localStorage.setItem(key, JSON.stringify(value));
    }
    case 'get': {
      return JSON.parse(localStorage.getItem(key));
    }
    case 'remove': {
      return localStorage.removeItem(key);
    }
  }
};

export default handleLocalStorage;
