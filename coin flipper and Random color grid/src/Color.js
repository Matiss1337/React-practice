// import React, { useState } from 'react'
// import './Color.css'

// function Color(props){
//     return <div className='Color'>
//         <h1>{props.name}</h1>
//     </div>
// }

// export default Color




import React, { useState } from 'react'
import './Color.css'

function Color (){
    const [bgColor, setbgColor] = useState(getColor());

function rColor(){
return Math.floor(Math.random() * 256)
}
function getColor(){
    return(`rgb(${rColor()},${rColor()},${rColor()})`)
}
function updateColor(){
    setbgColor(getColor())
}
    
    return <div className='Color'     
    style={{
       backgroundColor: bgColor
      }} 
      onClick={()=> updateColor()}>
    </div>
}

export default Color