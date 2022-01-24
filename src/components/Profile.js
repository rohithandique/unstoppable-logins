import {
    Heading, Box, Center, Text, useColorModeValue, useToast
  } from '@chakra-ui/react';
import { useAuth } from '../contexts/AuthContext';
import { CheckCircleIcon, WarningIcon, CopyIcon } from '@chakra-ui/icons';

export default function Profile() {

    const { user } = useAuth()
    const toast = useToast()

    return (
      <Center py={6}>
        <Box
          maxW={'320px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.900')}
          rounded={'lg'}
          p={6}
          textAlign={'center'}>
          <Heading fontSize={'2xl'} fontFamily={'body'}>
            @{user.sub}
          </Heading>
          <Text fontWeight={600} color={'gray.500'} mb={4} _hover={{
              _bg: '#EAEAEA'
            }}>
            {user.wallet_address}
            <CopyIcon ml="1"
            onClick={() => {
              navigator.clipboard.writeText(user.wallet_address)
              toast({
                title: 'Copied to Clipboard.',
                description: "Address has been copied",
                status: 'success',
                duration: 2000,
                isClosable: true,
              })
            }}
            cursor={"pointer"}
            />
          </Text>
          <Text
            textAlign={'center'}
            color={useColorModeValue('gray.700', 'gray.400')}
            px={3}>
            {user.email}
            {user.email_verified ? <CheckCircleIcon ml="1" /> : <WarningIcon ml="1" />}
          </Text>
        </Box>
      </Center>
    );
}