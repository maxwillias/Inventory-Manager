import type {
    Product,
    ProductFormData
} from "../types/Product";

const API_URL = 'http://localhost:8000/api';

export async function getProducts(): Promise<Product[]> {
    const response = await fetch(`${API_URL}/products`);
    return response.json();
}

export async function getProduct(id: string): Promise<Product> {
    const response = await fetch(`${API_URL}/products/${id}`);
    return response.json();
}

export async function createProduct(
    data: ProductFormData
): Promise<Product> {
    const response = await fetch(`${API_URL}/products`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });

    return response.json();
}

export async function updateProduct(
    id: string,
    data: ProductFormData
): Promise<Product> {
    const response = await fetch(`${API_URL}/products/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });

    return response.json();
}

export async function deleteProduct(id: number) {
    const response = await fetch(`${API_URL}/products/${id}`, {
        method: 'DELETE'
    });

    return response.json();
}