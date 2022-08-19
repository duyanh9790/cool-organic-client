import { useLocation } from 'react-router-dom';

const useSearchParams = () => {
  const location = useLocation();
  console.log('location obj: ', location);
  console.log('location.search: ', location.search);
  const searchParams = new URLSearchParams(location.search);
  return searchParams;
};

export default useSearchParams;
