import React from 'react'
import IntroSection from './IntroSection';
import AboutSection from './AboutSection';

const HomePage = () => {
  return (
    <div className='HeroSection' style={{ marginTop: "80px", width: "100vw", overflowX: "hidden" }}>
      {/* <div>
        <video width="1250" autoPlay loop muted>
          <source src={Video} type="video/mp4" />
        </video>
      </div> */}
      <div className='introSection'>
        <IntroSection/>
      </div>
      <div>
        <AboutSection/>
      </div>
      <div className='player-type'>
        {/* <Card/> */}
      </div>
      <div className='injury-section'>
        {/* <QuizSection/> */}
      </div>
      <div className='profile-section'>
        {/* <ProfilesContainer/> */}
      </div>
      {/* <div style={{ minHeight: "100vh" }}>
      </div> */}
      {/* <div className='LetStart'>
        <div className='E1-top'>
            <h1>Let's</h1>
        </div>
        <div className='E1-middle'></div>
        <div className='E1-bottom'>
            <h1>Start</h1>
        </div>
      </div> */}
    </div>
  )
}

export default HomePage;
