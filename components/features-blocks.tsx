export default function FeaturesBlocks() {
    return (
      <section className="relative">
  
        {/* Section background (needs .relative class on parent and next sibling elements) */}
        <div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none" aria-hidden="true"></div>
        <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>
  
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20">
  
            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h2 className="h2 text-3xl font-bold mb-4">Bukan solusi instan, tapi teman yang menguatkan prosesmu</h2>
              <p className="text-xl text-gray-600">Mindraft hadir bukan untuk membuatmu langsung bisa. Tapi untuk menemanimu berpikir, menulis, dan tumbuh — satu langkah kecil yang berarti.</p>
            </div>

            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h2 className="h2 text-3xl font-bold mb-4">Dirancang untuk Menemani Proses Belajarmu</h2>
              
            </div>
  
            {/* Items */}
            <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
  
              {/* 1st item */}
              <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
                <h4 className="text-gray-800 text-xl font-bold leading-snug tracking-tight mb-1">📝 Tips & Trik Menulis</h4>
                <p className="text-gray-600 text-center">Kumpulan panduan menulis karya tulis, dari ide hingga revisi. Bikin proses menulis terasa lebih ringan dan terarah.</p>
              </div>
  
              {/* 2nd item */}
              <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
                <h4 className="text-gray-800 text-xl font-bold leading-snug tracking-tight mb-1">🌟 Motivasi Harian</h4>
                <p className="text-gray-600 text-center">Kata-kata penguat dari pengalaman nyata. Baca saat kamu lelah, buntu, atau butuh semangat baru.</p>
              </div>
  
              {/* 3rd item */}
              <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
                <h4 className="text-gray-800 text-xl font-bold leading-snug tracking-tight mb-1">📚 Cerita Kita</h4>
                <p className="text-gray-600 text-center">Berisi kisah inspiratif dari mahasiswa dan peneliti muda. Bukti bahwa kamu tidak sendiri dalam proses ini.</p>
              </div>
  
              {/* 4th item */}
              <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
                <h4 className="text-gray-800 text-xl font-bold leading-snug tracking-tight mb-1">🎓 Tugas Akhir Asyik</h4>
                <p className="text-gray-600 text-center">Temukan cara asyik dan bermakna dalam menyelesaikan tugas akhir. Bangkitkan kembali semangat menulis.</p>
              </div>
  
              {/* 5th item */}
              <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
                <h4 className="text-gray-800 text-xl font-bold leading-snug tracking-tight mb-1">🤝 Kolaborasi Proyek</h4>
                <p className="text-gray-600 text-center">Wadah untuk menjalin kolaborasi: cari rekan riset, projek menulis bareng, atau sekadar saling dukung.</p>
              </div>
  
              {/* 6th item */}
              <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
                <h4 className="text-gray-800 text-xl font-bold leading-snug tracking-tight mb-1">💬 Pertemuan Diskusi Kita</h4>
                <p className="text-gray-600 text-center">Jadwal dan link Zoom untuk sesi diskusi terbuka, nugas bareng, atau ruang tanya-jawab penuh semangat.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }