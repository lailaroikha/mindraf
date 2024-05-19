import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const Logo: React.FC = () => {
  return (
    <Link href="/" aria-label="Cruip">
      <Image 
        src="/images/logokhajourney.png" 
        width={50} 
        height={70} 
        alt="Kha Journey"
      />
    </Link>
  )
}

export default Logo