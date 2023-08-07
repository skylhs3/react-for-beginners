import {useState, useEffect} from "react";

function App() {
    const [loding, setLoding] = useState(true);
    const [coins, setCoins] = useState([]);
    const [myMoney, setMyMoney] = useState(0);
    const [exCoin, setExCoin] = useState(0);

    useEffect(() => {
      fetch("https://api.coinpaprika.com/v1/tickers")
      .then(response => response.json())
      .then(json => {
        setCoins(json);
        setLoding(false);
        if(json && json[0]){
          setExCoin(json[0].quotes.USD.price);
        }
      });
    },[]);

    const onChange = (event) => {
      setMyMoney(event.target.value);
    };

    const onChangeSelect = (event) => {
      console.log(event.target.value);
      setExCoin(event.target.value);
    }

    console.log(`myMoney : ${myMoney}`);
    console.log(`exCoin : ${exCoin}`);

  return (
    <div>
      <h1>The Coins {loding?"": `(${coins.length})`}</h1>
      {loding ? <strong>Loding...</strong> : (
        <form>
          <input type="number" onChange={onChange} placeholder="money that you want to exchange" value={myMoney} />
          <select onChange={onChangeSelect}>
          {coins.map((coin) => (
            <option value={coin.quotes.USD.price} key={coin.id} >
              {coin.name} ({coin.symbol}) : {coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
        <hr/>
        <h3>Your Coins : {myMoney && myMoney!=="0" ?(myMoney/exCoin).toFixed(2):""}</h3>
        </form>
      ) }
      
    </div>
  );
}

export default App;
