import React, {useState} from 'react'
import { Doughnut } from 'react-chartjs-2'

function DoughnutChart({ score, questions }) {
    const wrongAnswers = (questions.length - score)
    const data = {
    labels: ['Correct', 'Wrong'],
    datasets: [
      {
        label: 'Scores',
        data: [`${score}`,`${wrongAnswers}`],
        backgroundColor: [
          '#4884bd',
          '#ad3131',
        ]
      }
    ]
  }

  const options = {
        circumference: 60 * Math.PI,
        rotation: 85 * Math.PI,
    title: {
      display: true,
      text: 'Doughnut Chart'
    }
  }

  return (
  <div className="chart">
    <Doughnut data={data} options={options} />
  </div>
  
  )}

export default DoughnutChart