import Link from 'next/link';
import { UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import {useEffect, useState} from 'react';
import { auth } from '@clerk/nextjs/server';
import EagleIcon from '../images/output-onlinepngtools.png'

const Header = () => {
    const [userId, setUserId] = useState<string | null>(null);
  

    useEffect(() => {
        const fetchAuth = async () => {
          try {
            const { userId } = await auth();
            setUserId(userId);
          } catch (error) {
            console.error('Failed to fetch authentication status:', error);
            setUserId(null); 
          }
        };
        fetchAuth();
      }, []);
  return (
    <nav className = 'bg-white flex items-center justify-between px-6'>
      <div className='flex items-center'>
        <Link href='/'>
          <div className='text-lg font-bold uppercase'>
            <Image src={EagleIcon} alt="Estate Eagle Logo" width={80} height={80} />
          </div>
        </Link>
      </div>
      <div className='flex items-center text-white'>
        <div className='ml-auto'>
          <UserButton afterSignOutUrl='/'/>
        </div>
      </div>
    </nav>
  );
};

export default Header;