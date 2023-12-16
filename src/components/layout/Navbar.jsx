import React from 'react'
import Container from '../Container'
import Logo from '../../assets/Logo.svg'
import Flex from '../Flex'
import List from '../List'
import Image from '../Image'

const Navbar = () => {
  return (
    <>
    <nav className='py-6'>
        <Container>
            <Flex>
                <div className='w-1/6'>
                <Image src={Logo} alt="Logo" />
                </div>
            <div className='w-5/6'>
                <Flex className='justify-center gap-x-10'>
                <List href="#" text="Home"/>
                <List href="#" text="Shop"/>
                <List href="#" text="About"/>
                <List href="#" text="Contacts"/>
                <List href="#" text="Journal"/>
                </Flex>             
            </div>
            </Flex>
        </Container>
    </nav>
    </>

  )
}

export default Navbar