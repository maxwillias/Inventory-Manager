const API_URL = 'http://localhost:8000/api';

export async function getProducts() {
    const response = await fetch(`${API_URL}/products`);

    if (!response.ok) {
        throw new Error('Erro ao buscar produtos');
    }

    return response.json();
}

export async function createProduct(data: any) {
    const response = await fetch(`${API_URL}/products`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        throw new Error('Erro ao criar produto');
    }

    return response.json();
}

export async function deleteProduct(id: number) {
    const response = await fetch(`${API_URL}/products/${id}`, {
        method: 'DELETE',
    });

    if (!response.ok) {
        throw new Error('Erro ao remover produto');
    }

    return response.json();
}