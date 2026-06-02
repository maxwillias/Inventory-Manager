import { useNavigate } from "react-router";

import ProductForm from "../components/ProductForm";
import { createProduct } from "../services/api";
import Layout from "../components/Layout";

function CreateProduct() {
    const navigate = useNavigate();

    async function handleCreate(data: any) {
        await createProduct(data);

        navigate('/');
    }

    return (
        <Layout>
            <h1 className="text-3xl text-center mt-10">
                Novo Produto
            </h1>

            <ProductForm onSubmit={handleCreate} />
        </Layout>
    );
}

export default CreateProduct;