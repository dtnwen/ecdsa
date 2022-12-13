import { useState } from "react";
import server from "./server";
import verify from "./verify.js"

function Transfer({ address, setBalance }) {
  const [sendAmount, setSendAmount] = useState("");
  const [recipient, setRecipient] = useState("");
  const [privateKey, setPrivateKey] = useState("")

  const setValue = (setter) => (evt) => setter(evt.target.value); //get current value (typed)
// function setValue(setter) { // setter then will be passed as setState function
//  return function(evt) {
//    setter(evt.target.value)
//  } 
// }  

  async function transfer(evt) {
    evt.preventDefault();
    // const verifyx = verify(address, privateKey)
    try {
      const verifyx = verify(address, privateKey)
      if (verifyx === true) {
        try {
          const verifyx = verify(address, privateKey);
          const {
            data: { balance },
          } = await server.post(`send`, {
            sender: address,
            amount: parseInt(sendAmount),
            recipient,
          });
          setBalance(balance);
        } catch (ex) {
          alert(ex.response.data.message);
        }
      } else {
        alert('private key does not match')
      }
    } catch (err) {
      alert('private key does not match')
    }
  }

  return (
    <form className="container transfer" onSubmit={transfer}>
      <h1>Send Transaction</h1>

      <label>
        Send Amount
        <input
          placeholder="1, 2, 3..."
          value={sendAmount} //just store state sendAmount as default value
          onChange={setValue(setSendAmount)} // set SendAmmout state to value
          // so when type in input, SendAmount state change which change the intial value of input
        ></input>
      </label>

      <label>
        Recipient
        <input
          placeholder="Type an address, for example: 0x2"
          value={recipient}
          onChange={setValue(setRecipient)}
        ></input>
      </label>

      <label>
        Private key
        <input placeholder="Type your private key" value={privateKey} onChange={setValue(setPrivateKey)}></input>
      </label>

      <input type="submit" className="button" value="Transfer" />
    </form>
  );
}

export default Transfer;
