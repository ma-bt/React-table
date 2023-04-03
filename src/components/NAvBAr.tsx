import {
    Flex, Spacer, Box, Heading,
    Input,
    Hide,
    Show,
    Button,
    ButtonGroup
  } from '@chakra-ui/react'
  import { Link } from 'react-router-dom';
  import { inputItemProps } from '../constant/index';
  
  import React from 'react';
  import { AiOutlineSearch } from 'react-icons/ai'
  
  
  
  const NavBAr = ({ inputValue, setInputValue }: inputItemProps) => {
  
    const ref = React.useRef()
    const [isModalOpen, setIsModalOpen] = React.useState(false)
    // const [inputValue, setInputValue] = React.useState("")
  
    const showSearchBar = () => setIsModalOpen(!isModalOpen);
  
  
    return (
      <>
        <Flex minWidth='max-content' alignItems='center' gap='2'>
          <Box p='4' >
            <Heading as='h3' size='lg'>
              UsersInfo
            </Heading>
          </Box>
          <Spacer />
          <Hide breakpoint='(max-width: 1000px)'>
            <Box px='4' >
              {isModalOpen && (
                <Box ref={ref}>
                  <Input placeholder='search here...'
                    value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                </Box>
              )
              }
            </Box>
          </Hide>
  
          <ButtonGroup gap='3' me="4">
            <Hide breakpoint='(max-width: 1000px)'> <Button onClick={showSearchBar} cursor="pointer" aria-label="Search database"><AiOutlineSearch /></Button>    </Hide>
            <Link to="/add-users" ><Button colorScheme='purple'> Add user + </Button></Link>
          </ButtonGroup>
  
        </Flex>
        <Box>
          <Show breakpoint='(max-width: 820px)'>
            <Box px='4'><Input placeholder='search here...'
              value={inputValue} onChange={(e) => setInputValue(e.target.value)} /></Box>
          </Show>
        </Box>
      </>
    );
  }
  
  export default NavBAr;
  
  
  