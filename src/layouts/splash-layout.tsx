'use client'

import { usePathname } from 'next/navigation'
import { useState } from 'react'

import SplashScreen from '@/components/splash-screen'
import { type DivProps } from '@/types/props'

export default function SplashLayout ({ children, ...props }: DivProps) {
  const pathname = usePathname()
  const isHome = pathname === '/'
  const [isLoading, setIsLoading] = useState(isHome)

  if (isLoading && isHome) { return <SplashScreen {...props} show={isLoading && isHome} finishLoading={() => { setIsLoading(false) }} /> }

  return <>{children}</>
}
