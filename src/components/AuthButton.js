import React, { useState, useEffect} from 'react';
import { Button, Menu, MenuButton, MenuList, MenuItem, Box,
    Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter,
    ModalBody, ModalCloseButton, useDisclosure
} from '@chakra-ui/react';
import udLogo from '../images/udLogo.png'
import UAuth from '@uauth/js';
import { useNavigate } from "react-router-dom";
import { ArrowDownIcon } from '@chakra-ui/icons';
import { useAuth } from "../contexts/AuthContext";
import Profile from './Profile';

export default function AuthButton(props) {

    const {size} = props;
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState()
    const {user, setUser} = useAuth()
    const { isOpen, onOpen, onClose } = useDisclosure()

    let navigate = useNavigate();

    const uauth = new UAuth({
        clientID: '73I0uzMDPBH3aVvBl64YFKS5iOj88cuHd3ibH+hC/RE=',
        clientSecret: 'N2aNc2ocYisT1S+8GiHuqXSdctkhlMzRW4a7HQsqo04=',
        redirectUri: 'https://unstoppable-logins.vercel.app/callback',
      
        // Must include both the openid and wallet scopes.
        scope: 'openid wallet email',
    })
   
    useEffect(() => {
      setLoading(true)
      uauth
        .user()
        .then(setUser)
        .catch(() => {})
        .finally(() => setLoading(false))
    }, [setUser]) // eslint-disable-line

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
            { 
            user ?
            <Box>
                <Menu>
                    <MenuButton
                    as={Button}
                    color={'white'} 
                    backgroundColor={'#4b47ee'}
                    _hover={{
                        bg: '#0b24b3'
                    }}
                    _active={{
                        bg: '#5361c7'
                    }}
                    size={size}
                    isLoading={loading}>
                    {user.sub}
                    <ArrowDownIcon/>
                    </MenuButton>
                    <MenuList>
                        <MenuItem onClick={onOpen}>Profile</MenuItem>
                        <Modal isCentered isOpen={isOpen} onClose={onClose}>
                            <ModalOverlay />
                            <ModalContent>
                            <ModalHeader>Profile</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody>
                                <Profile />
                            </ModalBody>

                            <ModalFooter>

                            </ModalFooter>
                            </ModalContent>
                        </Modal>
                        <MenuItem onClick={() => {handleLogout()}}>
                            Log Out
                        </MenuItem>
                    </MenuList>
                </Menu>
            </Box>
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
