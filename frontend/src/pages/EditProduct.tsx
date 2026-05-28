import { useEffect, useState } from "react";

import {
    useNavigate,
    useParams
} from "react-router";

import ProductForm from "../components/ProductForm";

import {
    getProduct,
    updateProduct
} from "../services/api";

import type {
    Product,
    ProductFormData
} from "../types/Product";

function EditProduct() {
    const { id } = useParams();

    const navigate = useNavigate();

    const [product, setProduct] = useState<Product | null>(null);

    async function loadProduct() {
        if (!id) return;

        const data = await getProduct(id);

        setProduct(data);
    }

    async function handleUpdate(data: ProductFormData) {
        if (!id) return;

        await updateProduct(id, data);

        navigate('/');
    }

    useEffect(() => {
        loadProduct();
    }, []);

    if (!product) {
        return (
            <div className="p-10 text-center">
                Carregando...
            </div>
        );
    }

    return (
        <div>
            <h1 className="text-3xl text-center mt-10">
                Editar Produto
            </h1>

            <ProductForm
                onSubmit={handleUpdate}
                initialValues={product}
            />
        </div>
    );
}

export default EditProduct;