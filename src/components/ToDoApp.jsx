import React, { useState } from 'react' 
 
import "./ToDoApp.css" 
     
function ToDoApp() { 
 
 

    let [fruits,setfruits]=useState([])
    let [input,setinput] = useState("")
    let [searchitem,setsearchitem] = useState("")


 
    let getInput =({target:{value}})=>{
      // console.log(value);
      input=value
      setinput(input)
      
    }
  
    let addfruit=()=>{


      if(input!=="") {

      console.log(input);
      fruits[fruits.length]=input
      setfruits([...fruits])
      console.log(fruits);

      }
  }

  let deletefruit =({target:{id}})=>{
    fruits.splice(id,1)
    setfruits([...fruits])
  }


  let searchinput=(e)=>{
    // console.log(e.target.value);
    searchitem=e.target.value
    setsearchitem(searchitem)
    // console.log(searchitem);
    
  }


  let search=()=>{

    let filteredfruits =fruits.filter((element)=>{
     return element.toLowerCase().includes(searchitem.toLowerCase().trim())
    })
    console.log(filteredfruits);

    setfruits([...filteredfruits])
    


  }



    return ( 
      <>

      <div id='searchDiv'>
        <input  type="text" placeholder='TYPE HERE TO SEARCH' name='searchitem' onChange={searchinput} />
        <button  onClick={search}>SEARCH</button>
      </div>
      
        <section> 

            <div className="add-item"> 
                <input type="text" placeholder='ADD FRUITS' name='additem' onChange={getInput} /> 
                <button id='add' onClick={addfruit}>Add</button> 
            </div> 

            <div className="items"> 
                {fruits.map((fruit,id) => 
                { 
                    return <div className="item" key={id}> 
                        <div className="item-name">{fruit}</div> 
                        <button className='delete' id={id} onClick={deletefruit}>Delete</button> 
                          </div> 
            })} 
            </div> 
           
       </section> 

       </>
   ) 
   
} 
 
export default ToDoApp