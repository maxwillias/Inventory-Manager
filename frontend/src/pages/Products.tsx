import { useEffect, useState } from 'react';
import type { Product } from '../types/Product';
import { getProducts, deleteProduct } from '../services/api';

function Products() {
    const [products, setProducts] = useState<Product[]>([]);

    async function loadProducts() {
        try {
            const data = await getProducts();
            setProducts(data);
        } catch (error) {
            console.error(error);
        }
    }

    async function handleDelete(id: number) {
        await deleteProduct(id);
        loadProducts();
    }

    useEffect(() => {
        loadProducts();
    }, []);

    return (
        <div>
            <h1>Produtos</h1>

            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>SKU</th>
                        <th>Quantidade</th>
                        <th>Preço</th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    {products.map(product => (
                        <tr key={product.id}>
                            <td>{product.name}</td>
                            <td>{product.sku}</td>
                            <td>{product.quantity}</td>
                            <td>{product.price}</td>

                            <td>
                                <button
                                    onClick={() => handleDelete(product.id)}
                                >
                                    Excluir
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Products;