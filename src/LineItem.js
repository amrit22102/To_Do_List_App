import React from 'react'
import { FaTrashAlt } from 'react-icons/fa';

const LineItem = ({item, handleCheck, handleDelete}) => {
  return (
    <li className="item" >
            <input
              type="checkbox"
              onChange={() => {
                handleCheck(item.id);
              }}
              checked={item.checked}
            />
            <label 
            onDoubleClick={() => {handleCheck(item.id)}} 
            style={(item.checked) ? {textDecoration: 'line-through'}: null}
            >{item.itemName}</label>
            <FaTrashAlt role="button" tabIndex="0" onClick={() => {handleDelete(item.id)}}
            aria-label={`Delete ${item.item}`}>
              
            </FaTrashAlt>
    
          </li>
  )
}

export default LineItem