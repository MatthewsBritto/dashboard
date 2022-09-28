import { useEffect } from "react"
import { useGlobal } from "../hooks/global"

export default Header




function Header(){

    const {username} = useGlobal()
/* 
    useEffect(()=>{
        if(!!username){
            alert('Ja foi')
        }
    },[username]) */

    return (
        <header className="marginDefault">
            <ul className='links'>
            <li className='active'>Geral</li>
            <li>Partidas</li>
            <li>link</li>
            <li>link</li>
            <li>link</li>
        </ul>
       </header>
    )
}