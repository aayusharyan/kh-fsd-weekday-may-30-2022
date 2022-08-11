import { useState, useEffect } from 'react';

const useInternet = () => {
  const [connectivity, setConnectivity] = useState(true);

  const inernetConnected    = _ => setConnectivity(true);
  const inernetDisconnected = _ => setConnectivity(false);

  useEffect(_ => {
    window.addEventListener('online', inernetConnected);
    window.addEventListener('offline', inernetDisconnected);
  }, []);

  useEffect(_ => {
    return (_ => {
      window.removeEventListener('online', inernetConnected);
      window.removeEventListener('offline', inernetDisconnected);
    })
  }, []);

  return connectivity;
}

export default useInternet;