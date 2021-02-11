import React, { useEffect, useState } from "react"
import Loading from './loading'
import Tours from './tours'

const sample_tours_api = 'https://course-api.com/react-tours-project'

function App() {
  const [ loading, setLoading ] = useState(true)
  const [ tours, setTours ] = useState([])

  const fetchTours = async () => {
    setLoading(true)

    try {
      const response = await fetch(sample_tours_api)
      const tours = await response.json()

      setLoading(false)
      setTours(tours.slice(0, 1))
    } catch (error) {
      setLoading(false)
      console.log("error fetching api response..", error)
    }

    console.log(tours)
  }

  const removeTour = (tourId) => {
    const newTours = tours.filter(tour => tour.id !== tourId)
    setTours(newTours)
  }

  useEffect(() => {
    fetchTours()
  }, [])

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }

  return tours.length ?
    (
      <main>
        <Tours tours={ tours } removeTour={ removeTour } />
      </main>
    ) :
    (
      <main>
        <div className="title">
          <h2>No Tours Left. Click button to refresh.</h2>

          <button className="btn btn-info" onClick={ fetchTours }>
            RePopulate Tours
          </button>
        </div>
      </main >
    )
}

export default App
