import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

const getLocalStorage = () => {
  let itemList = localStorage.getItem('itemList')

  if (itemList) {
    return JSON.parse(itemList)
  } else {
    return []
  }
}

function App() {
  const [ itemName, setItemName ] = useState('')
  const [ itemList, setItemList ] = useState(getLocalStorage())
  const [ isEdit, setIsEdit ] = useState(false)
  const [ editIndex, setEditIndex ] = useState(null)
  const [ alert, setAlert ] = useState({ show: false, msg: '', type: '' })

  const showAlert = (show = false, msg = '', type = '') => {
    setAlert({
      show: show,
      type, // could have been written as type: type
      msg,
    })
  }

  const addOrEditItem = (event) => {
    event.preventDefault()

    if (!itemName) {
      showAlert(true, 'Please enter value!!', 'danger')
    } else if (itemName && isEdit) {
      setItemList(itemList.map(item => {
        if (item.id == editIndex) {
          return { ...item, title: itemName }
        }

        return item
      }))

      setItemName('')
      setEditIndex(null)
      setIsEdit(false)

      showAlert(true, 'Value edited', 'success')
    } else { // this is new addition
      showAlert(true, 'Item added to list', 'success')

      const newItem = { id: new Date().getTime().toString(), title: itemName }
      setItemList([ ...itemList, newItem ])
      setItemName('')
    }
  }

  const clearList = () => {
    showAlert(true, 'List Cleared', 'danger')
    setItemList([])
  }

  const editItem = (editIndex) => {
    const editedItem = itemList.find(item => item.id = editIndex)
    setIsEdit(true)
    setEditIndex(editIndex)
    setItemName(editedItem.title)
  }

  const removeItem = (id) => {
    showAlert(true, 'Item removed', 'danger')
    setItemList(itemList.filter(item => item.id !== id))
  }

  // save the itemList to localStorage so it survives refreshes
  useEffect(() => {
    localStorage.setItem('itemList', JSON.stringify(itemList))
  }, [ itemList ])

  return <>
    <section className="section-center">
      <form className="grocery-form" onSubmit={ addOrEditItem }>
        {
          alert.show &&
          <Alert { ...alert }
            removeAlert={ showAlert }
            itemList={ itemList }
          />
        }

        <h3>Simple List App</h3>

        <div className="form-control">
          <label htmlFor="itemName"></label>
          <input type="text"
            className="grocery"
            placeholder="e.g. Buy Bread..."
            value={ itemName }
            onChange={ event => setItemName(event.target.value) }
          />


          <button type="submit" className="submit-btn">
            { isEdit ? 'Edit' : 'Submit' }
          </button>
        </div>
      </form>

      { itemList.length > 0 && (
        <div className="grocery-container">
          <List itemList={ itemList }
            editItem={ editItem }
            removeItem={ removeItem }
          />

          <button className="clear-btn" onClick={ clearList }>
            Clear Items
        </button>
        </div>
      ) }

    </section>
  </>
}

export default App
// 3:53