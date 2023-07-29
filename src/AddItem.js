import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { useRef } from 'react'

const AddItem = ({addItem, setAddItems, handleSubmit}) => {
  const inputRef = useRef();
  return (
    <form className='addForm' onSubmit={handleSubmit} >
        <label htmlFor="addItem">Add Item</label>
        <input 
        autoFocus
        ref ={inputRef}
        type="text"
        placeholder='Add Item'
        id='addItem'
        required
        value={addItem}
        onChange={(e) => {setAddItems(e.target.value)}}
         />
         <button 
         type='submit'
         aria-label='Add Item'
         onClick={() => inputRef.current.focus()}
         
         ><FaPlus></FaPlus></button>
    </form>
  )
}

export default AddItem