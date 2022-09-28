import React, { createContext, useCallback, useState, useContext } from 'react';

const GlolbalContext = createContext({});

const GlobalProvider = ({ children }) => {
   const [data, setData] = useState(() => {
      const data = localStorage.getItem('@Dashboard:data');
      if (data) {
         return JSON.parse(data) 
      }
      return [] ;
   });  

   const [username, setUsername] = useState(() => {
      const user = localStorage.getItem('@Dashboard:username');
      if (user) {
         return user 
      }
      return '' ;
   });

  const updateData = useCallback(
    (data) => {
      localStorage.setItem('@Dashboard:data', JSON.stringify(data));
      setData(data);
    },
    [],
  );  
  
  const updateUsername = useCallback(
    (name) => {
      localStorage.setItem('@Dashboard:username', name);
      setUsername(name);
    },
    [],
  );

  return (
    <GlolbalContext.Provider
      value={{ data, username, updateUsername,updateData }}
    >
      {children}
    </GlolbalContext.Provider>
  );
};

function useGlobal() {
  const context = useContext(GlolbalContext);
  if (!context) {
    throw new Error('useGlobal must be used within an GlobalProvider');
  }

  return context;
}

export { GlobalProvider, useGlobal };