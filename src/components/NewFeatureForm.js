import React, { useRef } from 'react';
import { Stack, FormControl, FormLabel, Input, Button, Textarea } from '@chakra-ui/react';
import { db } from '../firebase';
import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore";
import { useAuth } from '../contexts/AuthContext';

export default function NewFeatureForm() {

    const { user } = useAuth()
    const titleRef = useRef();
    const descriptionRef = useRef();

    const handleSubmit = async(e) => {
        e.preventDefault()

        try {
            const docRef = doc(db, "features", "count");
            const docSnap = await getDoc(docRef);
            await setDoc(doc(db, "features", (docSnap.data().count+1).toString()), {
                username: user.sub,
                title: titleRef.current.value,
                description: descriptionRef.current.value,
                timestamp: serverTimestamp()
            })
            await setDoc(doc(db, "features", "count"), {
                count: docSnap.data().count+1
            })
            window.location.reload()
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    return (
        <>
            <Stack spacing="6">
            <form onSubmit={handleSubmit}>
                <FormControl isRequired>
                    <FormLabel>Title</FormLabel>
                    <Input type="text" ref={titleRef}/>
                    <FormLabel mt="2">Description</FormLabel>
                    <Textarea size='lg' type="text" ref={descriptionRef}/>
                </FormControl>
                <Button mt="4" type="submit" size="lg">Post</Button>
            </form>
            </Stack>
        </>
    )
}
