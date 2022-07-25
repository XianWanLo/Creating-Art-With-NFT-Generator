import {pinJSONToIPFS, pinFileToIPFS} from './pinata.js'

//set up Alchemy Web3 endpoint
require('dotenv').config();
const alchemyKey = process.env.REACT_APP_ALCHEMY_KEY;
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(alchemyKey);

const contractABI = require('../contract-abi.json')
const contractAddress = "0xA10A93F2ec836aF72A720b1F137Afcfe940eA11E";

//receive data from fronted
export const mintNFT = async(image, name, description) => {
 //error handling
// if (url.trim() == "" || (name.trim() == "" || description.trim() == "")) {
//        return {
//            success: false,
//            status: "❗Please make sure all fields are completed before minting.",
//        }
//  }
  //1. image to IPFS
  const pinataResponse1 = await pinFileToIPFS(image)
  if (!pinataResponse1.success) {
    return {
      success: false,
      status: "😢 Something went wrong while uploading your image.",
    }
  }

  //2. metadata to IPFS
  const metadata = new Object();
  metadata.name = name;
  metadata.url = pinataResponse1.pinataUrl;;
  metadata.description = description;

  const pinataResponse2 = await pinJSONToIPFS(metadata);
  if (!pinataResponse2.success) {
      return {
          success: false,
          status: "😢 Something went wrong while uploading your tokenURI.",
      }
  }
  const tokenURI = pinataResponse2.pinataUrl;

  //load smart contract
  window.contract = await new web3.eth.Contract(contractABI, contractAddress);

  //set up Ethereum transaction
  const transactionParameters = {
          to: contractAddress,
          from: window.ethereum.selectedAddress,
          'data': window.contract.methods.mintNFT(window.ethereum.selectedAddress, tokenURI).encodeABI()//make call to NFT smart contract
  };

//sign the transaction via Metamask
 try {
    const txHash = await window.ethereum
        .request({
            method: 'eth_sendTransaction',
            params: [transactionParameters],
        });


    return {
        success: true,
        NFTname: metadata.name,
        NFTurl: metadata.url,
        NFTdescription: metadata.description,
        txHash: txHash,
    }
 } catch (error) {
    return {
        success: false,
        NFTname: "None",
        NFTurl: "None",
        NFTdescription: "None",
        txHash: "None",
    }
 }

}

export const connectWallet = async () => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const obj = {
        status: "Write a message in the text-field above.",
        address: addressArray[0],
      };
      return obj;
    } catch (err) {
      return {
        address: "",
        status: "😥 " + err.message,
      };
    }
  } else {
    return {
      address: "",
      status: (
        <span>
          <p>
            {" "}
            🦊{" "}
            <a target="_blank" href={`https://metamask.io/download.html`}>
              You must install Metamask, a virtual Ethereum wallet, in your
              browser.
            </a>
          </p>
        </span>
      ),
    };
  }
};

export const getCurrentWalletConnected = async () => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_accounts",
      });
      if (addressArray.length > 0) {
        return {
          address: addressArray[0],
          status: " ",
        };
      } else {
        return {
          address: "",
          status: "Please Connect to Metamask",
        };
      }
    } catch (err) {
      return {
        address: "",
        status: "😥 " + err.message,
      };
    }
  } else {
    return {
      address: "",
      status: (
        <span>
          <p>
            {" "}
            🦊{" "}
            <a target="_blank" href={`https://metamask.io/download.html`}>
              You must install Metamask, a virtual Ethereum wallet, in your
              browser.
            </a>
          </p>
        </span>
      ),
    };
  }
};