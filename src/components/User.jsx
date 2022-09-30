import axios from "axios";
import { useEffect, useState } from "react";
import { useGlobal } from "../hooks/global";




function User() {
    const {username} = useGlobal()

    return (
        <div className='user'>
            <div className='userIcon'>
                {/* {infos.profileIconId} */}
            </div>
            {username && <h3 className="nameUser">{username}</h3>} 
            
            {!username && <h3 className="nameUser">sem nome</h3>}
          
        </div>
    )
}

export default User;