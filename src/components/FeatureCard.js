import React, { useState, useEffect, useCallback } from 'react';
import { db } from '../firebase';
import { doc, getDoc } from "firebase/firestore";
import {
    chakra, Box, Flex, Skeleton, Stack
} from "@chakra-ui/react";

export default function FeatureCard(props) {

    const { id } = props;
    const [data, setData] = useState({})

    const getData = useCallback(async()=>{
        try {
            const docRef = doc(db, "features", id.toString());
            const docSnap = await getDoc(docRef);
            setData(docSnap.data())
        } catch(err) {
            console.log("Can't load post: " + err)
        }
    }, [id])

    useEffect(() => {
        let isCancelled = false;
        if(!isCancelled) {
            getData()
        }
        
        return () => {
            isCancelled = true;
        }
    }, [getData]);

    
    
    return (
        <>
        {
            Object.keys(data).length !== 0 ?  
            <Flex bg="#F9FAFB" p={50} w="full"
    alignItems="center" justifyContent="center" 
    >
                <Box mx="auto" px={8} py={4} rounded="lg" shadow="lg"
                bg="white" maxW="2xl"
                >
                    <Flex justifyContent="space-between" alignItems="center">
                        <chakra.span fontSize="sm" 
                        color="gray.600"
                        >
                        {data.timestamp ? "" : ""}
                        </chakra.span>
                    </Flex>
                    <Box mt={2}>
                        <chakra.h1 fontSize="2xl" color="gray.700"
                        fontWeight="700" _hover={{
                            color: "gray.600",
                        }}
                        >
                        {data.title}
                        </chakra.h1>
                        <chakra.p mt={2} color="gray.600">
                        {data.description}
                        </chakra.p>
                    </Box>
                
                    <Flex justifyContent="space-between" alignItems="center" mt={4}>
                        <Flex alignItems="center">
                        <chakra.h1
                            color="gray.700"
                            fontWeight="700"
                        >
                            {data.username ? data.username : ""}
                        </chakra.h1>
                        </Flex>
                    </Flex>
                </Box>
            </Flex>
            : 
            <Stack>
                <Skeleton height="20vh"/>
                <Skeleton height="20vh"/>
                <Skeleton height="20vh"/>
            </Stack>
        }
        </>
        
    
    )
}
