import Features from '@/components/features'
import FeaturesBlocks from '@/components/features-blocks'
import Hero from '@/components/hero'
import Testimonials from '@/components/testimonials'

export const metadata = {
    title: 'Home - Kha Journey',
    description: 'Sebuah landing page',
  }
  
  export default function Home() {
    return (
      <>
        <Hero />
        <Features />
        <FeaturesBlocks />
        <Testimonials />
      </>
    )
  }
  