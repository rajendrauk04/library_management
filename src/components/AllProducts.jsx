import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"

const AllProducts = () => {
    const pId = useParams();
    const id = pId.id;
    const [products, setProducts] = useState([]);
    console.log(id);
    useEffect(() => {
        async function fetchApi() {
            const response = await axios.get(`https://api.escuelajs.co/api/v1/categories/${id}/products`);
            setProducts(response.data);
        }
        fetchApi();
    }, []);
    console.log(products);
    return (
        <>
            <div className="container">
                <div className="row">
                    {
                        products.map((p, index) => (
                            <div className="col-lg-4 mb-3">
                                <div className="card h-100 shadow p-2">
                                    <img src={p.images[0]} alt="Product Image" />
                                    <h4>{p.title.slice(0, 20)}....</h4>
                                    <Link to={`/product-details/${p.id}`} className="btn btn-outline-primary btn-sm w-100">Buy Now</Link>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default AllProducts