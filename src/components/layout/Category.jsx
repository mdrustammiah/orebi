import React from 'react'
import Image from '../Image'
import IconBars from '../../assets/IconBars.svg'
import IconSearch from '../../assets/IconSearch.svg'
import IconUser from '../../assets/IconUser.svg'
import IconArrow from '../../assets/IconArrow.svg'
import IconCart from '../../assets/IconCart.svg'
import Container from '../Container'
import Flex from '../Flex'
import Paragraph from '../Paragraph'

const Category = () => {
  return (
    <>
    <section className='bg-cateColor border-t border-b border-borColor'>
        <Container>
            <Flex className='items-center'>
            <div className='w-1/4'>
                <Flex className='gap-3'>
                <Image src={IconBars} alt="IconBars"/>
                <Paragraph href="#" text="Shop by Category"/>
                </Flex>
        </div>
        <div className='w-2/4'>
            <Flex>
            <div >
                <div className='py-6 '>
                    <Flex className='items-center relative'>
                    <input className='w-600 h-50 pl-5 rounded font-dm font-normal text-sm text-searColor' type="text" placeholder='Search Products' />
                    <Image className='absolute right-4' src={IconSearch} alt="IconSearch"/></Flex>
                    </div> 
                </div>
            </Flex>
            
        </div>
        <div className='w-1/4'>
            <Flex className='justify-end'>
                <Image src={IconUser} alt="IconUser"/>
                <Image className='pl-3.5 pr-10'src={IconArrow} alt="IconArrow"/>
                <Image src={IconCart} alt="IconCart"/>
            </Flex>
        </div>
            </Flex>
        </Container>
    </section>
    </>
  )
}

export default Category