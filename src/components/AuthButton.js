import React, { useState, useEffect} from 'react';
import { Button } from '@chakra-ui/react';
import web3modal from '../helpers/web3modal';
import udLogo from '../images/udLogo.png'
import UAuth from '@uauth/js';
import { ethers } from "ethers";
import { useNavigate } from "react-router-dom";


export default function AuthButton(props) {
    const {size} = props;

    /*let navigate = useNavigate();

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
            navigate("/forum", { replace: false });
            
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
    const [user, setUser] = useState()
  
    console.log(user)

    useEffect(() => {
      setLoading(true)
      uauth
        .user()
        .then(setUser)
        .catch(() => {})
        .finally(() => setLoading(false))
    }, [])
  
      const handleLogin = () => {
      setLoading(true)
      uauth
        .loginWithPopup()
        .then(() => uauth.user().then(setUser))
        .catch(setError)
        .finally(() => setLoading(false))
      }
  
      const handleLogout = () => {
          setLoading(true)
          uauth
            .logout()
            .then(() => setUser(undefined))
            .catch(setError)
            .finally(() => setLoading(false))
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
    onClick={()=>{handleLogin()}} size={size}>
        Login with Unstoppable
    </Button>
  
    );
}
