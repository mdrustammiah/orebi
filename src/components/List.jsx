import React from 'react'

const List = ({href,text}) => {
  return (
    <>
    <ul>
        <li className='font-dm font-normal text-sm text-secColor hover:font-bold text-priColor'><a href={href}>{text}</a></li>
    </ul>
    </>
  )
}

export default List