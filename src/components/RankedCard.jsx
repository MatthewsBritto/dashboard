export default RankedCard 

function RankedCard(){
    return (
        <div className='main__Card marginDefault'>
            <div className='winPerc'>
                <h2>Ranked Perform</h2>
                <div className="graph">
                    <h4>Winrate</h4>
                    <h3>50.0%</h3>
                </div>
            </div>
            <div className="winRanked">
                <h3 className='winMatchs'>
                    <h4>Wins</h4>
                    <p>500</p>
                </h3>
                <h3 className='loseMatchs'>
                    <h4>Loses</h4>
                    <p>499</p>
                </h3>
            </div>
        </div>
    )
}