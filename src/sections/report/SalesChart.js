
import React, {Component} from 'react'
import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const SalesViz = ({data}) => {

      let series=[]
      let categories=data[0].payload.map(e=>e.fdate.split('T')[0])
      data.map(e=>{
          series.push({name:e.store.bname,data:e.payload.map(d=>d.actual_total)})
          
      })


      let state = {
        options: {
          chart: {
            id: "Sales Chart"
          },
          xaxis: {
            categories: categories
          },
        },
        series: series,
     
      };
    
    
      
      return (
        <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={state.options}
              series={state.series}
              type="bar"
              width='100%'
            />
          </div>
        </div>
      </div>
        )
}

export default SalesViz



/*

import React, {Component} from 'react'
import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const ExpenditureViz = ({data}) => {
      console.log(data)
      let series=[]
      let expenseComments=[]
      let categories=data[0].payload.map(e=>e.fdate.split('T')[0])
      console.log(expenseComments)
      data.map(e=>{
          series.push({name:e.store.bname,data:e.payload.map(d=>d.exp_total),expenseComments:e.payload.map(d=>d.exp_comments)})
      })


      let state = {
        options: {
          chart: {
            id: "Expense Report"
          },
          xaxis: {
            categories: categories
          },
          tooltip: {
            custom: {
              formatter: function(value, { series, seriesIndex, dataPointIndex, w }) {
                return <pre>{w.config.series[seriesIndex].expenseComments[dataPointIndex]}</pre>
              }
            },
          },
        },
        series: series,
     
      };
    
    
      
      return (
        <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={state.options}
              series={state.series}
              type="bar"
              width='100%'
            />
          </div>
        </div>
      </div>
        )
}

export default ExpenditureViz

*/