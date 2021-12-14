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
          'rgba(47, 219, 215)',
          'rgba(218,47,50)',
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

  return <Doughnut data={data} options={options} />
}

export default DoughnutChart