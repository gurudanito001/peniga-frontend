'use client'

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const AutoRefresh = () => {
  const router = useRouter();

  useEffect(() => {
    const intervalId = setInterval(() => {
      router.refresh();
      console.log('Refreshed using router.refresh()'); // For debugging
    }, 10000); // 10000 milliseconds = 10 seconds

    return () => clearInterval(intervalId); // Clear interval on unmount
  }, [router]);

  return (
    <></> // This component doesn't need to render anything
  );
};


export default AutoRefresh