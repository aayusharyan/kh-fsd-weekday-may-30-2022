import React from 'react'
import CompB from './CompB'
import { AnotherContext } from '../contexts'

const CompA = () => {
  return (
    <AnotherContext.Provider value={"ABCD"}>
      <div>
        CompA
        <CompB />  
      </div>
    </AnotherContext.Provider>
  )
}

export default CompA