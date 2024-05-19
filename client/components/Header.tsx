import Link from 'next/link';
import { UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import { auth } from '@clerk/nextjs/server';
import EagleIcon from '../images/output-onlinepngtools.png'

const Header = async ({}) => {
  const { userId } = auth();

  return (
    <nav className='bg-headerBG flex items-center justify-between px-6'>
      <div className='flex items-cente'>
        <Link href='/'>
          <div className='text-lg font-bold uppercase'>
            <Image src={EagleIcon} alt="Estate Eagle Logo" width={80} height={80} />
          </div>
        </Link>
      </div>
      <div className='flex items-center text-white'>
        {!userId && (
          <>
            <Link
              href='sign-in'
              className='text-main hover:text-black mr-4'
            >
              Sign In
            </Link>
            <Link
              href='sign-up'
              className='text-smokeGrey hover:text-black mr-4 bg-main px-3 py-2 rounded-full'
            >
              Sign Up
            </Link>
          </>
        )}
        <div className='ml-auto'>
          <UserButton afterSignOutUrl='/'/>
        </div>
      </div>
    </nav>
  );
};

export default Header;