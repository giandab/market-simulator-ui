"use client"
import {Line} from 'react-chartjs-2'
import Chart from 'chart.js/auto';

export default function LineChart(params) {
    const labels = params.dates;
const data = {
  labels: labels,
  datasets: [{
    label: 'Balance Over Time',
    data: params.balance,
//     options:{ 
//       scales:{
//         y:{scaleLabel: {
//    display: true,
//    text: "$",
//    fontColor: "rgb(255, 99, 132)",
//  }}
//         ,x:{scaleLabel: {
//    display: true,
//    text: "Date",
//    fontColor: "rgb(255, 99, 132)",
//  }}

//     }},
  options: {
    scales: {
      xAxes: [{
        type: 'time',
      }]
    }
  },
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(201, 203, 207, 0.2)'
    ],
    borderColor: [
      'rgb(255, 99, 132)',
    ],
    borderWidth: 1
  }]
};
console.log(params.dates)
console.log(params.balance)
    return(<Line data={data}></Line>)
}