import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Categories = () => {
    // Hook to handle state of all category
    const [category, setCategory] = useState([]);
    // useEffect hook to fetch API for Category records
    useEffect(() => {
        async function fetchApi() {
            const response = await axios.get('https://api.escuelajs.co/api/v1/categories');
            setCategory(response.data);
        }
        fetchApi();
    }, []);
    console.log(category)
    return (
        <>
            <div className="container">
                <div className="row">
                    {category.slice(0, 8).map((cat, index) => (
                        <div className="col-lg-4 mb-2" key={index}>
                            <div className="card shadow p-1">
                                <img src={cat.image} alt="Category" />
                                <h4 className='text-center'>{cat.name}</h4>
                                <div className="mb-2">
                                    <Link to={`/products/${cat.id}`} className="btn btn-success btn-sm w-100">Explore Now</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Categories