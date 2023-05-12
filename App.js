import React, { useState } from 'react';

import './App.css';


function Square({value ,  onsqaureclick } )
{
 
  
  const styles = {}
if(!!value ) { // not undefined
  styles.color = value === "X" ? 'green': 'red'
}

  return(
    <>

  <button className='squares'  style={styles}     onClick={onsqaureclick  } > {value} </button>

  </>
    )
  }
  
  function App() {
    const [value1 , setvalue1] = useState (Array(9).fill(null))
    
    const [isX , setX] = useState (true)   ;
    const arraycopy = value1.slice()  ; 

function HandleWinner()
{
    let index = 0 ;
     console.log("aamir")
     if
     (arraycopy[index] == null)
     {
      return ; 
     }       

       let  i = index + 1 ;
          if(       
                arraycopy[index] === arraycopy[i]  && arraycopy[i] === arraycopy[i+1]  )
          {
            alert("the prayer wins is " + arraycopy[index] ) ; 
            return ; 
          }

  
    


}

    function  handleclick(i)
    {
      if(value1[i]  )
      {
        return; 
      }
      // const arraycopy = value1.slice()  ; 

      if (isX)
      {
        arraycopy[i] = "X"
      

        setvalue1(arraycopy)  ;  
        setX(false);
      }
      else 
      {
        
        arraycopy[i] = "O" ; 
        setvalue1(arraycopy)  ; 
        setX(true);
      }

  HandleWinner() ; 
    }

 return (
      <div className="game">
         <div className = 'btn' >
           
<div className='row '>
          <Square  value = {value1[0]}  onsqaureclick =  {()=>handleclick(0) }   />
          <Square  value = {value1[1]}   onsqaureclick = {()=>handleclick(1)}  />
          <Square  value = {value1[2]}   onsqaureclick = {()=>handleclick(2)} />
      </div>

<div className='row '>
  
          <Square value = {value1[3]} onsqaureclick = {()=>handleclick(3)} />
          <Square value = {value1[4]} onsqaureclick = {()=>handleclick(4)}  />
          <Square value = {value1[5]} onsqaureclick = {()=>handleclick(5)}  />
     </div>
 


          <div className='row '>
  
          <Square value = {value1[6]} onsqaureclick = {()=>handleclick(6)}   />
          <Square value = {value1[7]} onsqaureclick = {()=>handleclick(7)}   />
          <Square value = {value1[8]} onsqaureclick = {()=>handleclick(8)}   />
  </div>

 
         </div> 
    </div>
  );
}

export default App;
