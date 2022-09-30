import axios from 'axios';
import React, { createContext, useCallback, useState, useContext } from 'react';



const GlobalContext = createContext({});

const GlobalProvider = ({ children }) => {
   const [data, setData] = useState(() => {
      const data = localStorage.getItem('@Dashboard:data');
      if (data) {
         return JSON.parse(data) 
      }
      return [] ;
   });  

   const [username, setUsername] = useState(() => {
      const user = localStorage.getItem('@Dashboard:data'.name);
      if (user) {
         return user 
      }
      return '' ;
   });

   const [mains,setMains] = useState([])

  const updateData = useCallback(
    (data) => {
     
      localStorage.setItem('@Dashboard:data', JSON.stringify(data));
      setData(data);
    },
    [],
  );  

  const updateUsername = useCallback(
    (name) => {

      setUsername(name)
      
    },[],);
    
    const getUser =  useCallback(()=>{

      axios.get('https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/shazam%20kraiu?api_key=RGAPI-51f9d132-2254-4183-ac83-57c14e0b0972')
      .then((res)=>{
       var infos =  res.data
       updateData(infos)
       console.log(infos)
      
      })
    })

    const getUserInfo = useCallback(()=>{
      axios.get('https://br1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/DT4xAg8YCEWfj8x0O4jGkRWueDTSOiyJyLvaht7XeKBP2Tg/top?count=3&api_key=RGAPI-51f9d132-2254-4183-ac83-57c14e0b0972')
      .then((res)=>{
        var mainInfos = res.data

        var mainsId = []

        for(let i = 0; i < mainInfos.length; i++) {

          mainsId.push(mainInfos[i].championId)
        }

        return setMains(mainsId)
      })
    })



  return (
    <GlobalContext.Provider
      value={{ data, updateUsername,updateData, getUser, getUserInfo, mains }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

function useGlobal() {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error('useGlobal must be used within an GlobalProvider');
  }

  return context;
}

export { GlobalProvider, useGlobal };