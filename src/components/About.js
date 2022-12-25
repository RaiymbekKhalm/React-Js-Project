import React, { Component } from 'react'

export class About extends Component {
  render() {
    return (
      <div>
        <br></br><br></br><br></br>
        <div className='aboutContent'>

          <div className='aboutDesc'>
            <img src="./img/Oxygen.jpeg" className='imgRight'/>
            <div className='aboutcon-left'>
              <h4>Improve air quality.</h4>
              <span>According to Kathy Kennedy, a master gardener with whom Garvey collaborates at Farm Chastain, there are many things in our homes that create air pollution – cleaning products, paint, mold and mildew. Plants also replace carbon dioxide with fresh oxygen.</span>
            </div>
          </div>
          <br></br>
          <div className='aboutDesc'>
            <img src="./img/stress.jpg" className='imgLeft'/>
            <div className='aboutcon-right'>
              <h4>Reduce stress.</h4>
              <span>A 2015 study found that caring for indoor plants reduced psychological and physiological stress in study participants. Interacting with plants helped suppress sympathetic nervous system activity and diastolic blood pressure. Participants reported feelings of comfort when working with plants versus working on a computer.</span>
            </div>
          </div>
          <br></br>
          <div className='aboutDesc'>
            <img src="./img/health.jpg" className='imgRight'/>
            <div className='aboutcon-left'>
              <h4>Support cognitive health.</h4>
              <span>Exposure to indoor plants helped people recover from mental fatigue, researchers found.</span>
            </div>
          </div>
          <br></br>
          <div className='aboutDesc'>
            <img src="./img/wheel.png" className='imgLeft'/>
            <div className='aboutcon-right'>
              <h4>Improve environmental wellness.</h4>
              <span>Our environment has a major impact on our overall wellness,” she says. “All areas of our wellness are interconnected. Living in an environment that is healthy and peaceful can be beneficial to your overall wellness. Our home is our sanctuary and a place for us to recharge.</span>
            </div>
          </div>

        </div>

      </div>
    )
  }
}

export default About