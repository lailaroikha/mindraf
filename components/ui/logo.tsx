import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import IconLogo from '@/public/images/logokhajourney.webp'

const Logo: React.FC = () => {
  return (
    <Link href="/" aria-label="Cruip">
      <Image className='w-20 h-20'
        src={IconLogo} 

        alt="Kha Journey"
      />
    </Link>
  )
}

export default Logo