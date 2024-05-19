import Link from 'next/link';
import { UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import { auth } from '@clerk/nextjs/server';
import EagleIcon from '../public/EstateEagleLogo.png'

const Header = async ({}) => {
  const { userId } = auth();

  return (
    <nav className='flex items-center justify-between px-6 py-4 mb-5 bg-black'>
      <div className='flex items-center'>
        <Link href='/'>
          <div className='text-lg font-bold text-white uppercase'>
            <Image src={EagleIcon} alt="Estate Eagle Logo" width={50} height={50} />
          </div>
        </Link>
      </div>
      <div className='flex items-center text-white'>
        {!userId && (
          <>
            <Link
              href='sign-in'
              className='text-gray-300 hover:text-white mr-4'
            >
              Sign In
            </Link>
            <Link
              href='sign-up'
              className='text-gray-300 hover:text-white mr-4'
            >
              Sign Up
            </Link>
          </>
        )}
        <div className='ml-auto'>
          <UserButton afterSignOutUrl='/' />
        </div>
      </div>
    </nav>
  );
};

export default Header;