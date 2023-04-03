import server from "./server";

function Wallet({ address, setAddress, balance, setBalance }) {
  async function onChange(evt) {
    const address = evt.target.value; //local var address - get value of input
    setAddress(address); //change address state to above local address
    if (address) { 
      const {
        data: { balance }, //recieve data object from server (by destructuring syntax) then extract balance and assign it to local 'balance' var
      } = await server.get(`balance/${address}`); 
// other way to write this
//    const response = await server.get(`balance/${address}`);
//    const balance = response.data.balance
      setBalance(balance); //set balance state to balance var assigned above
    } else {
      setBalance(0); //if address is falsy then set balance to 0
    }
  }

  return (
    <div className="container wallet">
      <h1>Your Wallet</h1>

      <label>
        Wallet Address
        <input placeholder="Type an address, for example: 0x1" value={address} onChange={onChange}></input>
      </label>                                                {/*set intial value of input */} 

      

      <div className="balance">Balance: {balance}</div>
    </div>
  );
}

export default Wallet;
