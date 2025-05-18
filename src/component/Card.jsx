import picture from '../assets/download.jpg';

function Card(){
    return(
        <div className="card">
            <img alt='profile' src={picture}></img>
            <h2>Hi World</h2>
            <p>I make youtube videos and Im fine</p>
        </div>
    );
}

export default Card