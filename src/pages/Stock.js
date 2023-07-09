import React, { useEffect, useRef, useState } from 'react'
import Plot from 'react-plotly.js';
import { API_CLIENT } from '../services/API_CLIENT';
import StockTable from '../components/StockTable';

const Stock = () => {
  const [xStockChart, setxStockChart] = useState([]);
  const [yStockChart, setyStockChart] = useState([]);
  const [search, setSearch] = useState("")
  const [closeData, setCloseData] = useState([]);
  
  const inputRef = useRef(null);

  useEffect(() => {
    const API_key = 'A5383HUKTJVPPP4H';
    const stockChartXValueFunction = [];
    const stockChartYValueFunction = [];
    const stockCloseData = [];
   

    const URL = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${search}&outputsize=compact&apikey=${API_key}`
    const promise = API_CLIENT.get(URL)
    promise.then(result => {
      console.log(result.data)
      for (var key in result.data['Time Series (Daily)']) {
        stockChartXValueFunction.push(key)
        stockChartYValueFunction.push(result.data['Time Series (Daily)']
        [key]['1. open'])
        stockCloseData.push(result.data['Time Series (Daily)'][key]['4. close'])
        
      }

      setxStockChart(stockChartXValueFunction)
      setyStockChart(stockChartYValueFunction)
      setCloseData(stockCloseData)
      
    })
      .catch(err => {
        console.log(err)
      })
  }, [search])

  const handleRef = (event) => {
    event.preventDefault();
    console.log(inputRef.current.value.toUpperCase().toLocaleS)
    setSearch(inputRef.current.value.trim().toUpperCase().slice(0, 14))
  }

  return (
    <div className='text-center bg-gradient'>
      <div className='text-light bg-dark'>
        <h1 className='text-light p-4 bg-dark'>Stock Market <span className='text-danger'>Tracking</span> App</h1>
        <br />
        <form >
          <input className='text-secondary  p-3 rounded form-control container bg-dark' type='search' placeholder='Enter a Valid Stock Symbol' ref={inputRef} />
          <br />
          <button className=' btn btn-outline-secondary p-3 ' onClick={handleRef}> Search </button>
        </form>
        <br />
        <br />
      </div>
      <br />
      <br />
      <div className='bg-success d-inline-flex d-flex justify-content-evenly border border-success . border-4 rounded-3'>
        <Plot
          data={[
            {
              x: xStockChart,
              y: yStockChart,
              type: 'scatter',
              mode: 'lines+markers',
              marker: { color: '#3EB489' },
            },
          ]}
          layout={{ width: 720, height: 400, title: `Stock Chart: ${search.slice(0, 4)}` }}
        />
      </div>
      <br />
      <br />
      <div className='container'>
        <table className="table mt-5 p-3 mb-2 mx-auto bg-dark text-success table-secondary table-striped table-bordered " >
          <thead>
            <tr>
              <th>Date</th>
              <th>Open</th>
              <th>Close</th>
            </tr>
          </thead>
          <tbody>
            <StockTable date={xStockChart[0]} open={yStockChart[0]} close={closeData[0]} />
            <StockTable date={xStockChart[1]} open={yStockChart[1]} close={closeData[1]} />
            <StockTable date={xStockChart[2]} open={yStockChart[2]} close={closeData[2]} />
            <StockTable date={xStockChart[3]} open={yStockChart[3]} close={closeData[3]} />
            <StockTable date={xStockChart[4]} open={yStockChart[4]} close={closeData[4]} />
          </tbody>
        </table>
        <br />
      </div>
    </div>
  )
}
export default Stock