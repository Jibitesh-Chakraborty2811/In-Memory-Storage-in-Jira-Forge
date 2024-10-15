import React, { useEffect, useState } from 'react';
import ForgeReconciler, { Text } from '@forge/react';
import { invoke, storage } from '@forge/bridge';  // import storage from @forge/bridge

const App = () => {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    // Define an async function inside useEffect
    const fetchData = async () => {
      try {
        // Invoke API method
        const result = await invoke('getText', { example: 'my-invoke-variable' });
        setData(result);
        
        // Set and get data from storage
        
        //setData(storedValue);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Call the async function
  }, []);

  return (
    <>
      <Text>Hello world!</Text>
      <Text>{data ? data : 'Loading...'}</Text>
    </>
  );
};

ForgeReconciler.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
