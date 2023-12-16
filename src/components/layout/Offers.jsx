import React from 'react'
import Product from '../Product'

import Product_9 from '../../assets/Product_9.png'
import Product_10 from '../../assets/Product_10.png'
import Product_11 from '../../assets/Product_11.png'
import Product_12 from '../../assets/Product_12.png'
import Flex from '../Flex'
import Container from '../Container'
import Heading from '../Heading'
const Offers = () => {
  return (
    <Container className='mt-10'>
      <Heading className="font-dm font-bold text-39" text="Special Offers"/>
      <Flex className='gap-10'>
        <Product src={Product_9} alt="Product_9"/>
        <Product src={Product_10} alt="Product_10"/>
        <Product src={Product_11} alt="Product_11"/>
        <Product src={Product_12} alt="Product_12"/>
      </Flex>
</Container>
  )
}

export default Offers