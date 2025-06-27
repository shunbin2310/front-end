import { Link } from "react-router-dom";

function Nav(){
    return(
        <>
            <nav>
                <ul>
                    <li><Link to="/App">App</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <li><Link to="/Card">Card</Link></li>
                    <li><Link to="/TestUseState">Test Use State</Link></li>
                    <li><Link to="/Menu">Menu</Link></li>
                </ul>
            </nav>
            
        </>
        
    );  
}

export default Nav