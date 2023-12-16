import React from 'react'
import Flex from '../Flex'
import Subheading from '../Subheading'
import Container from '../Container'
import Paragraph from '../Paragraph'
import List from '../List'
import Image from '../Image'
import Logo from '../../assets/Logo.svg'
import Facebook from '../../assets/Facebook.svg'
import Linkedin from '../../assets/Linkedin.svg'
import Instagram from '../../assets/Instagram.svg'


const Footer = () => {
  return (
    <>
    <div className='bg-cateColor mt-32 pt-11'>
    <Container>
    <Flex>
        <div className='w-1/5'>
            <Subheading text='Menu'/>
<div className='mt-4'>
            <List href="#"  text="Home"/>
            <List href="#"  text="Shop"/>
            <List href="#"  text="About"/>
            <List href="#"  text="Contact"/>
            <List href="#"  text="Journal"/>
</div>
        </div>
        <div className='w-1/5'>
        <Subheading text='SHOP'/>
        <div className='mt-4'>
            <List href="#"  text="Category 1"/>
            <List href="#"  text="Category 2"/>
            <List href="#"  text="Category 3"/>
            <List href="#"  text="Category 4"/>
            <List href="#"  text="Category 5"/>
            </div>
        </div>
        <div className='w-1/5'>
        <Subheading text='HELP'/>
        <div className='mt-4'>
            <List href="#"  text="Privacy Policy"/>
            <List href="#"  text="Terms & Conditions"/>
            <List href="#"  text="Special E-shop"/>
            <List href="#"  text="Shipping"/>
            <List href="#"  text="Secure Payments"/>
            </div>
        </div>
        <div className='w-1/4'>
        <Subheading text='(052) 611-5711'/>
        <Subheading text='company@domain.com'/>
        <div className='mt-4'>
        <Paragraph text='575 Crescent Ave. Quakertown, PA 18951'/>
        </div>
        </div>
        <div className='w-30%'>
        <Image src={Logo} alt="Logo" />
        </div>
    </Flex>
    <Flex className='justify-between mt-28 mb-12'>
        <Flex className='gap-6'>
    <Image src={Facebook} alt="Facebook" />
    <Image src={Linkedin} alt="Linkedin" />
    <Image src={Instagram} alt="Instagram" />
</Flex>
<Paragraph text='2020 Orebi Minimal eCommerce Figma Template by Adveits'/>
    </Flex>
    </Container>
    </div>
    </>
    
  )
}

export default Footer