import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  const [ itemName, setItemName ] = useState('')
  const [ itemList, setItemList ] = useState([])
  const [ isEdit, setIsEdit ] = useState(false)
  const [ editIndex, setEditIndex ] = useState(Number.MIN_VALUE)

  const addOrEditItem = (event) => {
    event.preventDefault()

    if (isEdit) {
      itemList[ editIndex ] = itemName
    } else { // this is new addition
      setItemList([ ...itemList, itemName ])
    }

    setIsEdit(false)
    setItemName('')
  }

  const editItem = (editIndex) => {
    setIsEdit(true)
    setEditIndex(editIndex)
  }

  return <>
    <section className="section section-center">
      <form className="grocery-form" onSubmit={ addOrEditItem }>
        <h3>Simple List App</h3>

        <label htmlFor="itemName"></label>
        <input type="text"
          name="itemName"
          id="itemName"
          placeholder="e.g. Buy Bread..."
          value={ itemName }
          onChange={ event => setItemName(event.target.value) }
        />

        <button type="submit submit-btn">
          { isEdit ? 'Edit' : 'Submit' }
        </button>
      </form>

      <List itemList={ itemList } editItem={ editItem } />

      <div className="delete-btn"
        style={ { display: itemList.length ? "block" : "none" } }
        onClick={ () => setItemList([]) }>
        Clear Items
      </div>
    </section>
  </>
}

export default App
// 3:53