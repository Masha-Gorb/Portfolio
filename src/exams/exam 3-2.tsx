import {combineReducers, createStore} from 'redux'
import ReactDOM from 'react-dom'
import {Provider, useSelector} from 'react-redux'

import {useState, useReducer, useEffect} from 'react';
import './index.css';
import {useDispatch} from 'react-redux'

let initialState = {items: [{name: 'Dimych'}, {name: 'Ignat'}]}
const usersReducer = (state = initialState, action: any) => {
  return state
}

const store = createStore(combineReducers({
  users: usersReducer
}))

store.subscribe(() => {
  console.log('state changed')
})

store.dispatch({type: 'ANY'})

//задание 2
// let initialState = {items: [{name: 'Dimych'}, {name: 'Ignat'}]}
// const usersReducer = (state = initialState, action: any) => {
//   return state
// }
//
// const store = createStore(combineReducers({
//   users: usersReducer
// }))
//
// store.subscribe(() => {
//   const state = ???
//   console.log(state)
// })
//
// store.dispatch({type: 'ANY'})

//задание 3 - 4 ????
// let initialState = {items:
//     [
//       {id: 1, name: 'Dimych'},
//       {id: 2, name: 'Ignat'}
//     ]
// }
// const usersReducer = (state = initialState, action: any) => {
//   return state
// }
//
// let authInitialState = {login: 'Margo', settings: {theme: 'dark'}}
// const authReducer = (state = authInitialState, action: any) => {
//   return state
// }
//
// let rootReducer = combineReducers({
//   users: usersReducer,
//   auth: authReducer
// })
//
// const store = createStore(rootReducer)
// type RootStateType = ReturnType<typeof rootReducer>
//
// const selector = (state: RootStateType) => state.users.items
//
// const Users = () => {
//
//   const users = ???
//
//   return <ul>
//     {users.map(u => <li key={u.id}>{u.name}</li>)}
//   </ul>
// }
//
// ReactDOM.render(<div>
//     <Provider store={store}>
//       <Users/>
//     </Provider>
//   </div>,
//   document.getElementById('root')
// )

//задание 5
// const changeCounter = (state: number, action: any): number => {
//   switch (action.type) {
//     case "INC_VALUE":
//       return state + 1
//     case "RESET":
//       return 0
//     case "DEC_VALUE":
//       return state - 1
//     default:
//       return state
//   }
// }
//
// function Counter() {
//   const [value, setValue] = useReducer(changeCounter, 0) //неверно((
//   const [isCounter, setIsCounter] = useState(true) //тож неверно ((
//   const commonStyles: React.CSSProperties = {
//     border: "1px solid black",
//     margin: "100px auto",
//     width: "300px",
//     height: "150px",
//     textAlign: "center",
//   }
//   const btnStyles: React.CSSProperties = {
//     color: "white",
//     fontWeight: "bold",
//     backgroundColor: "darkgray",
//     borderRadius: "3px",
//     minWidth: "40px"
//   }
//
//   return (
//     <div style={commonStyles}>{
//       isCounter
//         ? <div >
//           <div style={{marginBottom: "20px"}}>
//             <h2>{value}</h2>
//             <button
//               style={{...btnStyles, backgroundColor: "red"}}
//               onClick={() => setIsCounter(false)}>OFF</button>
//           </div>
//           <button style={btnStyles} onClick={() => setValue({type: "INC_VALUE"})}>+</button>
//           <button style={btnStyles} onClick={() => setValue({type: "RESET"})}>0</button>
//           <button style={btnStyles} onClick={() => setValue({type: "DEC_VALUE"})}>-</button>
//
//         </div>
//         : <div style={{textAlign: "center"}}>
//           <h2>Counter not working</h2>
//           <button
//             style={{...btnStyles, backgroundColor: "green"}}
//             onClick={() => setIsCounter(true)}>ON</button>
//         </div>
//     }
//     </div>
//   )
// }
//
//
// ReactDOM.render(
//   <Counter/>, document.getElementById('root')
// );

//верно решила)) задание 6
// const students = {
//   students: [
//     {id: 1, name: 'Bob'},
//     {id: 2, name: 'Alex'},
//     {id: 3, name: 'Donald'},
//     {id: 4, name: 'Ann'},
//   ]
// }
// type RemoveStudentAT = {
//   type: "REMOVE-STUDENT"
//   id: number
// }
// const RemoveStudentAC = (id: number): RemoveStudentAT => ({
//   type: "REMOVE-STUDENT",
//   id
// })
//
// const studentsReducer = (state = students, action: RemoveStudentAT) => {
//   switch (action.type) {
//     case "REMOVE-STUDENT":
//       return {
//         ...state,
//         students: state.students.filter(s => s.id !== action.id)
//       }
//   }
//   return state
// }
//
// const store = createStore(studentsReducer)
// type RootStateType = ReturnType<typeof studentsReducer>
//
//
// const StudentList = () => {
//   const listItemStyles = {
//     width: "100px",
//     borderBottom: "1px solid gray",
//     cursor: "pointer",
//   }
//   const students = useSelector((state: RootStateType) => state.students)
//   const dispatch = useDispatch()
//   const studentsList = students.map(s => {
//     const removeStudent = () => {
//       dispatch(RemoveStudentAC(s.id))
//     }
//     return (
//       <li key={s.id}
//           style={listItemStyles}
//           onClick={removeStudent}>
//         {s.name}
//       </li>)
//   })
//   return (
//     <ol>
//       {studentsList}
//     </ol>
//
//   )
// }
//
//
// ReactDOM.render(<div>
//     <Provider store={store}>
//       <StudentList/>
//     </Provider>
//   </div>,
//   document.getElementById('root')
// )

