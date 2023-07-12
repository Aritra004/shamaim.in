import React from 'react';
import { useState } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button, Group } from '@mantine/core';
import { Link, NavLink } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";
import NavbarDrawerMenuItems from "./NavbarDrawerMenuItems";


const NavbarMenuDrawer = () => {
  const [opened, { open, close }] = useDisclosure(false);
  
  const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => {
      setIsHover(true);
   };
  const handleMouseLeave = () => {
      setIsHover(false);
   };

  const DrawerMenuItemStyles = {

    padding:'10px',
    fontFmaily:'poppins',
    
  };

  const AccountMenuItemStyles = {

    backgroundColor: isHover?'#000000':'#ffffff',
    color: isHover?'#ffffff':'#000000',
  }

  const DrawerMenuStyles = {

    padding:'20px',

  };

  return (
    <>
    <Drawer 
      opened={opened} 
      onClose={close} 
      position="right" 
      title="SHAMAIM"
      styles={{title:{padding:'30px',fontWeight:'500',width:'100%',borderBottom:'3px solid #0165a6'}}}
      >
      {/* Drawer content */}
      <NavbarDrawerMenuItems/>
    </Drawer>

      <Group position="center">
        <Button onClick={open}>
          <HamburgerMenu />
        </Button>
      </Group>
    </>
  );
}

export default NavbarMenuDrawer;