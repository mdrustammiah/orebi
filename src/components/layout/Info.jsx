import React from 'react'
import Flex from '../Flex'
import Image from '../Image'
import Paragraph from '../Paragraph'

import Icon2 from '../../assets/Icon2.svg'
import IconTruck from '../../assets/IconTruck.svg'
import IconReturn from '../../assets/IconReturn.svg'
import Container from '../Container'

const Info = () => {
  return (
   <>
<Container>
<Flex className='justify-between py-8'>
<div className='w-2/6'>
    <Flex className='gap-3'>
        <Image src={Icon2} alt="Icon2"/>
        <Paragraph className='font-dm font-normal text-base text-secColor' text="Two years warranty"/>
    </Flex>
</div>
<div className='w-2/6'>
    <Flex className='gap-3'>
        <Image src={IconTruck} alt="IconTruck"/>
        <Paragraph className='font-dm font-normal text-base text-secColor' text="Two years warranty"/>
    </Flex>
</div>
<div className='w-3/1'>
    <Flex className='gap-3'>
        <Image src={IconReturn} alt="IconReturn"/>
        <Paragraph className='font-dm font-normal text-base text-secColor' text="Return policy in 30 days"/>
    </Flex>
</div>
</Flex>
</Container>
   </>
  )
}

export default Info