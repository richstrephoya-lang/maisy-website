import { NextResponse } from 'next/server';

const stories = [
  {
    id: 1,
    title: 'Maisy Learns to Share',
    description: 'A heartwarming story about Maisy learning the importance of sharing with friends.',
    ageGroup: '4-6',
    coverImage: '/images/stories/story-1.jpg',
    pdfUrl: '/stories/maisy-learns-to-share.pdf',
    teachableGoals: ['Sharing', 'Friendship', 'Kindness'],
    price: 4.99
  },
  {
    id: 2,
    title: 'Maisy Faces Her Fears',
    description: 'Maisy discovers that facing fears with courage makes you braver than you think.',
    ageGroup: '5-7',
    coverImage: '/images/stories/story-2.jpg',
    pdfUrl: '/stories/maisy-faces-her-fears.pdf',
    teachableGoals: ['Courage', 'Confidence', 'Personal Growth'],
    price: 5.99
  },
  {
    id: 3,
    title: 'Maisy Makes New Friends',
    description: 'A story about how Maisy welcomes a new friend and learns to appreciate differences.',
    ageGroup: '4-6',
    coverImage: '/images/stories/story-3.jpg',
    pdfUrl: '/stories/maisy-makes-new-friends.pdf',
    teachableGoals: ['Inclusion', 'Acceptance', 'Friendship'],
    price: 4.99
  }
];

export async function GET() {
  try {
    return NextResponse.json(stories);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch stories' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const newStory = await request.json();
    return NextResponse.json(newStory, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create story' }, { status: 500 });
  }
}