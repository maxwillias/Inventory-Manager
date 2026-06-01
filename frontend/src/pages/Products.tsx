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
    const [page, setPage] = useState(1);
    const [lastPage, setLastPage] = useState(1);
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(false);
    const [total, setTotal] = useState(0);

    async function loadProducts() {
        try {

            setLoading(true);

            const response = await getProducts(
                search,
                page
            );

            setProducts(response.data);
            setLastPage(response.last_page);
            setTotal(response.total);

        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
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

        const delay = setTimeout(() => {
            loadProducts();
        }, 300);

        return () => clearTimeout(delay);

    }, [search, page]);

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

                {/* BUSCA */}
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Buscar produto..."
                        value={search}
                        onChange={(e) => {
                            setSearch(e.target.value);
                            setPage(1);
                        }}
                        className="
                            w-full
                            border
                            p-3
                            rounded
                            bg-white
                        "
                    />
                </div>

                {/* INFO */}
                <div className="flex justify-between items-center mb-4">
                    <p className="text-sm text-gray-500">
                        Total: {total} produtos
                    </p>

                    <p className="text-sm text-gray-500">
                        Página {page} de {lastPage}
                    </p>
                </div>

                {/* LOADING */}
                {loading && (
                    <p className="mb-4 text-gray-500">
                        Carregando produtos...
                    </p>
                )}

                {/* TABELA */}
                <div className="bg-white rounded-lg shadow overflow-hidden">
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

                {/* PAGINAÇÃO */}
                <div className="flex justify-center gap-2 mt-6">
                    <button
                        disabled={page === 1}
                        onClick={() => setPage(page - 1)}
                        className="
                            px-4 py-2 border rounded
                            disabled:opacity-50
                        "
                    >
                        Anterior
                    </button>

                    <span className="px-4 py-2">
                        Página {page} de {lastPage}
                    </span>

                    <button
                        disabled={page === lastPage}
                        onClick={() => setPage(page + 1)}
                        className="
                            px-4 py-2 border rounded
                            disabled:opacity-50
                        "
                    >
                        Próxima
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Products;