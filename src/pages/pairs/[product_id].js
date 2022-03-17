import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import LineGraph from '../../components/LineGraph';

const Dashboard = () => {

  const router = useRouter()
  const [pairData, setPairData] = useState([]);
  const [liveData, setLiveData] = useState([]);

  useEffect(() => {
    const product_id = router.query.product_id;
    console.log(product_id)
    if(product_id !== undefined){
      const API_ENDPOINT = `https://api.exchange.coinbase.com/products/${product_id}/ticker`;
      fetch(API_ENDPOINT)
        .then(response => response.json())
        .then(data => {
          console.log(data)
          setPairData(data);
        })
        .catch(error => {
          console.log("Error Fetching API Data", error);
        })
    }
  }, [])

  const data={
    labels: ['Jun', 'Jul', 'Aug'],
    datasets: [
      {
        id: 1,
        label: '',
        data: [5, 6, 7],
      },
      {
        id: 2,
        label: '',
        data: [3, 2, 1],
      },
    ],
  }


  return (
    <div className="h-screen w-screen">
      <div className="border-2 flex flex-row">
        <div className="border-2 flex-1 h-12"> Currency Pair </div>
        <div className="border-2 flex-1 h-12"> Price </div>
        <div className="border-2 flex-1 h-12"> Bid </div>
        <div className="border-2 flex-1 h-12"> Ask </div>
      </div>
      <div className="border-2 flex flex-row">
        <div className="border-2 flex-1 h-12"> {router.query.product_id} </div>
        <div className="border-2 flex-1 h-12"> {pairData.price} </div>
        <div className="border-2 flex-1 h-12"> {pairData.bid} </div>
        <div className="border-2 flex-1 h-12"> {pairData.ask} </div>
      </div>
      {pairData === [] ? null : <LineGraph data={data}  />} 
    </div>

  )



  /*

  - currency pair
  - currency pair image
  - price
  - bid
  - ask


  y-axis price 
  x-axis minute 
  

   
  */




}

export default Dashboard;