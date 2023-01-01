
import React, {Component} from 'react'
import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const RevenueViz = () => {

      let state = {
        options: {},
        series: [44, 55, 41, 17, 15],
        labels: ['A', 'B', 'C', 'D', 'E']
      }
    
      
      return (
            <div id="revenue">
              <Chart options={state.options} series={state.series} type="donut" width="380" />
            </div>
        )
}

export default RevenueViz