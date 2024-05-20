'use client'
import Image from 'next/image'
import FeaturesBg from '@/public/images/features-bg.png'

export default function contact() {
    return (
    <div className="hero2 clt-banner mh80">
    <div className="container" style={{ position: "unset" }}>
        <div className="hero-content hero2-content-left" style={{ position: "absolute", left: "8%" }}>
            <div className="row">
                <div className="col-md-12">
                    <h1 className="hero2-h1 white text-center main-title">Chinese Language <br/>Teaching
                    </h1>
                </div>
            </div>
        </div>
    </div>
    

        <section className="">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
                {/* Section header */}
            <div className="max-w-3xl mx-auto text-left pb-12 md:pb-16">
            <h1 className="h2 mb-4">Contact Us</h1>
            <p className="text-xl pb-2 text-gray-600">Reach us on any social here, We're glad to help</p>
            <h2>Email: khajourney@example.com</h2>
            <h2>Phone: +62 85 1234 5678</h2>
            <h2>Telegram: @khajourney</h2>
            <h2>Facebook: Kha Journey</h2>
            <h2>Instagram: @khajourney</h2>
            <h2>Tiktok: @khajourney</h2>
            
            <h1 className="h2 mb-4">Location</h1>
            <div className="relative inline-flex flex-col">
                      <Image className="md:max-w-none mx-auto rounded" src={FeaturesBg} width={500} height="462" alt="Features bg" />
                </div>
            </div>
                </div>
            </div>
        </section>
        </div>
    )
}