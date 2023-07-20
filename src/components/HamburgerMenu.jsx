import React from 'react'
import { useDisclosure } from '@mantine/hooks';
import { Burger } from '@mantine/core';

const HamburgerMenu = () => {
  const [opened, { toggle }] = useDisclosure(false);
  const label = opened ? 'Close navigation' : 'Open navigation';
  
  // return <Burger opened={opened} onClick={toggle} aria-label={label} />;
  return <Burger color='#8b8000' opened={opened} aria-label={label} />;
  
}

export default HamburgerMenu;  