import {
    Modal, ModalOverlay, ModalContent, ModalHeader,
    ModalBody, ModalCloseButton, Button, useDisclosure, Box
} from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import NewFeatureForm from './NewFeatureForm'
import { useAuth } from '../contexts/AuthContext'

export default function NewFeatureModal() {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const { user } = useAuth();

    return (
      <>
      {
        user ? 
        <Box m="8">
          <Button rightIcon={<AddIcon w="75%"/>} onClick={onOpen}>Create Post</Button>
        </Box> : <></>
      }
        
  
        <Modal isCentered isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Request Feature</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <NewFeatureForm />
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    )
}