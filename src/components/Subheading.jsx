import React from 'react'

const Subheading = ({className,text}) => {
  return (
    <h2 className={`${className} font-dm font-bold text-5`}>{text}</h2>
  )
}

export default Subheading