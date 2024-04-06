'use client';

import { useEffect, useState } from 'react';

import NavLink from './navLinks/NavLinks';
import Link from 'next/link';
import { Navbar, NavbarBrand, NavbarContent, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Button } from '@nextui-org/react';
import { SearchInput } from '../../search-input/search-input';
import axios from 'axios';

export const Links = () => {
  const [open, setOpen] = useState(false);
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<{ category: string }[]>('http://localhost:4000/api/blog');
        const uniqueCategories = Array.from(new Set(response.data.map((post) => post.category)));
        setCategories(uniqueCategories);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Navbar onMenuOpenChange={setOpen} className="w-32">
      <NavbarContent>
        <NavbarMenuToggle aria-label={open ? 'Close menu' : 'Open menu'} className="" />
        <NavbarBrand>
          <p className="font-bold text-inherit">READ</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarMenu className="md:w-2/4 flex flex-col ">
        <Link href="/" className="mt-4  mb-2 font-bold text-inherit hover:text-primary-500 transition-colors text-xl">
          TECSNAG
        </Link>
        <div className="">
          <SearchInput />
        </div>
        <h2 className="font-bold text-xl md:mt-5">Category</h2>
        {categories.map((category, index) => (
          <NavbarMenuItem className="" key={`${category}-${index}`}>
            <NavLink item={{ category }} key={category} />
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};
