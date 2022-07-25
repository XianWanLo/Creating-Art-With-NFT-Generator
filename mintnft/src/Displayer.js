import {useLocation} from "react-router-dom"

const Displayer = () => {

    const location = useLocation();

    return (
        <div className="Minter">
        <br></br>
        <h1 id="title"> Fresh Minted NFT! </h1>
        <form>
            <h2>NFT</h2>
            <img src={location.state.NFTurl} classname="image" alt=""/> : <h3>none!</h3>
            <h2>The Name of the NFT:{location.state.NFTname} </h2> : <h2>none!</h2>
            <h2>The Description of the NFT: {location.state.NFTdescription}</h2> : <h2>none!</h2>
            <button onClick={() => window.open('http://afternoon-env.eba-q4ub6hff.us-east-1.elasticbeanstalk.com/', '_blank')} >Click me back to Ai art generator!~</button>
        
        </form>
        </div>
      );






      
};

export default Displayer;
