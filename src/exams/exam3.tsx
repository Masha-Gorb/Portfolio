import React from 'react';

type ActionType = {
  type: "SUM"|"SUB"|"MULT"|"DIV"|"EXP"
  payload: number
}

const calculator = (state: number, action: ActionType): number => {
  switch (action.type) {
    case "SUM":
      return state + action.payload
    case "SUB":
      return state - action.payload
    case "DIV":
      return state / action.payload
    case "MULT":
      return state * action.payload
    case "EXP":
      return state ** action.payload
    default:
      return state
  }
}

const result = calculator(10, {type: "EXP", payload: 0})
if (!(result - 1)){
  console.log("IT-INCUBATOR")
}

console.log(!(10**0-1))



