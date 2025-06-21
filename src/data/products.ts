 
export interface Product {
    id: number;
    name: string;
    category: string;
    price: number;
    quantity: number;
    inStock: boolean;
}

export const products: Product[] = [
    {
        id: 1,
        name: "Wireless Mouse",
        category: "Electronics",
        price: 25.99,
        quantity: 120,
        inStock: true,
    },
    {
        id: 2,
        name: "Bluetooth Headphones",
        category: "Electronics",
        price: 59.99,
        quantity: 80,
        inStock: true,
    },
    {
        id: 3,
        name: "Notebook",
        category: "Stationery",
        price: 3.5,
        quantity: 200,
        inStock: true,
    },
    {
        id: 4,
        name: "Desk Lamp",
        category: "Furniture",
        price: 18.75,
        quantity: 45,
        inStock: true,
    },
    {
        id: 5,
        name: "Water Bottle",
        category: "Accessories",
        price: 12.0,
        quantity: 0,
        inStock: false,
    },
];