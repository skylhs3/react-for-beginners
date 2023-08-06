import {useState, useEffect} from "react";

function App() {
    const [loding, setLoding] = useState(true);
    const [coins, setCoins] = useState([]);
    const [myMoney, setMyMoney] = useState(0);

    useEffect(() => {
      fetch("https://api.coinpaprika.com/v1/tickers")
      .then(response => response.json())
      .then(json => {
        setCoins(json);
        setLoding(false);
      });
    },[]);

    const onChange = (event) => {
      setMyMoney(event.target.value);
    };

  return (
    <div>
      <h1>The Coins {loding?"": `(${coins.length})`}</h1>
      {loding ? <strong>Loding...</strong> : (
        <form>
          <input type="text" onChange={onChange} placeholder="money that you want to exchange" value={myMoney} />
          <select>
          {coins.map((coin) => (
            <option>
              {coin.name} ({coin.symbol}) : {coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
        <hr/>
        <h3>Your money : {myMoney}</h3>
        </form>
      ) }
      
    </div>
  );
}

export default App;
