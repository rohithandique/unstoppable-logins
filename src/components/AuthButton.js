import React, { useState, useEffect} from 'react';
import { Button, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import udLogo from '../images/udLogo.png'
import UAuth from '@uauth/js';
import { useNavigate } from "react-router-dom";
import { ArrowDownIcon } from '@chakra-ui/icons';
import { useAuth } from "../contexts/AuthContext";

export default function AuthButton(props) {
    const {size} = props;
    let navigate = useNavigate();

    /*
    const {default: Resolution} = require('@unstoppabledomains/resolution');
    const resolution = new Resolution();

    function resolve(domain, currency) {
        resolution
          .addr(domain, currency)
          .then((address) => console.log(domain, 'resolves to', address))
          .catch(console.error);
    }

    

    const handleClick = async () => {

        try {
            const instance = await web3modal.connect();
            console.log(instance)

            const provider = new ethers.providers.Web3Provider(instance);
            const signer = provider.getSigner();
            console.log(await signer.getAddress())
            
            
        } catch(err) {
            console.log(err)
        }
    }*/

    

    const uauth = new UAuth({
        clientID: '73I0uzMDPBH3aVvBl64YFKS5iOj88cuHd3ibH+hC/RE=',
        clientSecret: 'N2aNc2ocYisT1S+8GiHuqXSdctkhlMzRW4a7HQsqo04=',
        redirectUri: 'http://localhost:3000/callback',
      
        // Must include both the openid and wallet scopes.
        scope: 'openid wallet email',
    })

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState()
    const {user, setUser} = useAuth()

   
    useEffect(() => {
      setLoading(true)
      uauth
        .user()
        .then(setUser)
        .catch(() => {})
        .finally(() => setLoading(false))
    }, [])

    const handleLogin = () => {
        if(user) return;
        setLoading(true)
        uauth
        .loginWithPopup()
        .then(() => {
            uauth.user().then(setUser)
            navigate("/forum", { replace: false });
        })
        .catch((err)=> {
            setError(err)
            console.log(error)
        })
        .finally(() => {
            setLoading(false);
        })
    }
  
    const handleLogout = () => {
        setLoading(true)
        uauth
        .logout()
        .then(() => setUser(undefined))
        .catch((err)=> {
            setError(err)
            console.log(error)
        })
        .finally(() => setLoading(false))
    }

    return (

        <>
            { user ?
            <Menu>
                <MenuButton as={Button}color={'white'} leftIcon={<img style={{height: "20px"}} src={udLogo} alt='UD Logo'/>}
                backgroundColor={'#4b47ee'}
                _hover={{
                    bg: '#0b24b3'
                }}
                _active={{
                    bg: '#5361c7'
                }}
                onClick={()=>{handleLogin()}} size={size}
                isLoading={loading}>
                {user.sub}
                <ArrowDownIcon ml="2"/>
                </MenuButton>
                <MenuList>
                    <MenuItem onClick={() => {handleLogout()}}>Log Out</MenuItem>
                </MenuList>
            </Menu>
            :
            <Button s={Button}color={'white'} leftIcon={<img style={{height: "20px"}} src={udLogo} alt='UD Logo'/>}
            backgroundColor={'#4b47ee'}
            _hover={{
                bg: '#0b24b3'
            }}
            _active={{
                bg: '#5361c7'
            }}
            onClick={()=>{handleLogin()}} size={size}
            isLoading={loading}>
                Login with Unstoppable
            </Button>
            }
        </>
        
        
  
    );
}
