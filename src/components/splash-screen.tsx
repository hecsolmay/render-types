import anime from 'animejs'
import Image from 'next/image'
import { useEffect } from 'react'

import { type DivProps } from '@/types/props'

interface SplashScreenProps extends DivProps {
  show?: boolean
  finishLoading: () => void
}

export default function SplashScreen ({
  show = false,
  finishLoading,
  ...props
}: SplashScreenProps) {
  const animate = () => {
    const loader = anime.timeline({
      complete: () => {
        finishLoading()
      }
    })

    loader
      .add({
        targets: '#logo',
        delay: 0,
        scale: 1,
        duration: 500,
        easing: 'easeInOutExpo'
      })
      .add({
        targets: '#logo',
        delay: 100,
        scale: 1.25,
        duration: 500,
        easing: 'easeInOutExpo'
      })
      .add({
        targets: '#logo',
        delay: 100,
        scale: 1,
        duration: 500,
        easing: 'easeInOutExpo'
      })
      .add({
        targets: '#logo',
        delay: 100,
        scale: 1.25,
        duration: 500,
        easing: 'easeInOutExpo'
      })
      .add({
        targets: '#logo',
        delay: 100,
        scale: 1,
        duration: 500,
        easing: 'easeInOutExpo'
      })
  }

  useEffect(() => {
    const timeout = setTimeout(() => {}, 10)
    animate()
    return () => {
      clearTimeout(timeout)
    }
  }, [])

  if (!show) return null

  return (
    <div className='flex h-screen items-center justify-center' {...props}>
      <Image
        id='logo'
        src='/assets/light-logo.png'
        alt='Imagen del logo'
        width={60}
        height={60}
      />
    </div>
  )
}
