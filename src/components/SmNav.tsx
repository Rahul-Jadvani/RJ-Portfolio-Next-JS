'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';
import { CiMenuBurger } from 'react-icons/ci';

interface LinkItem {
  id: number;
  title: string;
  path: string;
}

const links: LinkItem[] = [
  { id: 0, title: 'Home', path: '/' },
  { id: 1, title: 'Services', path: '/services' },
  { id: 2, title: 'Projects', path: '/projects' },
  { id: 3, title: 'Contact', path: '/contact' },
];

const SmNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const handleLinkClick = () => {
    setIsOpen(false) // Close the sheet when a link is clicked
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className='flex justify-center items-center'>
        <CiMenuBurger className='text-2xl text-accent' />
      </SheetTrigger>
      <SheetContent className='flex-col'>
        <div className='text-4xl flex justify-center items-center mt-40 absolute left-[38%]'>
          RJ<span className='text-accent-hover'>47</span>
        </div>
        <div className='flex gap-8 flex-col justify-center items-center absolute left-[40%] top-[40%]'>
          {links.map((link) => (
            <Link
              key={link.id}
              href={link.path}
              className={`${link.path === pathname ? 'text-accent border-b-2 border-accent' : ''} capitalize font-medium hover:text-accent transition-all`}
              onClick={handleLinkClick} // Close the sheet on click
            >
              {link.title}
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default SmNav;
