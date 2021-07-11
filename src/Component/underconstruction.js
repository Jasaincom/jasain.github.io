import React, { useState, useEffect} from 'react';
import Countdown from './countdown';
import './underconstruction.css'

function underconstruction() {
  const [timerDays, setDays] = useState();
  const [timerHours, setHours] = useState();
  const [timerMinutes, setMinutes] = useState();
  const [timerSeconds, setSeconds] = useState();

  let interval;

  const startTimer = () =>{
    const countDownDate = new Date("December 30, 2021 ").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();

      const distance = countDownDate - now;

      const days= Math.floor(distance / (24 * 60 * 60 * 1000)); 
      const hours= Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)); 
      const minutes= Math.floor(
        (distance % (60 * 60 * 1000)) / (1000 * 60));
      const seconds= Math.floor(
        (distance % (60 * 1000)) /(1000)); 


        if(distance<0){
          //stop timer
          clearInterval(interval.current);        
        }else{
          //update timer               
          setDays(days);
          setHours(hours);
          setMinutes(minutes);
          setSeconds(seconds);
 
        }
    });
  }

  useEffect(() => {
    startTimer();
  })

  return (
    <section className="home" id="#top">
      <div className='container'>
        <div className="header">
          <div className="logo" style={{ height: '50px' }}>
            <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt='logo' />
          </div>
        </div>
        <div className="banner-container">
          <div className="heading text-center">
            <h2>Website is Under Construction</h2>
            <p>Our Prediction Time to launching this Website!</p>
          </div>
          <Countdown
            timerDays={timerDays >= 10 ? timerDays : "0"+ timerDays}
            timerHours={timerHours>= 10 ? timerHours : "0"+ timerHours}
            timerMinutes={timerMinutes>= 10 ? timerMinutes : "0"+ timerMinutes}
            timerSeconds={timerSeconds>= 10 ? timerSeconds : "0"+ timerSeconds}
          />
        </div>
      </div>
    </section>
  )
}

export default underconstruction
