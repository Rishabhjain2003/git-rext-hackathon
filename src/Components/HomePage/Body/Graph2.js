import React, { useCallback, useEffect, useState } from 'react'
// import { Typography } from '@material-ui/core'
// import NButton from '../../utilitiesComponents/uiComponents/formComponents/button'
// import AddEditPopUp from './addEditPopUp'
import Plot from 'react-plotly.js';
import Select from '@material-ui/core/Select/Select';
import MenuItem from '@material-ui/core/MenuItem/MenuItem';



const options = [
  { name: 'Microsoft Corporation', value: 'MSFT' },
  { name: 'Wal-Mart Stores, Inc.', value: 'WMT' },
  { name: 'J.P. Morgan Chase & Co.', value: 'JPM' },
  { name: 'Intel Corporation', value: 'INTC' },
  { name: 'QUALCOMM Incorporated', value: 'QCOM' },
  { name: 'Goldman Sachs Group, Inc. (The)', value: 'GS' }
];



function StockPlot(props) {
  const apiKey = 'T8VT6HZCDDDJRUK7'
  
  const [stockChartXValues, setStockChartXValues] = useState([])
  const [stockChartYValues, setStockChartYValues] = useState([])
  // const [stockData, setStockData] = useState({})
  const [company, setCompany] = useState(options[0])
  const [isLoading, setLoading] = useState(false)






  const fetchStock = useCallback(() => {
    let alphavantagePathDailyAdjusted = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${company.value}&interval=5min&outputsize=full&apikey=${apiKey}`
    let stockChartXValuesData = [];
    let stockChartYValuesData = [];
    setLoading(true)
    fetch(alphavantagePathDailyAdjusted).then((response) => {
      const result = response.json();
      return result;
    }).then((data) => {
      console.log(data)
      for (var key in data['Time Series (5min)']) {
        stockChartXValuesData.push(key);
        stockChartYValuesData.push(data['Time Series (5min)'][key]['1. open'])
      }
      setStockChartXValues(stockChartXValuesData)
      setStockChartYValues(stockChartYValuesData)
      // setStockData(data)
    }).catch((err) => {
      console.log(err)
    })
      .finally(setLoading(false))
  }, [company.value])



 useEffect(() => {
    fetchStock();
  }, [fetchStock])



 const handleCompanyChange = (e) => {
    const selectedOption = options.filter(obj => {
      return obj.value === e.target.value;
    });
    setCompany({
      name: selectedOption[0].name,
      value: e.target.value
    })
  }
  
  const result = (
    <div>
      <div>
        <Select
          name={company.name}
          value={company.value}
          onChange={handleCompanyChange}
        >
          {options?.map(option => {
            return (
              <MenuItem key={option.value} value={option.value}>
                {option.name ?? option.value}
              </MenuItem>
            );
          })}
        </Select>
      </div>
      <div>
        {!isLoading &&
          <Plot
            data={[
              {
                x: stockChartXValues,
                y: stockChartYValues,
                type: 'scatter',
                mode: 'lines+markers',
                marker: { color: 'red' },
              }
            ]}
            layout={{ width: 720, height: 440, title: company.name }}
          />
        }
      </div>
   </div>
  )
  return result
}

export default StockPlot;