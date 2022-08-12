import { useWeb3React } from "@web3-react/core";

export default function ConnectWalletButton({ setShowModal }) {
  const { active, account, activate, deactivate } = useWeb3React();

  return (
    <>
      <button
        onClick={() => {
          if (active) {
            if (window.confirm("Do you want to logout?")) deactivate();
          } else {
            setShowModal(true);
          }
        }}
        className="btn">
        {active
          ? "Connected: " +
            account.substring(0, 4) +
            "..." +
            account.substring(38)
          : "Connet Wallet"}
      </button>
    </>
  );
}
