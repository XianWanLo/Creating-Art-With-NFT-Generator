import { useEffect, useState, useRef } from "react";
import { connectWallet, getCurrentWalletConnected, mintNFT } from "./utils/interact.js";
import { useNavigate} from "react-router-dom";

const Minter = (props) => {
  const navigate = useNavigate();

  //State variables
  const [walletAddress, setWallet] = useState("");
  const [status, setStatus] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const imageRef = useRef();


  function addWalletListener() {
  if (window.ethereum) {
    window.ethereum.on("accountsChanged", (accounts) => {
      if (accounts.length > 0) {
        setWallet(accounts[0]);
        setStatus(" Write a message in the text-field above.");
      } else {
        setWallet("");
        setStatus(" Connect to Metamask.");
      }
    });
  } else {
    setStatus(
      <p>
        {" "}
        🦊{" "}
        <a target="_blank" href={`https://metamask.io/download.html`}>
          You must install Metamask, a virtual Ethereum wallet, in your
          browser.
        </a>
      </p>
    );
  }
}
 
  useEffect(async () => {
      const {address, status} = await getCurrentWalletConnected();
      setWallet(address)
      setStatus(status);
      addWalletListener();
  }, []);

  const connectWalletPressed = async () => {
    const walletResponse = await connectWallet();
    setStatus(walletResponse.status);
    setWallet(walletResponse.address);
  };

  const onMintPressed = async () => {

  const { success, NFTname, NFTurl, NFTdescription } = await mintNFT(image, name, description);
  
  if (success) {
      navigate('/display', {
        state: {
          NFTname: NFTname,
          NFTurl: NFTurl,
          NFTdescription: NFTdescription,
        }
      });
  };
  

  };

  return (
    <div className="Minter">
      <button id="walletButton" onClick={connectWalletPressed}>
        {walletAddress.length > 0 ? (
          "Connected: " +
          String(walletAddress).substring(0, 6) +
          "..." +
          String(walletAddress).substring(38)
        ) : (
          <span>Connect Wallet</span>
        )}
      </button>

      <br></br>
      <h1 id="title"> NFT Minter </h1>
      <form>
        <h2>Upload Image: </h2>
        <input type="file" onChange={(event) => setImage(event.target.files[0])} required />
        <h2>The Name of the NFT: </h2>
        <input
          type="text"
          onChange={(event) => setName(event.target.value)}
        />
        <h2>The Description of the NFT: </h2>
        <input
          type="text"
          onChange={(event) => setDescription(event.target.value)}
        />
      </form>
      <button id="mintButton" onClick={onMintPressed}>
        Mint NFT
      </button>
      <p id="status">
        {status}
      </p>
    </div>
  );
};

export default Minter;
