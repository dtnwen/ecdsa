import Wallet from "./Wallet";
import Transfer from "./Transfer";
import "./App.scss";
import { useState } from "react";

function App() {
  const [balance, setBalance] = useState(0); // store balance 
  const [address, setAddress] = useState(""); // store address

  return (
    <div className="app">
      <Wallet // just pass state as prop to Wallet 
        balance={balance}
        setBalance={setBalance}    
        address={address}
        setAddress={setAddress}
      />
      <Transfer 
        setBalance={setBalance} address={address} 
      />
    </div>
  );
}

export default App;
