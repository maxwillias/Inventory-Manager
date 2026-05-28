export interface Product {
    id: number;
    name: string;
    sku: string;
    quantity: number;
    price: number;
    description?: string;
}

export interface ProductFormData {
    name: string;
    sku: string;
    quantity: number;
    price: number;
}