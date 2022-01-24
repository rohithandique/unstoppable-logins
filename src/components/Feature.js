import React from 'react';
import FeatureCard from './FeatureCard';
import {
    Skeleton, Stack
} from "@chakra-ui/react";

export default function Feature(props) {

    const { count } = props;
    const listItems = Array.from({length: count}, (_, i) => i + 1).map((number, index)=>
        <FeatureCard key={count-index} id={count-index}/>
    )
    console.log(listItems)

    return (
        <>
        {
            listItems.length!==0 ? 
            listItems : 
            <Stack>
                <Skeleton height="20vh"/>
                <Skeleton height="20vh"/>
                <Skeleton height="40vh"/>
            </Stack>
        }
        </>
    )
}
