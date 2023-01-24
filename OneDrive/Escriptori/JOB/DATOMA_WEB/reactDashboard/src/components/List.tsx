import React from 'react'
interface Props{
    dogis: Array<{
        name:string
        age: number,
        mood: string
        weight?: number
      }>
}
const List = ({dogis}:Props) => {
  return (
    <ul >
       {
        dogis.map((e) =>  {
        return ( 
          <li className='list'>
              <h4>{e.name}</h4>
              <p>{e.mood}</p>
              <p>{e.weight}kg</p>

          </li>)
       })
      }
     </ul>
  )
}

export default List