import React from 'react'
import Product from '../Product'
import Product_5 from '../../assets/Product_5.png'
import Product_6 from '../../assets/Product_6.png'
import Product_7 from '../../assets/Product_7.png'
import Product_8 from '../../assets/Product_8.png'
import Flex from '../Flex'
import Container from '../Container'
import Heading from '../Heading'
const Bestsellers = () => {
  return (
    <Container className='mt-10'>
    <Heading className="font-dm font-bold text-39" text="Our Bestsellers"/>
    <Flex className='gap-10'>
      <Product src={Product_5} alt="Product_5"/>
      <Product src={Product_6} alt="Product_6"/>
      <Product src={Product_7} alt="Product_7"/>
      <Product src={Product_8} alt="Product_8"/>
    </Flex>
</Container>
  )
}

export default Bestsellers