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
                  <h3 className="h3 text-center text-white mb-4">Wait, what is Kha Journey!</h3>
                  <p className="text-gray-300 text-center text-lg mb-6">Kha Journey is the go-to, online homework help service for students everywhere. We pride ourselves in supporting students through their academic journeys and offer resources for every type of learner. We aim to help students finish homework fast so they can spend more time doing what makes them happy 😊.</p>
  
                  {/* CTA form */}
                  <form className="w-full lg:w-auto">
                  
                    <div >
                      <a className="item-center btn text-white bg-blue-500 hover:bg-blue-800 shadow rounded-full" href="#0">Start a free trial</a>
                    </div>
                    {/* Success message */}
                    {/* <p className="text-sm text-gray-400 mt-3">Thanks for subscribing!</p> */}
                    
                  </form>
                </div>
  
              </div>
  
            </div>
  
          </div>
        </div>
    )
  }

  export default Card;