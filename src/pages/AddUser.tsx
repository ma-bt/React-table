import {
    Flex, Spacer, Box, Heading,
    HStack,
    useOutsideClick,
    Input,
    Button,
    Collapse,
    ButtonGroup,
    VStack,
    Container,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
  } from '@chakra-ui/react'
  import { Link } from 'react-router-dom';
  
  import { AiOutlineSearch } from 'react-icons/ai'
  
  function AddUser() {
  
    return (
      <>
        <Container maxW='container' color='#262626'>
          <VStack>
            <Flex w="100%" alignItems="center" minWidth='max-content' gap='2'>
              <Box p='4' >
                <Heading as='h3' size='lg'>
                  UsersInfo
                </Heading>
              </Box>
              <Spacer />
  
              <ButtonGroup gap='3' me="4">
                <Link to="/"><Button colorScheme='purple'> Back </Button></Link>
              </ButtonGroup>
  
            </Flex>
            <VStack>
            <FormControl  isRequired >
              <FormLabel>First Name</FormLabel>
              <Input mb={4} placeholder='First name' />
  
              <FormLabel>Last Name</FormLabel>
              <Input mb={4} placeholder='Last name' />
  
              <FormLabel>Email</FormLabel>
              <Input mb={4} placeholder='Email' />
  
              <FormLabel>Gender</FormLabel>
              <Input mb={4} placeholder='Gender' />
  
              <FormLabel>IP Address</FormLabel>
              <Input mb={4} placeholder='Ip Address' />
  
  
            </FormControl>
            <Button w='full' colorScheme='purple'>Button</Button>
            </VStack>
  
  
          </VStack>
        </Container>
      </>
    )
  }
  
  export default AddUser;
  