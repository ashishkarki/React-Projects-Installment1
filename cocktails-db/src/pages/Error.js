import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <section className='error-page section'>
      <div className="error-container">
        <h1>Oops there was an error!!</h1>

        <Link to='/' className='btn'>
          Back to Home
      </Link>
      </div>
    </section>
  )
}

export default Error
