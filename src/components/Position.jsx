import positionImage from '../assets/ranked-positions/Position_Plat-Top.png'
import { useGlobal } from "../hooks/global";

export default Position


function Position(){

    const {data} = useGlobal()

    return  (
        <div className="favPosition">
            <div className="imgPosi">
                <img src={positionImage}/>
            </div>
            <div className="descPosi">
                <h3>
                    {data.id}
                </h3>
            </div>
        </div>
    )
}