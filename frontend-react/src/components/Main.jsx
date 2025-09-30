import React from 'react'
import Header from './Header'
import Button from './Button'
import Footer from'./Footer'

const Main = () => {
  return (
    <>
      <Header />
      <div className='container'>
        <div className='p-5 text-center bg-light-dark rounded'>
          <p className='text-light lead'>This stock prediction application utilizes machine learning techniques, specifically employing Keras and an LSTM model. It integrates stock price analysis using 100-day and 200-day moving averages, which are essential indicators widely used by stock analysts to inform trading and investment decisions.</p>
          <Button text='Login' class='btn-outline-info' />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Main