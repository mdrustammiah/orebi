import React from 'react'
import Subheading from './Subheading'
import Flex from './Flex'
import Paragraph from './Paragraph'
import Image from './Image'
import Button from './Button'


const Product = ({src,alt}) => {
  return (
   <>
   <div className='w[10px] relative'>
    <div>
      <Image src={src} alt={alt}/>
    </div>
    <Flex className="justify-between">
        <Subheading text="New Arrivals"/>
        <Paragraph text="44.00"/>
    </Flex>
    <Button className="absolute top-5 left-5" text="New"/>
    <Paragraph text="Black"/>
   </div>


   
</>


  
   
  )
}

export default Product