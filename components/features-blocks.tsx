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
              <h2 className="h2 text-3xl font-bold mb-4">Powered by 100+ million expert solutions</h2>
              <p className="text-xl text-gray-600">Tackle tough assignments with confidence. Our library of study support tools has you covered with millions of solutions designed to get you unstuck and on the right track.</p>
            </div>

            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h2 className="h2 text-3xl font-bold mb-4">Built to support your learning goals</h2>
              
            </div>
  
            {/* Items */}
            <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
  
              {/* 1st item */}
              <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
                <h4 className="text-gray-800 text-xl font-bold leading-snug tracking-tight mb-1">Expert Q&A</h4>
                <p className="text-gray-600 text-center">Access millions of expert solutions designed for your best study sessions. Learn by seeing each clear & concise step.</p>
              </div>
  
              {/* 2nd item */}
              <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
                <h4 className="text-gray-800 text-xl font-bold leading-snug tracking-tight mb-1">Textbook explanations</h4>
                <p className="text-gray-600 text-center">Read the book & still confused? Get detailed, step-by-step breakdowns of complicated textbook problems instantly online.</p>
              </div>
  
              {/* 3rd item */}
              <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
                <h4 className="text-gray-800 text-xl font-bold leading-snug tracking-tight mb-1">Understand a topic</h4>
                <p className="text-gray-600 text-center">Simplify the toughest concepts with digestible topic breakdowns.</p>
              </div>
  
              {/* 4th item */}
              <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
                <h4 className="text-gray-800 text-xl font-bold leading-snug tracking-tight mb-1">Homework</h4>
                <p className="text-gray-600 text-center">84+ million step-by-step explanations, Expert Q&A and math support 24/7.</p>
              </div>
  
              {/* 5th item */}
              <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
                <h4 className="text-gray-800 text-xl font-bold leading-snug tracking-tight mb-1">Writing</h4>
                <p className="text-gray-600 text-center">Get help on your paper from start to finish with our suite of writing tools.</p>
              </div>
  
              {/* 6th item */}
              <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
                <h4 className="text-gray-800 text-xl font-bold leading-snug tracking-tight mb-1">Math Solver</h4>
                <p className="text-gray-600 text-center">Understand math, one step at a time. Detailed explanation with sub-steps</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }