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
            <h1 className="font-bold pb-2 text-6xl h2 mb-4"><span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">Mindraft, </span> untuk kamu yang sedang belajar, menulis, dan bertumbuh </h1>
            <p className="text-xl text-gray-600">Di Mindraft, kamu bisa menemukan berbagai tips dan trik akademik yang membantu proses menulis terasa lebih ringan dan menyenangkan. Tak hanya itu, tersedia juga motivasi dari pengalaman nyata mahasiswa dan peneliti muda yang pernah berada di posisi yang sama, penuh tantangan namun tetap berjuang. Mindraft juga menyediakan ruang diskusi yang suportif dan saling mendukung, tempatmu berbagi cerita, bertanya, atau sekadar menguatkan diri bersama komunitas yang memahami.</p>
          </div>
        </div>
      </div>
    </section>
  )
}