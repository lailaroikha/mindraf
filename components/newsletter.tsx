export default function Newsletter() {
    return (
      <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pb-12 md:pb-20">

            <div className="relative bg-gray-900 rounded py-10 px-8 md:py-16 md:px-12 shadow-2xl overflow-hidden" data-aos="zoom-y-out">
  

                <div className="text-center lg:text-left lg:max-w-xl">
                  <h3 className="h3 text-white mb-2">Stay Updated with Kha Journey!</h3>
                  <p className="text-gray-300 text-lg mb-6">Be the first to know about our latest adventures, exclusive content, and special offers. Subscribe now to stay connected!</p>
                  <form className="w-full lg:w-auto">
                    <div className="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-md lg:mx-0">
                      <input type="email" className="form-input w-full appearance-none bg-gray-800 border border-gray-700 focus:border-gray-600 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-white placeholder-gray-500" placeholder="Your email…" aria-label="Your email…" />
                      <a className="btn text-white bg-blue-600 hover:bg-blue-700 shadow" href="#0">Subscribe</a>
                    </div>
                    <p className="text-sm text-gray-400 mt-3">No spam. You can unsubscribe at any time.</p>
                  </form>
                </div>
  
              </div>
  
            </div>
  
          </div>
      </section>
    )
  }