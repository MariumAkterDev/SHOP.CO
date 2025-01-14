import React, { useEffect, useState } from 'react';
import './ProductData.css';
import SingleProduct from '../../SingleProduct/SingleProduct';
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic.css';

const ProductData = () => {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 12;
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch('https://api.escuelajs.co/api/v1/products');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const json = await response.json();
                setData(json);
            } catch (error) {
                setError(error);
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div>Loading products...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    const totalPages = Math.ceil(data.length / productsPerPage);

    const displayedProducts = data.length > 0
        ? data.slice((currentPage - 1) * productsPerPage, currentPage * productsPerPage)
        : [];

    return (
        <>
            <div className="mainDiv">
                {/* Corrected map function: map over DISPLAYED products */}
                {displayedProducts.map((item) => (
                    <SingleProduct
                        key={item.id} // Use item.id as key
                        prdctImg={item.category?.image}
                        productName={item.title}
                        latestPrice={item.price}
                        oldPrice={item.price}
                        discount={item.id}
                    />
                ))}
            </div>
            <div className='mr-[20px] md:mr-[0]'>
            {totalPages > 1 && (
                <div className="flex justify-center mt-4">
                    <ResponsivePagination
                        current={currentPage}
                        total={totalPages}
                        onPageChange={setCurrentPage}
                    />
                </div>
            )}
            </div>
        </>
    );
};

export default ProductData;