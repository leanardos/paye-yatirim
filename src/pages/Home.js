import React from 'react'
import GetInTouch from '../components/GetInTouch';
import GetStarted from '../components/GetStarted';
import Header from '../components/Header';

const Home = ({ scrollToBottom }) => {
  return (
    <>
      <Header scrollToBottom={scrollToBottom} />
      <GetStarted />
      <GetInTouch scrollToBottom={scrollToBottom} />
    </>
  )
}

export default Home