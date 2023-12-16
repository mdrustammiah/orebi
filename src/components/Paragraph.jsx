import React from 'react'

const Paragraph = ({className,text}) => {
  return (
    <>
    <p  className={`${className} font-dm font-normal text-base text-priColor`}>{text}</p>
    </>
  )
}

export default Paragraph