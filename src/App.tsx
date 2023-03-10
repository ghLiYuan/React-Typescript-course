// import {useState} from 'react'
//
// interface Todo {
//   title: string,
//   desc: string
// }
//
// function App() {
//   const [count, setCount] = useState<number>(0)
//   const [todos, setTodos] = useState<Todo[]>([])
//
//   return (
//     <div className="App">
//       <p>{count}</p>
//       {todos.map(v => {
//         <li>{v.title}</li>
//       })}
//     </div>
//   )
// }
import { HashRouter } from 'react-router-dom'
import Router from './Routers/Router'
import './App.css'
function App() {
  return <HashRouter>
    <Router />
  </HashRouter>
}

export default App