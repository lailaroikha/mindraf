
import TypeAnimation from '@/components/elements/TypeAnimation'

export default function Hero() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out"> Mindraft </h1>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out"> <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-500"> Platform Belajar dan Berkarya Ilmiah </span></h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-600 mb-4" data-aos="zoom-y-out" data-aos-delay="150"> Mindraft menghadirkan semangat, motivasi, dan ruang diskusi yang mendorong pertumbuhan dan pencapaian akademik </p>
              <p className="text-center font-sora mb-8 text-1xl font-medium lg:text-3xl">
                <TypeAnimation sequence={["Mindraft! Naikin Semangat, Buka Peluang! "]} delay={3000} />
                </p>
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
              </div>
            </div>
          </div>         

        </div>

      </div>
    </section>
  )
}