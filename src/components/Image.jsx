import React from 'react'

const Image = ({className,src,alt}) => {
  return (
    <>
    <img className={`${className} size-cover`} src={src} alt={alt}/>
    </>
  )
}

export default Image