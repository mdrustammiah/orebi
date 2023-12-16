import React from 'react'

const Heading = ({className,text}) => {
  return (
    <>
    <h1 className={`${className}`}>{text}</h1>
    </>
  )
}

export default Heading