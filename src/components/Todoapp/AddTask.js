import React, { useState } from 'react'

const AddTask = ({addTask}) => {
    const [value,setValue] = useState("")
    const addItem = ()=>{
        addTask(value)
        setValue("")
    }
    
  return (
    <>
        <div className='input-container'>
            <input type ="text" 
            className='input'
            value={value}
            placeholder='Add a new Task'
            onChange={(e)=>{
                setValue(e.target.value)
            }}
            />
            <button onClick={addItem} className='add-btn'>Add</button>
        </div>
    </>
  )
}

export default AddTask