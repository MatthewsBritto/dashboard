import { useState } from "react"
import { useGlobal } from "../hooks/global";


function Form() {
    
    const [text , setText ]= useState([""]);
    const [name, setName ]= useState("")
    
    const { updateUsername } = useGlobal()
    function hadleChange(event){
        
        let t = event.target.value;

        setText(t);
    }
    
    function getName(event) {

        setName(text);
        updateUsername(text);
        setText("")   
    }

    return  (
        <div className="form">
            <input type="text" placeholder='Nome do Invocador' onChange={hadleChange} value={text}/>
            <button type="submit" onClick={getName}>Pesquisar</button>
    </div>
    )
}
export default Form