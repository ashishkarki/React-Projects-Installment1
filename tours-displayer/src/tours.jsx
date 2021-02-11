import React from "react"
import Tour from './tour'

const Tours = ({ tours, removeTour }) => {
    return (
        <section>
            <div className="title">
                <h2>Tours List</h2>
                <div className="underline"></div>
            </div>

            <div>
                {
                    tours.map(tour => {
                        return <Tour
                            key={ tour.id }
                            { ...tour }
                            removeTour={ removeTour }>
                        </Tour>
                    })
                }
            </div>
        </section>
    )
}

export default Tours