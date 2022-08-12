import React, { useEffect, useState } from "react";
import { Injected } from "../utils/injected";
import { useWeb3React } from "@web3-react/core";

export default function MetamaskProvider({ children }) {
  const { active, error, activate } = useWeb3React();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    Injected.isAuthorized()
      .then((isAuthorized) => {
        setLoaded(true);
        if (isAuthorized && !active && !error) {
          activate(Injected);
        }
      })
      .catch(() => {
        setLoaded(true);
      });
  }, [active, error, activate]);

  if (loaded) return children;
  return <>Loading</>;
}
