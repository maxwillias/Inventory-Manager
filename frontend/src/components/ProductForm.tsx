import { useState } from "react";

import toast from "react-hot-toast";

import type {
    Product,
    ProductFormData
} from "../types/Product"

interface Props {
    onSubmit: (data: ProductFormData) => Promise<void>;
    initialValues?: Product;
}

function ProductForm({ onSubmit, initialValues }: Props) {
    const [name, setName] = useState(initialValues?.name || '');
    const [sku, setSku] = useState(initialValues?.sku || '');
    const [quantity, setQuantity] = useState(initialValues?.quantity || 0);
    const [price, setPrice] = useState(initialValues?.price || 0);

    const [loading, setLoading] = useState(false);

    async function handleSubmit(e: React.SubmitEvent) {
        e.preventDefault();

        if(!name.trim()) {
            toast.error('Nome é obrigatório');
            return;
        }

        if(!sku.trim()) {
            toast.error('SKU é obrigatório');
            return;
        }

        if(quantity < 0){
            toast.error('Quantidade inválida');
            return;
        }

        if(price < 0){
            toast.error('Preço inválida');
            return;
        }

        try {
            setLoading(true);

            await onSubmit({
                name,
                sku,
                quantity,
                price
            });

            toast.success('Produto salvo com sucesso');
        } catch (error) {
            console.error(error);

            toast.error('Erro ao salvar produto')

        } finally {
            setLoading(false);
        }
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-xl mx-auto p-6 space-y-4"
        >
            <input
                type="text"
                placeholder="Nome"
                value={name}
                onChange={e => setName(e.target.value)}
                className="w-full border p-3 rounded"
            />

            <input
                type="text"
                placeholder="SKU"
                value={sku}
                onChange={e => setSku(e.target.value)}
                className="w-full border p-3 rounded"
            />

            <input
                type="number"
                placeholder="Quantidade"
                value={quantity}
                onChange={e => setQuantity(Number(e.target.value))}
                className="w-full border p-3 rounded"
            />

            <input
                type="number"
                step="0.01"
                placeholder="Preço"
                value={price}
                onChange={e => setPrice(Number(e.target.value))}
                className="w-full border p-3 rounded"
            />

            <button 
                disabled={loading}
                className="
                    bg-black 
                    text-white 
                    px-4
                    py-2
                    rounded
                "
            >
                {loading ? 'Salvando...' : 'Salvar'}
            </button>
        </form>
    );
}

export default ProductForm;