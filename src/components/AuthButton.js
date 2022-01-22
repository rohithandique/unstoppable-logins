import React from 'react';
import { Button, useColorModeValue } from '@chakra-ui/react';
import web3modal from '../helpers/web3modal';

export default function AuthButton() {


    const handleClick = async () => {

        try {
            const provider = await web3modal.connect()
            console.log(provider)
        } catch(err) {
            console.log(err)
        }

    }

    return (
    <Button onClick={()=>{handleClick()}} color={useColorModeValue("gray.800", "inherit")} size="sm">
        Get Started
    </Button>
  
    );
}
