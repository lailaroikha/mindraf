import Image from "next/image"
import ImageBg from '@/public/product/bgproduct.webp'
import Background from "./components/background"
import Card from "./components/card"

export default function product() {
    return (
        
        <section className="">
            <Background />
            
        <div className="items-center" style={{ display: 'grid-item', flexWrap: 'wrap', justifyContent: 'space-around', padding: '80px 0' }}>
            <h1 className="font-bold text-4xl" style={{ width: '100%', textAlign: 'center' }}>Our Products</h1>
            <p style={{ width: '100%', textAlign: 'center' }}>Here are some of our best products</p>
            
            <div className="container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                <div style={{ width: '45%', margin: '2.5%', border: '0 px', borderRadius: '10px', padding: '10px', display: 'grid', boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.3) '}}>
                    <img className='rounded-xl' src="/images-product/Learning-Services-Square.jpg" alt="Product 1" style={{ marginRight: '5px' }} />
                    <div>
                        <h2 className="text-center font-sans font-semibold mt-2 mb-2 ">EXPERT Q&A</h2>
                        <p className="font-sans text-center ml-8 mr-8 ">Have a last-minute question. Send it to one of our experts and get a response in as little as 30 minutes, ensuring you stay on track with your studies. With our expert assistance, you can gain valuable insights and clarity, and confidently tackle any challenges that come your way.</p>
                    </div>
                </div>
                <div style={{ width: '45%', margin: '2.5%', border: '0 px', borderRadius: '10px', padding: '10px', display: 'grid', boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.3)'}}>
                    <img className='rounded-xl' src="/images-product/textbook.png" alt="Product 2" style={{ marginLeft: '5px' }} />
                    <div>
                        <h2 className="text-center font-sans font-semibold mt-2 mb-2 ">TEXTBOOK SOLUTIONS</h2>
                        <p className="font-sans text-center ml-8 mr-8 ">With Textbook Solutions, you can understand step by step how to solve tough problems, ensuring you grasp the underlying concepts for better learning and achieve higher grades, while also building your confidence in tackling similar challenges independently.</p>
                    </div>
                </div>
                <div style={{ width: '45%', margin: '2.5%', border: '0 px', borderRadius: '10px', padding: '10px', display: 'grid', boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.3)' }}>
                    <img className='rounded-xl' src="/images-product/math-solver.png" alt="Product 3" style={{ marginRight: '10px' }} />
                    <div>
                        <h2 className="text-center font-sans font-semibold mt-2 mb-2 ">MATH SOLVER</h2>
                        <p className="font-sans text-center ml-8 mr-8  ">Our solver does what a calculator won’t: breaking down key steps into smaller sub-steps to show you every part of the solution.</p>
                    </div>
                </div>
                <div style={{ width: '45%', margin: '2.5%', border: '0 px', borderRadius: '10px', padding: '10px', display: 'grid', boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.3)' }}>
                    <img className='rounded-xl' src="/images-product/img-work-cited.png" alt="Product 4" style={{ marginLeft: '10px' }} />
                    <div>
                        <h2 className="text-center font-sans font-semibold mt-2 mb-2 ">CITATIONS</h2>
                        <p className="font-sans text-center ml-8 mr-8 ">Create citations for your assignments from STEM to Art—with thousands of free styles including APA, MLA, Chicago, and Harvard.</p>
                    </div>
                    
                </div>
            </div>
        </div>
            <Card />
        </section>

    )
}