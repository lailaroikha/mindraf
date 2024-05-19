import Image from "next/image"

export default function product() {
    return (
        <div style={{ display: 'grid-item', flexWrap: 'wrap', justifyContent: 'space-around', padding: '80px 0' }}>
            <h1 className="font-bold text-4xl" style={{ width: '100%', textAlign: 'center' }}>Our Products</h1>
            <p style={{ width: '100%', textAlign: 'center' }}>Here are some of our best products</p>
            
            <div className="container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                <div style={{ width: '45%', margin: '2.5%', border: '0 px', borderRadius: '10px', padding: '10px', display: 'grid', boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.3) '}}>
                    <img src="/images-product/Learning-Services-Square.jpg" alt="Product 1" style={{ marginRight: '5px' }} />
                    <div>
                        <h2>EXPERT Q&A</h2>
                        <p>Understand assignments with expert help. Ask your tough questions to a subject expert. </p>
                    </div>
                </div>
                <div style={{ width: '45%', margin: '2.5%', border: '0 px', borderRadius: '10px', padding: '10px', display: 'grid', boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.3)'}}>
                    <img src="/images-product/textbook.png" alt="Product 2" style={{ marginLeft: '5px' }} />
                    <div>
                        <h2>TEXTBOOK SOLUTIONS</h2>
                        <p>With Textbook Solutions, you can understand step by step how to solve tough problems.</p>
                    </div>
                </div>
                <div style={{ width: '45%', margin: '2.5%', border: '0 px', borderRadius: '10px', padding: '10px', display: 'grid', boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.3)' }}>
                    <img src="/images-product/math-solver.png" alt="Product 3" style={{ marginRight: '10px' }} />
                    <div>
                        <h2>MATH SOLVER</h2>
                        <p>Our solver does what a calculator won’t: breaking down key steps into smaller sub-steps to show you every part of the solution.</p>
                    </div>
                </div>
                <div style={{ width: '45%', margin: '2.5%', border: '0 px', borderRadius: '10px', padding: '10px', display: 'grid', boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.3)' }}>
                    <img src="/images-product/img-work-cited.png" alt="Product 4" style={{ marginLeft: '10px' }} />
                    <div>
                        <h2>CITATIONS</h2>
                        <p>Create citations for your assignments from STEM to Art—with thousands of free styles including APA, MLA, Chicago, and Harvard.</p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}