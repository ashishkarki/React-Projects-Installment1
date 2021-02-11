import React, { useState } from 'react'
import folks from './data'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'

const Review = () => {
  const [ index, setIndex ] = useState(0)
  const { name, job, image, text } = folks[ index ]

  const checkIndex = (num) => {
    if (num < 0) {
      return folks.length - 1
    }
    if (num > folks.length - 1) {
      return 0
    }

    return num
  }

  const nextPerson = () => {
    setIndex((curIndex) => {
      return checkIndex(curIndex + 1)
    })
  }

  const prevPerson = () => {
    setIndex((curIndex) => {
      return checkIndex(curIndex - 1)
    })
  }

  const surprisingPerson = () => {
    let randomIndex = index
    while (randomIndex === index) {
      randomIndex = Math.floor(Math.random() * folks.length)
    }

    setIndex(_curIndex => {
      return checkIndex(randomIndex)
    })
  }

  return <article className="review">
    <div className="img-container">
      <img src={ image } alt={ name } className="person-img" />
      <span className="quote-icon">
        <FaQuoteRight />
      </span>
    </div>

    <h4 className="author">
      { name }
    </h4>
    <p className="job">
      { job }
    </p>
    <p className="info">
      { text }
    </p>

    <div className="button-container">
      <button className="prev-btn" onClick={ prevPerson }>
        <FaChevronLeft />
      </button>
      <button className="next-btn" onClick={ nextPerson }>
        <FaChevronRight />
      </button>
    </div>

    <button className="random-btn" onClick={ surprisingPerson }>
      Suprise Me
      </button>
  </article>
}

export default Review
