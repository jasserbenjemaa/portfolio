import React from 'react'
import classes from './NumbredHeading.module.css'
const Heading2 = ({num,heading}) => {
  return (
      <div className={classes['numbred-heading']}>
        <span className={classes['number']}>0{num}. </span>
       
        <h2>{heading}</h2>
      </div>
  )
  
}

export default Heading2