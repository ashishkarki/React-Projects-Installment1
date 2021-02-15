import React, { useState } from 'react'
import data from './data'
function App() {
  const [ numParagraphs, setNumParagraphs ] = useState(0)
  const [ paragraphs, setParagraphs ] = useState([])

  const generateParagraphs = (event) => {
    event.preventDefault()

    console.log(typeof numParagraphs)

    let paraCount = parseInt(numParagraphs)
    if (paraCount <= 0) {
      paraCount = 1
    } else if (paraCount > data.length) {
      paraCount = data.length
    }

    setParagraphs(data.slice(0, paraCount))
  }

  return (
    <>
      <section className="section-center">
        <h3>Random text Generator</h3>
        <h4>(min 1 and max 8)</h4>

        <form className="lorem-form" onSubmit={ generateParagraphs }>
          <label htmlFor="numParagraphs">Num of Paragraphs : </label>
          <input type="number"
            name="numParagraphs"
            id="numParagraphs"
            placeholder="0"
            value={ numParagraphs }
            onChange={ (event) => setNumParagraphs(event.target.value) }
          />

          <button type="submit" className="btn">
            Generate
          </button>
        </form>

        <article>
          {
            paragraphs.map((paragraph, idx) => {
              return <div key={ idx } className="lorem-text">
                { paragraph }
              </div>
            })
          }
        </article>
      </section>
    </>
  )
}

export default App
