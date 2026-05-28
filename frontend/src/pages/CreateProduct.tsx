import { useNavigate } from "react-router";

import ProductForm from "../components/ProductForm";
import { createProduct } from "../services/api";

function CreateProduct() {
    const navigate = useNavigate();

    async function handleCreate(data: any) {
        await createProduct(data);

        navigate('/');
    }

    return (
        <div>
            <h1 className="text-3xl text-center mt-10">
                Novo Produto
            </h1>

            <ProductForm onSubmit={handleCreate} />
        </div>
    );
}

export default CreateProduct;