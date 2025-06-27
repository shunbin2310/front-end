import Nav from './Nav.jsx';
import { Route, Routes } from 'react-router-dom';
import About from './About.jsx';
import App from './App.jsx';
import Card from './Card.jsx';
import TestUseState from './TestUseState.jsx';
import PropsChild from './PropsChild.jsx';
import Menu from './Menu.jsx';

function Home(){
    return(
        <>
            <PropsChild name="bin" age={23}/>

            <p>Hello World</p>
            <h1>Nav Bar</h1>
            
            <Nav/>
                <Routes>
                    <Route path='/App' element={<App/>}/>
                    <Route path='/About' element={<About/>}/>
                    <Route path='/Card' element={<Card/>}/>
                    <Route path='/TestUseState' element={<TestUseState/>}/>
                    <Route path='/Menu' element={<Menu/>}/>
                </Routes>

            
        </>
    );
}

export default Home