import Header from './Menu';
import MainCard from './MainCard';
import '../App.css';
import RankedCard from './RankedCard';
import User from './User';
import Other from './Others';
import Position from './Position';
import Form from './Form'
import { useGlobal } from '../hooks/global';




function Container() {

    return (
    <div className='container'>
        <Header/>
        <MainCard/>
        <RankedCard/>
        <User/>
        <Other/>
        <Position/>
        <Form />
    </div>
        
    )
}


export default Container;