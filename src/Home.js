import React from 'react'
import Slides from './Slides'
import NewSlide from './NewSlide'
import ActualSlide from './ActualSlide'
import logo from './logo.svg'
import './App.css'

function Home() {
  return (
    <div className='App'>
      <div className='App-header'>
        <h2>Tumor Board Viz</h2>
        <img src={logo} className='App-logo' alt='logo' />
      </div>
      <div className='App-todos'>
        <h4>
          Loaded From
          <span className='App-Url'>
            <a href='https://redux-firebasev3.firebaseio.com/'>
              Tumor Board
            </a>
          </span>
        </h4>


        <ActualSlide/>

        <h4>Slides List</h4>
        <Slides />
        <NewSlide />
      </div>
    </div>
  )
}

export default Home
