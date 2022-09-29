import React, { useContext } from 'react'
import { CalcContext } from '../context/CalcContext'
import { Textfit } from 'react-textfit';
// didnt install originaly, had to use --force in the end 

const Screen = () => {
    const {calc} =useContext(CalcContext)
    // we grab calc from CalcContext using useContext 
  return (
<Textfit max={70} mode="single" className="screen">
    {calc.num ? calc.num: calc.res}
</Textfit>
  )
}

export default Screen