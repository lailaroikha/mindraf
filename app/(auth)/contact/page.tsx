'use client'
import Image from 'next/image'
import OurTeam from './components/bg-ourteam'
import team1 from '@/public/team/team1.png'
import team2 from '@/public/team/team2.png'
import team3 from '@/public/team/team3.png'

export default function contact() {
 
    return (
        <section>
            <OurTeam />
            <div className="-mt-10 max-w-4xl mx-auto sm:px-6 bg-white py-10 px-8 md:py-16 md:px-12  overflow-hidden" >
                <div className="flex flex-col  items-center">
  
             {/* CTA content */}
                    <div className="text-center ">
                        <h3 className="h3 text-center text-black mb-4">Introducing our leaders</h3>
                        <p className="text-black text-center text-lg mb-6">Our Board of Directors and Executive Leadership bring strong, effective and diverse leadership to every aspect of our business. We are committed to creating long-term, sustainable value for all company stakeholders.</p>
                     </div>
                </div>
            </div>

            <div className="max-w-3xl mx-auto mt-20" >
            <div className="relative flex items-start border-2 border-gray-200 rounded bg-white">

              {/* Team */}
              <div className="text-center px-12 py-8 pt-20 mx-4 md:mx-0">
                <div className="absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2">
                  
                  <Image className="relative rounded-full w-150 h-150" src={team1} alt="Testimonial 01" />
                </div>
                <h1 className="text-gray-950 block font-bold text-lg not-italic mt-10 mb-1">Omar Abbosh</h1>
                <span>CHIEF EXECUTIVE</span> 
                <p className="text-gray-800 text-xl text-justify font-medium mt-8 mb-8">
                Omar Abbosh has a career spanning more than 30 years driving growth and transformation for leading multinational companies. He comes to Pearson with a background steeped in technology and innovation, and with a deep understanding of how to shape and execute successful growth strategies in a world of disruption.
                </p>
                <div className="text-gray-600">
            </div>
              </div>
            </div>
            </div>

            {/* Team2 */}
            <div className="max-w-3xl mx-auto mt-20" >
            <div className="relative flex items-start border-2 border-gray-200 rounded bg-white">

            <div className="text-center px-12 py-8 pt-20 mx-4 md:mx-0">
                <div className="absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2">
                  
                  <Image className="relative rounded-full w-150 h-150" src={team2}  alt="Testimonial 01" />
                </div>
                <h1 className="text-gray-950 block font-bold text-lg not-italic mt-10 mb-1">Omar Abbosh</h1>
                <span>CHIEF EXECUTIVE</span> 
                <p className="text-gray-800 text-xl text-justify font-medium mt-8 mb-8">
                Omar Abbosh has a career spanning more than 30 years driving growth and transformation for leading multinational companies. He comes to Pearson with a background steeped in technology and innovation, and with a deep understanding of how to shape and execute successful growth strategies in a world of disruption.
                </p>
                <div className="text-gray-600">
            </div>
              </div>

            </div  >
            </div>

            {/* Team3 */}

            <div className="max-w-3xl mx-auto mt-20" >
            <div className="relative flex items-start border-2 border-gray-200 rounded bg-white">

            <div className="text-center px-12 py-8 pt-20 mx-4 md:mx-0">
                <div className="absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2">
                  
                  <Image className="relative rounded-full w-150 h-150 " src={team3}  alt="Testimonial 01" />
                </div>
                <h1 className="text-gray-950 block font-bold text-lg not-italic mt-10 mb-1">Omar Abbosh</h1>
                <span>CHIEF EXECUTIVE</span> 
                <p className="text-gray-800 text-xl text-justify font-medium mt-8 mb-8">
                Omar Abbosh has a career spanning more than 30 years driving growth and transformation for leading multinational companies. He comes to Pearson with a background steeped in technology and innovation, and with a deep understanding of how to shape and execute successful growth strategies in a world of disruption.
                </p>
                <div className="text-gray-600">
            </div>
              </div>

            </div  >
            </div>
            

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
                {/* Section header */}
            <div className="max-w-3xl mx-auto text-left pb-12 md:pb-16">
            <h1 className="h2 mb-4">Contact Us</h1>
            <p className='text-xl pb-2 text-gray-600'>Reach us on any social here, We are glad to help</p>
            <h2>Email: khajourney@example.com</h2>
            <h2>Phone: +62 85 1234 5678</h2>
            <h2>Telegram: @khajourney</h2>
            <h2>Facebook: Kha Journey</h2>
            <h2>Instagram: @khajourney</h2>
            <h2>Tiktok: @khajourney</h2>
            
        
            </div>
                </div>
            </div>
        </section>
    )
}