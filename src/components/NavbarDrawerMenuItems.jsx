import { useState } from 'react';
import { Box, NavLink } from '@mantine/core';

const data = [
  { label: 'Account' },
  {
    label: 'Orders',
  },
  { label: 'Near By Store' },
  { label: 'Logout' },
];

const NavbarDrawerMenuItems = () => {
  const [active, setActive] = useState(0);

  const items = data.map((item, index) => (
    <NavLink
      key={item.label}
      active={index === active}
      label={item.label}
      description={item.description}
      onClick={() => setActive(index)}
      color="purple"
    />
  ));

  return <Box w={300}>{items}</Box>;
}

export default NavbarDrawerMenuItems;  