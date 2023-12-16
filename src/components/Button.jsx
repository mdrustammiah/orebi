import React from 'react'

const Button = ({className,text}) => {
  return (
    <button className={`${className} w-92 h-35 bg-black text-white`}>{text}</button>
  )
}

export default Button