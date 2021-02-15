import React, { useEffect, useState } from 'react'

const Alert = () => {
  const [ alert, setAlert ] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false)
    }, 2000)

    return () => {
      clearTimeout(timeout)
    }
  }, [ alert ])

  return <h2>{ alert }</h2>
}

export default Alert
