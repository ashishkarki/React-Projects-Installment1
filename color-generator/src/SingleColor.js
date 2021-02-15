import React, { useState, useEffect } from 'react'

const SingleColor = ({ rgb, weight, hexColor, index }) => {
  const [ alert, setAlert ] = useState(false)
  const bgColor = rgb.join(',')
  const hexValue = `#${ hexColor }`

  const copyColorToClipboard = () => {
    setAlert(true)
    navigator.clipboard.writeText(hexValue)
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false)
    }, 2000)

    // clear the timeout before the next useEffect call
    return () => clearTimeout(timeout)
  }, [ alert ])

  return <article
    onClick={ copyColorToClipboard }
    className={ `color ${ index > 10 && 'color-light' }` }
    style={ { backgroundColor: `rgb(${ bgColor })` } }>
    <p className="percent-value">{ weight }%</p>
    <p className="color-value">{ hexValue }</p>

    { alert && <p className='alert'>Copied to Clipboard</p> }
  </article>
}

export default SingleColor
