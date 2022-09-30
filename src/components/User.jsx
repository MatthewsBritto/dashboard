import axios from "axios";
import { useEffect, useState } from "react";
import { useGlobal } from "../hooks/global";




function User() {
    const {data} = useGlobal()

    return (
        <div className='user'>
            <div className='userIcon'>
                {data.summonerLevel}
            </div>
            {data && <h3 className="nameUser">{data.name}</h3>} 
            
            {!data && <h3 className="nameUser">sem nome</h3>}
          
        </div>
    )
}

export default User;