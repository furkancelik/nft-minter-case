import { useEffect, useState } from "react";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";

import { useWeb3React } from "@web3-react/core";

import { ReactComponent as MetaMaskIconSvg } from "../assets/svg/metamask-icon.svg";
import { ReactComponent as WalletConnectIconSvg } from "../assets/svg/walletconnect-icon.svg";

import { Injected } from "../utils/injected";

export default function WalletConnectModal({ showModal, setShowModal }) {
  const { active, error, account, activate } = useWeb3React();

  if (showModal) {
    return (
      <div
        onClick={() => {
          setShowModal(false);
        }}
        className="modal-bg">
        <div className="modal-inner" onClick={(e) => e.stopPropagation()}>
          <div>
            <div
              className="text-center border-b-2 border-gray-900 pt-5 pb-6 cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                activate(Injected);
                setShowModal(false);
              }}>
              <MetaMaskIconSvg width={48} className={"m-auto mb-2"} />
              <p className={"text-xl"}>Metamask</p>
            </div>

            <div
              className="text-center  pt-6 pb-5 cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                alert("Not Active!!!");
              }}>
              <WalletConnectIconSvg width={64} className={"m-auto mb-2"} />
              <p className={"text-xl"}>Connect Wallet</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return null;
}
