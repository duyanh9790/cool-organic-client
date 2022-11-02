const handleQueryParam = (queryParam, queryValue, option = 'single') => {
  const searchParams = new URLSearchParams(window.location.search);
  if (!queryValue || queryValue.length === 0) {
    searchParams.delete(queryParam);
    const queryString = searchParams.toString();
    window.history.replaceState({}, '', `?${queryString}`);
    return;
  }

  if (option === 'single') {
    if (searchParams.has(queryParam)) {
      searchParams.set(queryParam, queryValue);
    } else {
      searchParams.append(queryParam, queryValue);
    }
  }

  if (option === 'multiple') {
    searchParams.delete(queryParam);
    queryValue.forEach((value) => {
      searchParams.append(queryParam, value);
    });
  }

  const queryString = searchParams.toString();
  window.history.replaceState({}, '', `?${queryString}`);
};

export default handleQueryParam;
