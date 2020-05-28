import React from 'react';
import Header from './Header'
import Card1 from './Card1'
import Card2 from './Card2'
import Card2a from './Card2a'
import Card3 from './Card3'
import './styles/App.css';


import Supervisor from './images/icon-supervisor.svg'
import TeamBuilder from './images/icon-team-builder.svg'
import karma from './images/icon-karma.svg'
import Calculator from './images/icon-calculator.svg'
const line1 = 'Reliable, efficient delivery'
const line2 = 'Powered by Technology'
const line3 = 'Our Artificial Intelligence powered tools use million of project data points to ensure that your project is successful'
const info1 = 'Monitors acitivity to identify project roadblocks'
const info2 = 'Scans our talent network to create the optimal team for your project'
const info3 = 'Regularly evaluate our talent to ensure quality'
const info4 = 'Uses data from past projects to provide better delivery estimates'


function App() {
  return (
    <>
      <Header text1={line1} text2={line2} text3={line3} />
      <div className='Body'>
        <Card1 title='Supervisor' info={info1} name={Supervisor} />
        <div className='Vertical'>
          <Card2 title='Team Builder' info={info2} name={TeamBuilder} />
          <Card2a title1='Karma' info1={info3} name1={karma} />
        </div>
        <Card3 title='Calculator' info={info4} name={Calculator} />
      </div>

    </>

  );
}

export default App;
