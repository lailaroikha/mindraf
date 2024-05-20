'use client'

import { useState, useRef, useEffect } from 'react'
 

  export default function about() {

    return (
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-10 md:pt-40 md:pb-20">

          {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-10 md:pb-14">
            <h1 className=" text-5xl font-bold h2 mb-2">Our Vision</h1>
            <p className="text-xl text-gray-600">We strive to improve the overall return on investment in education by helping students learn more in less time and at a lower cost.</p>
            </div>
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className=" text-5xl font-bold h2 mb-4">A Smarter Way to Student</h1>
            <p className="text-xl text-gray-600">As the leading student-first connected learning platform, our mission is to help every student achieve their best, in school and beyond.</p>
            </div>


        {/* Section content */}
        <div className="md:grid md:grid-cols-12 md:gap-6">

          {/* Content */}
          <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6" data-aos="fade-right">


          {/* Our Teams */}
          <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6" data-aos="fade-right">
          <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-4">
          <h3 className="text-4xl font-bold h3 mb-3"> ABOUT US </h3>
          </div>


          {/* Tabs buttons */}
          <div className="mb-8 md:mb-0">
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3  'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">Own the study hour</div>
                    <div className="text-justify text-gray-600">Kha Journey is an online learning platform for course specific study resources. Founded by college student Andrew Grauer in 2006, Kha Journey is on a mission to help students graduate confident and prepared.</div>
                    <div className="text-justify text-gray-600 pb-2">Kha Journey is a platform dedicated to empowering individuals on their unique paths to personal and professional growth. Whether you're a student, a professional, or someone seeking to enhance your skills, Kha Journey offers a wide range of resources tailored to support your goals. With an extensive library of educational materials, expert guidance, and a community of like-minded learners, Kha Journey helps you navigate the challenges and opportunities on your path to success. Join us at Kha Journey and start your transformative learning experience today.</div>
                  </div>
                </a>
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3  'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">Educators</div>
                    <div className="text-gray-600 text-justify">Kha Journeys growing community of higher education faculty share the goals of helping fellow educators develop their teaching skills and helping students to learn and succeed in their studies. Through Kha Journey, educators share their resources, collaborate with other faculty, and hone new strategies for instruction. More than 200,000 educators are on the platform. Faculty contribute resources such as assignments, quizzes, case studies, lecture notes, and more. Faculty also join Kha Journey to learn new skills and teaching strategies from instructors and subject matter experts through a range of event formats, including workshops, discussions, and community gatherings.</div>
                  </div>
                </a>
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3  'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-4 text-pink-950">GIVING BACK</div>
                    <div className="font-bold leading-snug tracking-tight mb-1">Scholarships</div>
                    <div className="text-gray-600 text-justify">Take collaboration to the next level with security and administrative features built for teams.</div>
                  </div>
                </a>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </section>
)}