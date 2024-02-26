'use client';

import { useState } from 'react';
import styles from './links.module.css';
import NavLink from './navLinks/NavLinks';
import Image from 'next/image';

const links = [
  {
    title: 'ALL',
    path: '/',
  },
  {
    title: 'Technology',
    path: '/technology',
  },
  {
    title: 'Design',
    path: '/design',
  },
  {
    title: 'Art',
    path: '/art',
  },
  {
    title: 'Education',
    path: '/education',
  },
  {
    title: 'Code',
    path: '/code',
  },
];

const Links = ({ session }: any) => {
  const [open, setOpen] = useState(false);

  // TEMPORARY
  // const session = true;
  // const isAdmin = true;

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}
      </div>
      {open ? (
        <Image className={styles.menuButton} src="/close.png" alt="" width={25} height={25} onClick={() => setOpen((prev) => !prev)} />
      ) : (
        <Image className={styles.menuButton} src="/more.png" alt="" width={30} height={30} onClick={() => setOpen((prev) => !prev)} />
      )}
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink item={link} key={link.title} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
