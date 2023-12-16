import React from 'react'
import Image from '../Image'
import Text_with_button from '../../assets/Text_with_button.png'
import banner_products from '../../assets/banner_products.png'
import Container from '../Container'
import Flex from '../Flex'
import Paragraph from '../Paragraph'


const Banner = () => {
  return (
    <>
<div className='bg-cateColor'>
  <Container>
    <Flex className='items-center'>
      <div className='w-1/2'>
        <Flex>
        <div className='w-1/5'>
          <Paragraph className="font-dm font-normal text-xs" text="01"/>
        </div>
        <div className='w-4/5'>
<Image src={Text_with_button} alt="Text_with_button"/>
</div>
        </Flex>
      </div>
      <div className='w-1/2 my-20'>
        <Flex className='justify-around'>
          <Image src={banner_products} alt="banner_products"/>
        </Flex>
      </div>
    </Flex>
    </Container>
  </div>    
    <Container>
    </Container>
    </>
    
  )
}

export default Banner