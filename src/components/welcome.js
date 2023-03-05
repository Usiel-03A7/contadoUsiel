import {useState} from 'react'
// export default function Welcome(props){
//     const [count,setCount] = useState(0)
//     return (
//         <div>
//             <h1>{props.name}</h1>
//             <h2>{props.mensake}</h2>
//             <h3>{count}</h3>
//             <button onClick={()=>setCount(count+1)}>Click me</button>
//         </div>
//     )
// }

export default function Welcome(props){
    const [count,setCount] = useState(0)
    return (
      <div>
        <p>Precionaste el boton estas veces</p>
        <p>{count}</p>
      <button onClick= {()=> setCount(count+1)}> 
        Click me 
        </button>
      </div>
    )
}