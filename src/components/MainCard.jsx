
function MainCard(){
    return(
        <div className='main__Card marginDefault'>
            <div className='mainInf'>
            <div className='mainName'>
                <h3>Main Champion</h3>
                <h2>Yasuo</h2>
            </div>
            <ul>
                <li className='stat'>
                <h4>Win ratio</h4>
                <p>50.0%</p>
                </li>
                <li className='stat'>
                <h4>K/D ratio</h4>
                <p>50.0%</p>
                </li>
                <li className='stat'>
                <h4>Win rate</h4>
                <p>50.0%</p>
                </li>
            </ul>
            </div>
            <div className='mainImg'>
            <h2>Main photo</h2>
            </div>
      </div>
    )
}
export default MainCard;