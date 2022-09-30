import positionImage from '../assets/ranked-positions/Position_Plat-Top.png'

export default Position

function Position(){
    return  (
        <div className="favPosition">
            <div className="imgPosi">
                <img src={positionImage}/>
            </div>
            <div className="descPosi">
                <h3>
                    
                </h3>
            </div>
        </div>
    )
}