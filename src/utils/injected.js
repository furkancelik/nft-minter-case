import { InjectedConnector } from "@web3-react/injected-connector";
import { NetworkConnector } from "@web3-react/network-connector";

import { pinJSONToIPFS } from "./pinata.js";
//alchemy eklediğinde hata veriyor. :(((
// const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
// const alchemyKey = process.env.REACT_APP_ALCHEMY_KEY;
// const web3 = createAlchemyWeb3(alchemyKey);

export const contractABI = require("../contract-abi2.json");

export const contractAddress = "0xC68c6266BA08c63BD71fEbaaEFb62a7c61bB38F3";

export const Injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42, 56, 97],
});

export const network = new NetworkConnector({
  urls: {
    97: "https://data-seed-prebsc-1-s1.binance.org:8545",
  },
  defaultChainId: 1,
});

export const mintNFT = async (url, name, description) => {
  //Moralis ile mint etmeyi denediğimde de hata alıyorum.
  // try {
  //   // Attempt to save image to IPFS
  //   const file1 = new Moralis.File(file.name, file);
  //   console.log(file.name);
  //   console.log(file1);
  //   await file1.saveIPFS();
  //   const file1url = file1.ipfs();
  //   // Generate metadata and save to IPFS
  //   const metadata = {
  //     name,
  //     description,
  //     image: file1url,
  //   };
  //   const file2 = new Moralis.File(`${name}metadata.json`, {
  //     base64: Buffer.from(JSON.stringify(metadata)).toString("base64"),
  //   });
  //   await file2.saveIPFS();
  //   const metadataurl = file2.ipfs();
  //   // Interact with smart contract
  //   const contract = new web3.eth.Contract(contractABI, contractAddress);
  //   const response = await contract.methods
  //     .mint(metadataurl)
  //     .send({ from: account });
  //   // Get token id
  //   const tokenId = response.events.Transfer.returnValues.tokenId;
  //   // Display alert
  //   alert(
  //     `NFT successfully minted. Contract address - ${contractAddress} and Token ID - ${tokenId}`
  //   );
  // } catch (err) {
  //   console.error(err);
  //   alert("An error occured!");
  // }
};
