import axios from "axios";
import { useEffect, useState } from "react";


const KEY = 'RGAPI-3daf5071-b4ac-4793-a5cd-68a70ff54c62'; 


function User() {
    
    
    const [infos , setInfos] = useState([])

    const nameUser = localStorage.getItem('user')

    useEffect(()=>{

        // axios.get('https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/shazam%20kraiu%20?api_key='+KEY)
        // .then(res=>{
        //     setInfos(res.data);
        // })
        setInfos()
    },[])
    
    
    return (
        <div className='user'>
            <div className='userIcon'>
                {/* {infos.profileIconId} */}
            </div>
            <h3 className="nameUser">
                {infos}
            </h3>
        </div>
    )
}

export default User;