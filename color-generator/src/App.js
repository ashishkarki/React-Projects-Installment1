import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const { log } = console

  const [ color, setColor ] = useState('')
  const [ error, setError ] = useState(false)
  const [ list, setList ] = useState(new Values('#faefef').all(10))

  const handleSubmit = (event) => {
    event.preventDefault()

    try {
      let colors = new Values(color).all(10)
      setList(colors)
    } catch (error) {
      setError(true)
      log(error)
    }
  }

  return (
    <>
      <section className="container">
        <h3>Color Shades generator</h3>

        <form onSubmit={ handleSubmit }>
          <input type="text"
            value={ color }
            onChange={ e => setColor(e.target.value) }
            placeholder="#e4d4c8"
            className={ `${ error ? 'error' : null }` }
          />

          <button type="submit" className="btn">
            Get Shades
          </button>
        </form>
      </section>

      <section className="colors">
        {
          list.map((color, index) => {
            return <SingleColor key={ index }
              { ...color }
              index={ index }
              hexColor={ color.hex }
            />
          })
        }
      </section>
    </>
  )
}

export default App
