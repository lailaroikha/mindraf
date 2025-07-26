import React from 'react';

const Card: React.FC = () => {
    return (
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pb-12 md:pb-20">
  
            {/* CTA box */}
            <div className="relative bg-gray-900 rounded py-10 px-8 md:py-16 md:px-12 shadow-2xl overflow-hidden" >
  
              <div className="relative flex flex-col  items-center">
  
                {/* CTA content */}
                <div className="text-center ">
                  <h3 className="h3 text-center text-white mb-4">Lagi disiapin buat kamu! Fitur baru sebentar lagi hadir dengan tampilan dan pengalaman yang lebih seru.</h3>
                  <p className="text-gray-300 text-center text-lg mb-6">Sabar ya, fitur ini masih kami poles biar makin maksimal dan bermanfaat untuk perjalanan akademikmu.
Fitur ini memang belum aktif sekarang, tapi tenang—sebentar lagi kamu bisa langsung eksplorasi dan manfaatin semua isinya😊.</p>
  
                  {/* CTA form */}
                  {/* <form className="w-full lg:w-auto">
                  
                    <div >
                      <a className="item-center btn text-white bg-blue-500 hover:bg-blue-800 shadow rounded-full" href="#0">Start a free trial</a>
                    </div>
                    {/* Success message */}
                    {/* <p className="text-sm text-gray-400 mt-3">Thanks for subscribing!</p> */}
                    
                  {/* </form> */} 
                </div>
  
              </div>
  
            </div>
  
          </div>
        </div>
    )
  }

  export default Card;