 
export interface Customer {
    id: number;
    name: string;
    email: string;
    phone: string;
    address: string;
    joinedAt: string;
    isActive: boolean;
}

export const customers: Customer[] = [
    {
        id: 1,
        name: "Alice Johnson",
        email: "alice.johnson@example.com",
        phone: "+1-555-1234",
        address: "123 Maple St, Springfield, IL",
        joinedAt: "2023-01-15",
        isActive: true,
    },
    {
        id: 2,
        name: "Bob Smith",
        email: "bob.smith@example.com",
        phone: "+1-555-5678",
        address: "456 Oak Ave, Lincoln, NE",
        joinedAt: "2022-11-22",
        isActive: false,
    },
    {
        id: 3,
        name: "Carol Lee",
        email: "carol.lee@example.com",
        phone: "+1-555-8765",
        address: "789 Pine Rd, Madison, WI",
        joinedAt: "2023-03-10",
        isActive: true,
    },
    {
        id: 4,
        name: "David Kim",
        email: "david.kim@example.com",
        phone: "+1-555-4321",
        address: "321 Birch Blvd, Austin, TX",
        joinedAt: "2023-02-05",
        isActive: true,
    },
    {
        id: 5,
        name: "Eva Martinez",
        email: "eva.martinez@example.com",
        phone: "+1-555-2468",
        address: "654 Cedar Ln, Portland, OR",
        joinedAt: "2022-12-18",
        isActive: false,
    },
];