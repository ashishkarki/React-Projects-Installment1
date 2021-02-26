import React from 'react'
import Modal from './Modal'
import Sidebar from './Sidebar'
import Home from './Home'

function App() {
  let showSideBar = false

  return (
    <>
      <Home />
      <Modal />
      <Sidebar />
    </>
  )
}

export default App
