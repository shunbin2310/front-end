import Nav from './Nav.jsx';
import { Route, Routes } from 'react-router-dom';
import About from './About.jsx';
import App from './App.jsx';
import Card from './Card.jsx';

function Home(){
    return(
        <>
            <p>Hello World</p>
            <h1>Nav Bar</h1>
            <Nav/>
            <Routes>
                <Route path='/App' element={<App/>}/>
                <Route path='/About' element={<About/>}/>
                <Route path='/Card' element={<Card/>}/>
            </Routes>
        </>
    );
}

export default Home