const API_URL = 'http://localhost:8000/api';

export async function getProducts() {
    const response = await fetch(`${API_URL}/products`);
    return response.json();
}

export async function getProduct(id: string) {
    const response = await fetch(`${API_URL}/products/${id}`);
    return response.json();
}

export async function createProduct(data: unknown) {
    const response = await fetch(`${API_URL}/products`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });

    return response.json();
}

export async function updateProduct(id: string, data: unknown) {
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