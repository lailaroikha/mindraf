

export default function Testimonials() {
  return (
    <section className="relative">

      {/* Illustration behind content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -mb-32" aria-hidden="true">
        <svg width="1760" height="518" viewBox="0 0 1760 518" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-02">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g transform="translate(0 -3)" fill="url(#illustration-02)" fillRule="evenodd">
            <circle cx="1630" cy="128" r="128" />
            <circle cx="178" cy="481" r="40" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 mb-4">Mindraft</h2>
            <p className="text-xl text-gray-600" data-aos="zoom-y-out"> Terus belajar, terus menulis, dan terus tumbuh. Mindraft percaya bahwa satu langkah kecil hari ini jauh lebih berharga daripada menunggu segalanya sempurna. Setiap proses memiliki maknanya sendiri, dan perjalananmu layak untuk dihargai. Kamu tidak sendiri. Kami pun pernah berada di titik yang sama, merasa bingung, lelah, bahkan ingin berhenti. Dari situlah kita belajar bahwa tidak apa-apa berjalan pelan asalkan tetap konsisten. Dan yang paling penting, jangan lupa untuk menikmati prosesnya.

 </p>
          </div>



          {/* Testimonials */}
          <div className="max-w-3xl mx-auto mt-20" data-aos="zoom-y-out">
            <div className="relative flex items-start border-2 border-gray-200 rounded bg-white">

              {/* Testimonial */}
              <div className="text-center px-12 py-8 pt-20 mx-4 md:mx-0">
                <blockquote className="text-gray-800 text-xl font-medium mb-4">
                  “ Kamu yang harus berusaha sendiri. Kamu yang harus bangkit, tumbuhkan semangat dari dalam dirimu.
Dan saat kamu merasa lelah atau kehilangan arah, Mindraft siap menemanimu mencari kembali motivasi itu. Karena semangat yang tumbuh dari dalam, akan jauh lebih kuat ketika kamu tahu ke mana harus melangkah. “
                </blockquote>
                <cite className="text-gray-950 block font-bold text-lg not-italic mb-1"> With Mindraft </cite>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}