import React, { useState } from 'react'



function AddColor() {

let favColors =['red','green','blue','black','violet']

let [colors,setColors] = useState([])
   
let addColor =()=>{

 if(colors.length<favColors.length){
  setColors([...colors,favColors[colors.length]]);
 }
  
}
  return (
    <div>
      <ul>
        {
          colors.map((color,index)=>{
            return <li key={index}>{color}</li>
          })
        }
      </ul>

      <button onClick={addColor}>add color</button>
    </div>
  )
}

export default AddColor