import React from 'react'
import burgers from '../burgersdata'
import Burger from '../components/Burger'

export default function Homescreen() {
  return (
    <div>
      <div className="row">
        {burgers.map(burger=>{
            return <div className="col-md-4">
                <div>
                    <Burger burger={burger}/>
                </div>
            </div>
        })}
        
      </div>
    </div>
  )
}
