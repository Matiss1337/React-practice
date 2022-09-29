import React, { useContext } from 'react'
import { CalcContext } from '../context/CalcContext'

const getStyleName = btn => {
  const className = {
    "=": "equals",
    "x": "opt",
    "-": "opt",
    "/": "opt",
    "+": "opt"
  }
  return className[btn]
}
 // value from function is btn here, same here just from different angles
 //so u take value from buttom and if its = u get equals in return, simple, but efective


const Button = ({value}) => {
  const {calc, setCalc} = useContext(CalcContext)
  // so i can use Context 
  
  const commaClick = () => {
    setCalc({
      ...calc,
      num: !calc.num.toString().includes('.') ? calc.num + value: calc.calc.num
      // so it will check num, if it has . already it just return number you have already 
    })
  }

  const signClick = () => {
    setCalc({
      sign: value,
      res: !calc.res && calc.num ? calc.num: calc.res,
      num: 0
    })
  }

  const equalsClick = () => {
    if(calc.res && calc.num) {
    const Math = (a, b, sign) => {
    const result = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "x": (a, b) => a * b,
    "/": (a, b) => a / b
  }
  return result[sign](a, b)
    }
        setCalc({
      res: Math(calc.res, calc.num, calc.sign),
      sign: "",
      num: 0
    })
  }
  }

  //realy nice, same as BeforeUnloadEvent, depending on value u get 
  // different function and then, because uz passed num and res u can play 
  // with them too


  const resetClick = () => {
    setCalc({
      sign: "",
      num: 0,
      res: 0
    })
  }
  const handleClickButton = () => {
    const numberString = value.toString()
    // so the number is a string in screen 
    let numberValue;
    if(numberString === 0 && calc.num === 0){
    numberValue = "0"
    // so we dont get 10 "0"os 
  } else {
  numberValue = Number(calc.num + numberString)
  }

    setCalc({
      ...calc,
      num: numberValue
    })
  }

  const persentClick = () => {
    setCalc({
      num: (calc.num / 100),
      res: (calc.res / 100),
      sign:""
    })
  }

  const invertClick = () => {
    setCalc({
      num: calc.num ? calc.num * -1 : 0,
      res: calc.res ? calc.res * -1 : 0,
      sign: ""
    })}

  const handleBtnClick = () => {
    // console.log(value)
    // // using the same value 

    const results = {
      ".": commaClick,
      "C": resetClick,
      "/": signClick,
      "x": signClick,
      "+": signClick,
      "-": signClick,
      "=": equalsClick,
      "%": persentClick,
      "+-": invertClick
    }
    if(results[value]){
    return results[value]()} else {
      return handleClickButton()
      // this is a f to add numbers 
    }

    // same as before , depending on Value u get different function 
  }
  return (
    <button onClick={handleBtnClick} className={`${getStyleName(value)} button`}>{value}</button>
    // get style name uses the value provided by parent element to decide what class will be returned
  )
}

export default Button