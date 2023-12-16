import React from 'react'
import Product from '../Product'
import Product_1 from '../../assets/Product_1.png'
import Product_2 from '../../assets/Product_2.png'
import Product_3 from '../../assets/Product_3.png'
import Product_4 from '../../assets/Product_4.png'
import Flex from '../Flex'
import Container from '../Container'
import Heading from '../Heading'

const Arrivals = () => {
  return (
    <>
    <Container className='mt-10'>
      <Heading className="font-dm font-bold text-39" text="New Arrivals"/>
      <Flex className='gap-10'>
        <Product src={Product_1} alt="Product_1"/>
        <Product src={Product_2} alt="Product_2"/>
        <Product src={Product_3} alt="Product_3"/>
        <Product src={Product_4} alt="Product_4"/>
      </Flex>
</Container>
    </>
    
  )
}

export default Arrivals