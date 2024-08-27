'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface LinkItem {
  id: number;
  title: string;
  path: string;
}

const links: LinkItem[] = [
  {
    id: 0,
    title: 'Home',
    path: '/',
  },
  {
    id: 1,
    title: 'Services',
    path: '/services',
  },
  {
    id: 2,
    title: 'Resume',
    path: '/resume',
  },
  {
    id: 3,
    title: 'Projects',
    path: '/projects',
  },
  {
    id: 4,
    title: 'Contact',
    path: '/contact',
  },
];

const Nav: React.FC = () => {
  const pathname = usePathname();
  return (
    <div className='flex gap-8 '>
      {links.map((link) => (
        <Link
          key={link.id}
          href={link.path}
          className={`${link.path === pathname ? "text-accent border-b-2 border-accent" : ""} capitalize font-medium hover:text-accent transition-all`}>
          {link.title}
        </Link>
      ))}
    </div>
  );
};

export default Nav;
