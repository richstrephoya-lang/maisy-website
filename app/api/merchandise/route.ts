// Merchandise API Endpoint

import { NextResponse } from 'next/server';

// Sample merchandise data
const merchandise = [
    {
        id: 1,
        category: 'clothing',
        items: [
            { name: 'T-Shirt', price: 15 },
            { name: 'Hoodie', price: 35 },
        ],
    },
    {
        id: 2,
        category: 'toys',
        items: [
            { name: 'Action Figure', price: 20 },
            { name: 'Puzzle', price: 10 },
        ],
    },
    {
        id: 3,
        category: 'stationery',
        items: [
            { name: 'Notebook', price: 5 },
            { name: 'Pen', price: 2 },
        ],
    },
    {
        id: 4,
        category: 'lunch boxes',
        items: [
            { name: 'Insulated Lunch Box', price: 25 },
            { name: 'Bento Box', price: 18 },
        ],
    },
];

export async function GET() {
    return NextResponse.json(merchandise);
}