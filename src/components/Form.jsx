import { useState } from "react"


function Form() {
    
    const [text , setText ]= useState([""]);
    const [name, setName ]= useState("")
    
    function hadleChange(event){
        
        let t = event.target.value;

        setText(t);
    }
    
    function getName(event) {

        setName(text);
        localStorage.setItem('user',text);
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