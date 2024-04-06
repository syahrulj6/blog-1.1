import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button } from '@nextui-org/react';
import { ThemeSwitcher } from '../themes-switcher/ThemesSwitcher';
import { Links as Read } from '@/components/navbar/links/Links';
import Link from 'next/link';

export const Header = () => {
  return (
    <Navbar shouldHideOnScroll className="">
      <NavbarBrand>
        <Read />
      </NavbarBrand>

      <NavbarContent justify="end" className="flex gap-2">
        <ThemeSwitcher />
      </NavbarContent>
    </Navbar>
  );
};
