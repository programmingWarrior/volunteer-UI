import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Products.css';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://glacial-brook-87015.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])


    return (

        <div className="d-flex row" style={{ marginLeft: '3%' }}>
            {products.map(pd =>
                <div key={pd._id} className="card" style={{ width: "18rem", margin: "10px", borderRadius: '10px' }}>
                    <img src={pd.img} className="card-img-top" alt="..." />
                    <Link to={`/product/${pd._id}`}>
                        <div className="card-body bigBtn" style={{ backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(16)}` }}>
                            <p>{pd.name}</p>
                        </div>
                    </Link>
                </div>
            )}
        </div>

    );
};

export default Products;