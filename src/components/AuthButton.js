import React from 'react';
import { Button, useColorModeValue } from '@chakra-ui/react';
//import web3modal from '../helpers/web3modal';
//import { ethers } from 'ethers';

export default function AuthButton() {

    const handleClick = () => {
        console.log("hello")
    }

    return (
    <Button onClick={()=>{handleClick()}} color={useColorModeValue("gray.800", "inherit")} size="sm">
        Get Started
    </Button>
  
    );
}
