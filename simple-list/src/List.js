import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
const List = ({ itemList, editItem }) => {
  return <>
    <div className="grocery-container">
      {
        itemList.map((itemName, idx) => {
          return <div className="grocery-item" key={ idx }>
            { itemName }
            <div className="edit-btn">
              <FaEdit onClick={ () => editItem(idx) } />
            </div>
          </div>
        })
      }
    </div>
  </>
}

export default List
