import React from 'react';
import Image from 'next/image'; // Assuming you are using Next.js for image optimization
import OurCompany from '@/public/ourteam/company-banner.webp'; // Adjust the path to your image

const OurTeam: React.FC = () => {
  return (
    <div className="mt-20 mx-auto h-screen w-full ">
      <div className=" relative">
        <div className="hero" style={{ position: 'relative', width: '100%', height: '100vh' }}>
          <Image 
            src={OurCompany} 
            alt="Hero Image" 
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            style={{ zIndex: -1 }}
          />

        </div>
      </div>
    </div>
  );
};

export default OurTeam;