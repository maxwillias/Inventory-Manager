import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { toast } from 'react-hot-toast';

import type { Product } from '../types/Product';

import {
    getProducts,
    deleteProduct
} from '../services/api';

function Products() {
    const [products, setProducts] = useState<Product[]>([]);

    async function loadProducts() {
        const data = await getProducts();
        setProducts(data);
    }

    async function handleDelete(id: number) {

        const confirmed = confirm(
            'Deseja realmente remover este produto?'
        );

        if(!confirmed) {
            return;
        }

        try {
            await deleteProduct(id);
    
            toast.success('Produto removido');

            loadProducts();

        } catch(error) {
            console.error(error);

            toast.error('Erro ao remover produto');
        }
    }

    useEffect(() => {
        loadProducts();
    }, []);

    return (
        <div className="min-h-screen bg-gray-100">
            <div className="max-w-5xl mx-auto p-6">

                {/* HEADER */}
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-3xl font-bold">
                        Produtos
                    </h1>

                    <Link
                        to="/products/create"
                        className="bg-black text-white px-4 py-2 rounded"
                    >
                        Novo Produto
                    </Link>
                </div>

                <div className="bg-white rounded-lg shadow overflow-hidden">
                    {/* TABELA */}
                    <table className="w-full">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="p-3 text-left">Nome</th>
                                <th className="p-3 text-left">SKU</th>
                                <th className="p-3 text-left">Quantidade</th>
                                <th className="p-3 text-left">Preço</th>
                                <th className="p-3 text-left"></th>
                            </tr>
                        </thead>

                        <tbody>
                            {products.map(product => (
                                <tr
                                    key={product.id}
                                    className="border-t"
                                >
                                    <td className="p-3">
                                        {product.name}
                                    </td>

                                    <td className="p-3">
                                        {product.sku}
                                    </td>

                                    <td className="p-3">
                                        {product.quantity}
                                    </td>

                                    <td className="p-3">
                                        {Number(product.price).toLocaleString('pt-BR', {
                                            style: 'currency',
                                            currency: 'BRL'
                                        })}
                                    </td>

                                    <td className="p-3">
                                        <div className="flex gap-2">
                                            <Link 
                                                to={`/products/${product.id}/edit`} 
                                                className="bg-blue-500 text-white px-3 py-1 rounded"
                                            >
                                                Editar
                                            </Link>
                                            
                                            <button
                                                onClick={() => handleDelete(product.id)}
                                                className="bg-red-500 text-white px-3 py-1 rounded"
                                            >
                                                Excluir
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Products;