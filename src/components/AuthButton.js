import React from 'react';
import { Button } from '@chakra-ui/react';
import web3modal from '../helpers/web3modal';
import udLogo from '../images/udLogo.png'

export default function AuthButton(props) {

    const {size} = props;

    const handleClick = async () => {

        try {
            const provider = await web3modal.connect()
            console.log(provider)
        } catch(err) {
            console.log(err)
        }

    }

    return (
    <Button color={'white'} leftIcon={<img style={{height: "20px"}} src={udLogo} alt='UD Logo'/>}
    backgroundColor={'#4b47ee'}
    _hover={{
        bg: '#0b24b3'
    }}
    _active={{
        bg: '#5361c7'
    }}
    onClick={()=>{handleClick()}} size={size}>
        Login with Unstoppable
    </Button>
  
    );
}
