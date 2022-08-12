import { useEffect, useState } from "react";

import { useWeb3React } from "@web3-react/core";

import { mintNFT } from "./utils/injected";

import ConnectWalletButton from "./Components/ConnectWalletButton";
import WalletConnectModal from "./Components/WalletConnectModal";

function App() {
  const { active, error, account, activate } = useWeb3React();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);

  const [showModal, setShowModal] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    mintNFT();
  };

  return (
    <>
      <div className="container mx-auto mt-4">
        <div className="text-right">
          <ConnectWalletButton setShowModal={setShowModal} />
          <WalletConnectModal
            setShowModal={setShowModal}
            showModal={showModal}
          />
        </div>
      </div>

      <div className="w-[60%]  mx-auto mt-20 items-center justify-center">
        <h3 className="text-white text-4xl font-bold my-10 text-center">
          NFT Minter Case
        </h3>
        <form onSubmit={onSubmit}>
          <div>
            <input
              type="text"
              className="border-[1px] p-2 text-lg border-black w-full"
              value={name}
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mt-3">
            <input
              type="text"
              className="border-[1px] p-2 text-lg border-black w-full"
              value={description}
              placeholder="Description"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="mt-3">
            <input
              type="file"
              className="border-[1px] p-2 text-lg border-black"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <button
            disabled={!active}
            type="submit"
            className={`mt-5 w-full p-5 bg-purple-800 text-white text-lg rounded-xl ${
              !active ? " opacity-50 cursor-not-allowed" : ""
            } `}>
            MINT NOW!
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
