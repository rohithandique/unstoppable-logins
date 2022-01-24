import React, { useEffect, useCallback } from 'react';
import Navbar from './components/Navbar';
import {
  Alert, AlertIcon, AlertTitle, AlertDescription
} from '@chakra-ui/react'
import { useAuth } from './contexts/AuthContext';
import NewFeatureModal from "./components/NewFeatureModal"
import Feature from './components/Feature';
import { db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";
export default function Forum() {

  const { user, count, setCount } = useAuth()
  const getCount = useCallback(async() => {
    try {
        const docRef = doc(db, "features", "count");
        const docSnap = await getDoc(docRef);
        setCount(docSnap.data().count);
    } catch(err) {
        console.log("Couldn't get Document: "+err);
    }
  }, [setCount])

  console.log(count)

  useEffect(() => {
    getCount()
  }, [getCount]);
  
  return (
      <>
        {user ? "" : 
        <Alert status='error'>
          <AlertIcon />
          <AlertTitle mr={2}>You are not logged in!</AlertTitle>
          <AlertDescription>Please login to add posts.</AlertDescription>
        </Alert>
        }
        <Navbar />
        <NewFeatureModal />
        <Feature count={count}/>
      </>
  );
}
