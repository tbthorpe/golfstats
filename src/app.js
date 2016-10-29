import Chart from 'chart.js';
import $ from 'jquery';
import { tim } from './data.js'

$(document).ready(() => {
    var ctx = document.getElementById("myChart");
    console.log(ctx);
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: tim.labels,
            datasets: [{
                label: 'Strokes above Par',
                data: tim.data,
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });
});
