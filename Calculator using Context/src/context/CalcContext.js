import React, { createContext, useState } from 'react'

export const CalcContext = createContext()

const CalcProvider = ({children}) => {
const [calc, setCalc] = useState({
    sign: "",
    num: 0,
    res: 0
})
// so this is setState thing 

const providerValue = {
    calc, setCalc
}
// and then we Const state and setSate andso we can export it around the app

  return (
    <CalcContext.Provider value={providerValue}>
{children}
    </CalcContext.Provider>
  )
}

export default CalcProvider