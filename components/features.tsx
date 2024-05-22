export default function Features() {
 
  return (
    <section className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0  pointer-events-none mb-16" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 transform -translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="font-bold pb-2 text-6xl h2 mb-4"><span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600"> Kha Journey, </span> Digital Learning Platform</h1>
            <p className="text-xl text-gray-600">Leverage the power of Kha Journey, its credibility, and relationship with college students and Gen Z to engage them through unique student offers and impactful activations that will help them succeed on their educational journey.</p>
          </div>
        </div>
      </div>
    </section>
  )
}