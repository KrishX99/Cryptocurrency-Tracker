import axios from 'axios';
import {useEffect , useState} from 'react'
import './App.css';
// import All from './components/All';
import PriceCard from './components/PriceCard';
import logo from './logo.png'

function App() {

  const [ticker, setTicker] = useState({
    low:0,
    high:0,
    last:0,
  });
  let screen = 'none';
  const [selected, setSelected] = useState('btcinr');
  const [currency, setCurrency] = useState([]);
  // const [info,setInfo] = useState({});

  async function fetchData(){
    screen = 'block';
    const {data} = await axios.get('https://nitinr-cors.herokuapp.com/https://api.wazirx.com/api/v2/tickers/');
    screen = 'none';
    // setInfo(data);
    setCurrency(Object.keys(data));
    setTicker(data[selected]);
  };

  //Call the API
  fetchData();
  function handleEvent(e){
    setSelected(e.target.value);
    fetchData();
    console.log(selected)
  }
  return (
    <div className = 'App'>
      <div className = 'navbar'>
        <img src={logo} width={100} height={100} />
        <span>Cryptocurrency Tracker</span>
        <select onChange = {handleEvent} className = 'select-css'>
          {
            currency.map(el => {
              return <option key={el}>{el}</option>
            })
          }
        </select>
      </div>

      {/* <div className="loading" style = {{display:screen}}>Loading...</div> */}

      <div className="price-container">
        <PriceCard type = 'low' price ={ticker.low}/>
        <PriceCard type = 'high' price = {ticker.high} />
        <PriceCard type = 'current' price = {ticker.last} />
      </div>

      {/* <All data = {info}/> */}


    </div>
  );
}

export default App;
