import { AiOutlineGithub } from 'react-icons/ai'

export default function Social () {
  return (
    <div className='hidden md:fixed md:bottom-0 md:z-10 md:block md:w-32 '>
      <ul className=' flex flex-col items-center space-y-6 after:block after:h-28 after:w-0.5 after:bg-white'>
        <li className='pb-6'>
          <a
            href='https://github.com/hecsolmay/render-types'
            target='_blank'
            rel='noreferrer'
          >
            <AiOutlineGithub
              className='cursor-pointer text-white transition-transform hover:-translate-y-1 '
              size={25}
            />
          </a>
        </li>
      </ul>
    </div>
  )
}
