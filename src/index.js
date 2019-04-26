import { useState, useEffect } from 'react';

const useInfiniteScroll = (fetchCallback) => {
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    if (!isFetching) return;
    fetchCallback();
  }, [isFetching]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function handleScroll() {
    if (isFetching ||window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight)
      return;

    setIsFetching(true);
  }

  return [isFetching, setIsFetching];
}

export default useInfiniteScroll;
