'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';
import { CiMenuBurger } from 'react-icons/ci';
import Buttonui from '../ui/buttonui';

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

const SmNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const handleLinkClick = () => {
    setIsOpen(false); // Close the sheet when a link is clicked
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuBurger className="text-2xl text-accent cursor-pointer" aria-label="Open Menu" />
      </SheetTrigger>
      <SheetContent className="flex flex-col items-center p-4 bg-primary">
        {/* Branding */}
        <div className="text-4xl flex justify-center items-center mt-20">
          RJ<span className="text-accent-hover">47</span>
        </div>
        {/* Navigation Links */}
        <div className="flex flex-col gap-8 justify-center items-center mt-10">
          {links.map((link) => (
            <Link
              key={link.id}
              href={link.path}
              className={`${link.path === pathname ? 'text-accent border-b-2 border-accent' : ''
                } capitalize font-medium hover:text-accent transition-all`}
              onClick={handleLinkClick}
              aria-label={`Navigate to ${link.title}`}
            >
              {link.title}
            </Link>
          ))}
          <Link href="/contact" onClick={handleLinkClick}>
            <Buttonui title="Hire Me" />
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default SmNav;
