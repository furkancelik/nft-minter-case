import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import MetamaskProvider from "./Components/MetamaskProvider";
function getLibrary(provider) {
  return new Web3Provider(provider);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Web3ReactProvider getLibrary={getLibrary}>
    <MetamaskProvider>
      <App />
    </MetamaskProvider>
  </Web3ReactProvider>
);
