import React from 'react'
import TopNav from '../../components/top-nav/TopNav'
import LeftNav from '../../components/left-nav/LeftNav'
import './LandingPage.css'
import BasicDetails from '../basic-details/BasicDetails'
const LandingPage = () => {
  return (
    <div className='main'>
        <div className='top-nav'>
        <TopNav></TopNav>
        </div>
        <div className='container' >
          <div className='left-nav'>
            <LeftNav></LeftNav>
          </div>
 
          <div className='content'>
                <BasicDetails></BasicDetails>
          </div>
        </div>
    </div>
  )
}

export default LandingPage