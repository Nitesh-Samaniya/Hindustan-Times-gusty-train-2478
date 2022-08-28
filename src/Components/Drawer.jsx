import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
    Input,
    Tag
  } from "@chakra-ui/react";
  import { HamburgerIcon } from "@chakra-ui/icons";
  
  import React from "react";
import { Link } from "react-router-dom";
  
  export function DrawerExample() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();
  
    return (
      <>
        {/* <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
          Open
        </Button> */}
        <div>
          <div style={{ display: "flex",gap:"0.5rem", cursor: "pointer"}} onClick={onOpen}>
            <div>
              <HamburgerIcon />
            </div>
            <div>Explore</div>
          </div>
        </div>
        <Drawer
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent bg='#011e29' p='10px'>
            <DrawerCloseButton />
            {/* <DrawerHeader>Create your account</DrawerHeader> */}
            <img width='250px' src="https://www.hindustantimes.com/res/images/ht-logo.svg" alt="ht" />

  
            <DrawerBody>
              {/* <Input placeholder="Type here..." /> */}
              <div style={{color:'white',display:'flex',flexWrap:'wrap',gap:'20px'}}>
                <Link to="/"><Tag>Home</Tag></Link>
                <Link to="/business"><Tag>Business</Tag></Link>
                <Link to="/entertainment"><Tag>Entertainment</Tag></Link>
                <Link to="/sports"><Tag>Sports</Tag></Link>
                <Link to="/health"><Tag>Health</Tag></Link>
                <Link to="/science"><Tag>Science</Tag></Link>
                <Link to="/tech"><Tag>Tech</Tag></Link>
                <Link to="/politics"><Tag>Politics</Tag></Link>
                <Link to="/bitcoin"><Tag>Bitcoin</Tag></Link>
              </div>
            </DrawerBody>
  
            <DrawerFooter>
              <Button variant="outline" mr={6} onClick={onClose} color='white'>
                Cancel
              </Button>
              {/* <Button colorScheme="blue">Save</Button> */}
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    );
  }
  