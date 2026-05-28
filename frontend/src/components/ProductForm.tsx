import { useState } from "react";

interface Props {
    onSubmit: (data: any) => Promise<void>;
    initialValues?: any;
}

function ProductForm({ onSubmit, initialValues }: Props) {
    const [name, setName] = useState(initialValues?.name || '');
    const [sku, setSku] = useState(initialValues?.sku || '');
    const [quantity, setQuantity] = useState(initialValues?.quantity || 0);
    const [price, setPrice] = useState(initialValues?.price || 0);

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        await onSubmit({
            name,
            sku,
            quantity,
            price
        });
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

            <button className="bg-black text-white px-4 py-2 rounded">
                Salvar
            </button>
        </form>
    );
}

export default ProductForm;