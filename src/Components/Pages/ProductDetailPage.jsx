import React from 'react'
import { useParams } from 'react-router';
import UseFetchData from '../../Utils/UseFetchData';

function ProductDetailPage() {
    const { type, id } = useParams();
    const products = UseFetchData(`/${type}`);
    const product = products.find((item) => item.id === parseInt(id));
    return (
        <div>

        </div>
    )
}

export default ProductDetailPage