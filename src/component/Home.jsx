import Nav from './Nav.jsx';
import { Route, Routes } from 'react-router-dom';
import About from './About.jsx';
import App from './App.jsx';
import Card from './Card.jsx';
import TestUseState from './TestUseState.jsx';
import PropsChild from './PropsChild.jsx';

function Home(){
    return(
        <>
            <p>Hello World</p>
            <h1>Nav Bar</h1>
            <PropsChild name="bin" age={23}/>
            <Nav/>
            <Routes>
                <Route path='/App' element={<App/>}/>
                <Route path='/About' element={<About/>}/>
                <Route path='/Card' element={<Card/>}/>
                <Route path='/TestUseState' element={<TestUseState/>}/>
            
            </Routes>
        </>
    );
}

export default Home