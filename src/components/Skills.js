import React from 'react';
import {HorizontalBar} from 'react-chartjs-2';

const state = {
  labels: ['ReactJS','Semantic UI','React-MDL', '.NET Core', '.NET Framework',
           'LINQ', 'C#', 'Entity Framework','Unit testing','Android Development','HTML','CSS','SQL Server'],
  datasets: [
    {
      label: 'Skills',
      backgroundColor: 'white',
      borderColor: 'black',
      borderWidth: 2,
      fontColor:'white',
      data: [7.5,7.7,7.2,7.5,8,7.6,7.8,7.7,6.9,7,7.5,7.5,7.9]
    }
  ]
}

export default class Skills extends React.Component {
  render() {
    return (
      <div>
        <HorizontalBar
          data={state}
          options={{
            title:{
              display:true,
              text:'Skill Level',
              fontSize:20,
              fontColor:'white'
            },
            legend:{
              display:true,
              position:'left',
              labels:{fontColor:'white'}
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true,
                        fontColor: 'pink'
                    },
                }],
              xAxes: [{
                    ticks: {
                        fontColor: 'pink'
                    },
                }]
            } 
          }}
        />
      </div>
    );
  }
}