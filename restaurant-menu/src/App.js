import React, { useState } from 'react'
import Menu from './Menu'
import Categories from './Categories'
import originalItems from './data'

function App() {
  const allCategories = [ 'all', ...new Set(originalItems.map(item => item.category)) ]
  const [ menuItems, setMenuItems ] = useState(originalItems)
  const [ categories, setCategories ] = useState(allCategories)

  const filterItems = (category) => {
    if (category === 'all') {
      return allCategories
    }

    const categoryItems = originalItems.filter(item => item.category === category)

    setMenuItems(categoryItems)
  }



  return <main>
    <section className="menu section">
      <div className="title">
        <h2>Fancy Restaurant Menu</h2>
        <div className="underline"></div>
      </div>

      <Categories filterItems={ filterItems } categories={ categories } />
      <Menu items={ menuItems } />
    </section>
  </main>
}

export default App
