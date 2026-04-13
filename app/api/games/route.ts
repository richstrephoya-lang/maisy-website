import { NextResponse } from 'next/server';

// Mock educational games data
const games = [
    { id: 1, title: 'Math Adventures', description: 'An interactive game to improve math skills.', level: 'Beginner' },
    { id: 2, title: 'Science Quest', description: 'Explore science concepts through fun challenges.', level: 'Intermediate' },
    { id: 3, title: 'History Explorer', description: 'Learn about history through interactive storytelling.', level: 'Advanced' }
];

// API endpoint to get educational games
export async function GET() {
    return NextResponse.json(games);
}