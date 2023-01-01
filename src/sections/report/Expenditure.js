
import React, {Component} from 'react'
import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const ExpenditureViz = ({data}) => {

      let series=[]
      let expenseComments=[]
      let categories=data[0].payload.map(e=>e.fdate.split('T')[0])
      data.map(e=>{
          series.push({name:e.store.bname,data:e.payload.map(d=>d.exp_total)})
          expenseComments.push({name:e.store.bname,data:e.payload.map(d=>d.exp_comments)})
      })


      let state = {
        options: {
          chart: {
            id: "Expense Report"
          },
          xaxis: {
            categories: categories
          }
        },
        series: series,
        tooltip: {
          custom: function({series, seriesIndex, dataPointIndex, w}) {
            return '<div class="arrow_box">' +
              '<span>' + expenseComments[dataPointIndex] + '</span>' +
              '</div>'
          }
        }
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
