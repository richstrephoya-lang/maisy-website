import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const data = await request.json();
    const { birthDate, consent } = data;

    const currentDate = new Date('2026-04-13T22:05:26Z');
    const age = currentDate.getFullYear() - new Date(birthDate).getFullYear();
    const monthDiff = currentDate.getMonth() - new Date(birthDate).getMonth();

    // Check if the user is under 13
    if (age < 13 || (age === 13 && monthDiff < 0)) {
        // User is under 13, need parental consent
        if (!consent) {
            return NextResponse.json({ error: 'Parental consent is required for users under 13.' }, { status: 403 });
        }
    }

    return NextResponse.json({ message: 'Age verification passed.' });
}