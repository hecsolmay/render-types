import { AiOutlineGithub } from 'react-icons/ai'

export default function Footer () {
  return (
    <footer>
      <div className='flex h-16 flex-col items-center justify-center md:hidden'>
        <ul className='flex flex-row items-center space-x-6'>
          <li>
            <a
              href='https://github.com/hecsolmay/render-types'
              target='_blank'
              rel='noreferrer'
            >
              <AiOutlineGithub
                className='cursor-pointer text-white  transition-transform hover:-translate-y-1 '
                size={25}
              />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
