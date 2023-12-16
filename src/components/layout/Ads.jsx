import React from 'react'
import Flex from '../Flex'
import Image from '../Image'
import Ad_1 from '../../assets/Ad_1.png'
import Ad_2 from '../../assets/Ad_2.png'
import Ad_3 from '../../assets/Ad_3.png'
import Container from '../Container'

const Ads = () => {
  return (
    <>
    <Container>
    <Flex>
    <div className='w-1/2'>
        <Image src={Ad_1} art="Ad_1"/>
    </div>
    <div className='w-1/2'>
        <div className='h-1/2'>
        <Image src={Ad_2} art="Ad_2"/>
        </div>
        <div className='h-1/2'>
        <Image src={Ad_3} art="Ad_3"/>
        </div>
    </div>
    </Flex>
    </Container>
    </>
  )
}

export default Ads