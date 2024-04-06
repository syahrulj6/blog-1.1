'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLinks = ({ item }: any) => {
  const pathName = usePathname();

  return (
    <Link href={`/kategori/${item.category}`} className={` hover:text-primary ${pathName === item.path && 'text-primary-500'}`}>
      {item.category}
    </Link>
  );
};

export default NavLinks;
