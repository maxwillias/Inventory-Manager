import { useState } from "react";

import toast from "react-hot-toast";

import type {
    Product,
    ProductFormData
} from "../types/Product"
import Input from "./Input";
import Button from "./Button";

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
        <div className="
            max-w-xl
            mx-auto
            bg-white
            rounded-xl
            shadow-sm
            border
            p-6
        ">
            <form
                onSubmit={handleSubmit}
                className="max-w-xl mx-auto p-6 space-y-4"
            >
                <Input
                    type="text"
                    placeholder="Nome"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />

                <Input
                    type="text"
                    placeholder="SKU"
                    value={sku}
                    onChange={e => setSku(e.target.value)}
                />

                <Input
                    type="number"
                    placeholder="Quantidade"
                    value={quantity}
                    onChange={e => setQuantity(Number(e.target.value))}
                />

                <Input
                    type="number"
                    step="0.01"
                    placeholder="Preço"
                    value={price}
                    onChange={e => setPrice(Number(e.target.value))}
                />

                <Button disabled={loading}>
                    {loading ? 'Salvando...' : 'Salvar'}
                </Button>
            </form>
        </div>
    );
}

export default ProductForm;