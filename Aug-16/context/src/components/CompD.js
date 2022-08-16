import React from 'react'
import { CompContext } from '../contexts'

const CompD = (props) => {
  return (
    <CompContext.Consumer>
      {(context) => {
        return <div>
          CompD - Consumer
          <br />
          {context.fname} {context.lname}
        </div>
      }}
    </CompContext.Consumer>
  )
}

export default CompD