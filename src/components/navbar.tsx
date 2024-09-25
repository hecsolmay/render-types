'use client'

import { Fragment } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  Popover,
  Transition,
  PopoverButton,
  PopoverPanel,
  PopoverGroup
} from '@headlessui/react'
import { usePathname } from 'next/navigation'

export const Navbar = () => {
  const pathname = usePathname()
  return (
    <Popover className='absolute  mx-auto w-full px-2 sm:px-20'>
      <div className='mx-2 px-2 md:mx-10'>
        <div className='flex items-center justify-between py-4 md:justify-start md:space-x-10'>
          <div className='flex flex-1 justify-start lg:w-0'>
            <Link href='/'>
              <Image
                src='/assets/light-logo.png'
                alt=''
                width={35}
                height={35}
              />
            </Link>
          </div>
          <div className='-my-2 -mr-2 md:hidden'>
            <PopoverButton className='inline-flex items-center justify-center rounded-md bg-transparent p-2 text-neutral-100 hover:text-neutral-200 focus:outline-none   '>
              <span className='sr-only'>Open menu</span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='size-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                />
              </svg>
            </PopoverButton>
          </div>
          <PopoverGroup as='nav' className='hidden space-x-10 md:flex'>
            <Link
              className={
                pathname === '/server'
                  ? 'text-base font-bold text-neutral-100 hover:text-neutral-200'
                  : 'text-base font-semibold text-neutral-100 hover:text-neutral-300'
              }
              href='/server'
            >
              Servidor
            </Link>

            <Link
              className={
                pathname === '/client'
                  ? 'text-base font-bold text-neutral-100 hover:text-neutral-200'
                  : 'text-base font-medium text-neutral-100 hover:text-neutral-300'
              }
              href='/client'
            >
              Cliente
            </Link>
          </PopoverGroup>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter='duration-200 ease-out'
        enterFrom='opacity-0 scale-95'
        enterTo='opacity-100 scale-100'
        leave='duration-100 ease-in'
        leaveFrom='opacity-100 scale-100'
        leaveTo='opacity-0 scale-95'
      >
        <PopoverPanel
          focus
          className='absolute inset-x-0 top-0 origin-top-right p-2 transition md:hidden'
        >
          <div className='ring-1/5 divide-y-2 divide-neutral-50 rounded-lg bg-white shadow-lg ring-black'>
            <div className='px-5 pb-6 pt-5'>
              <div className='flex items-center justify-between'>
                <div>
                  <Link href='/'>
                    <Image src='/dark-logo.png' alt='' width={35} height={35} />
                  </Link>
                </div>
                <div className='-mr-2'>
                  <PopoverButton className='inline-flex items-center justify-center rounded-md bg-transparent p-2 text-neutral-400 hover:bg-neutral-100 hover:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                    <span className='sr-only'>Close menu</span>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className='size-6'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M6 18L18 6M6 6l12 12'
                      />
                    </svg>
                  </PopoverButton>
                </div>
              </div>
            </div>
            <div className='space-y-6 px-5 py-6'>
              <div className='grid grid-cols-1 gap-x-8 gap-y-4'>
                <Link
                  className={
                    pathname === '/server'
                      ? 'text-base font-bold text-neutral-500 hover:text-neutral-900'
                      : 'text-base font-medium text-neutral-500 hover:text-neutral-900'
                  }
                  href='/server'
                >
                  Servidor
                </Link>

                <Link
                  className={
                    pathname === '/client'
                      ? 'text-base font-bold text-neutral-500 hover:text-neutral-900'
                      : 'text-base font-medium text-neutral-500 hover:text-neutral-900'
                  }
                  href='/client'
                >
                  Cliente
                </Link>
              </div>
            </div>
          </div>
        </PopoverPanel>
      </Transition>
    </Popover>
  )
}
