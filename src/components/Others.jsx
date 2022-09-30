import { useGlobal } from "../hooks/global";


function Other(){

     const {mains} = useGlobal();

    return (
        <div className="mains">
            <div className="secMain">
                <h3>{mains[1]}</h3>
                <p>Second main Name</p>
            </div>
            
            <div className="trMain">
                <h3>{mains[2]}</h3>
                <p>Third main Name</p>
            </div>
        </div>
    )
}
    export default Other