import React, { useState } from 'react'

const ProductDetails = () => {
    // https://api.escuelajs.co/api/v1/products/4
    const [product, setProduct] = useState({});

    if (Object.keys(product).length === 0) {
        return (
            <h1>Loading...............</h1>
        )
    }
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="card">sdfghjkl</div>
                    </div>
                    <div className="col-lg-8">
                        <div className="card">
                            <h1>{product.title}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetails