
import React, {Component} from 'react'
import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const ExpenditureViz = ({data}) => {

      let series=[]
      let expenseComments=[]
      let categories=data[0].payload.map(e=>e.fdate.split('T')[0])
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
            custom: function({series, seriesIndex, dataPointIndex, w}) {
              return `<div class="apexcharts-tooltip-title" style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;">
                Expense Report
              </div>
              <div class="apexcharts-tooltip-series-group apexcharts-active" style="order: 1; display: flex;">
              <span class="apexcharts-tooltip-marker" style="background-color: rgba(0, 143, 251, 0.85);"></span>
              <div class="apexcharts-tooltip-text" style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;">
              <div class="apexcharts-tooltip-y-group">
              <span class="apexcharts-tooltip-text-y-label">`+w.config.series[seriesIndex].name+`:</span>
              <span class="apexcharts-tooltip-text-y-value">
              <pre>`+w.config.series[seriesIndex].expenseComments[dataPointIndex]+`</pre>
              </span></div>
              <div class="apexcharts-tooltip-goals-group">
              <span class="apexcharts-tooltip-text-goals-label"></span>
              <span class="apexcharts-tooltip-text-goals-value"></span></div>
              <div class="apexcharts-tooltip-z-group">
              <span class="apexcharts-tooltip-text-z-label"></span>
              <span class="apexcharts-tooltip-text-z-value"></span></div></div></div>`
            }
          }
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