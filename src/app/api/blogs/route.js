import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Blog from '@/models/Blog';

export async function POST(request) {
  try {
    await dbConnect();
    const body = await request.json();
    
    // Process tags: Convert comma-separated string to array
    if (body.tags && typeof body.tags === 'string') {
      body.tags = body.tags.split(',').map(tag => tag.trim()).filter(tag => tag !== "");
    }
    
    // Create new post using Mongoose Model
    const blogDoc = await Blog.create(body);

    return NextResponse.json({ 
      success: true, 
      message: 'Clinical insight successfully added via Mongoose!',
      id: blogDoc._id 
    });
  } catch (error) {
    console.error('Mongoose POST Error:', error);
    return NextResponse.json({ 
      success: false, 
      message: 'Clinical Database Error: Check model validation.',
      error: error.message 
    }, { status: 500 });
  }
}

export async function GET() {
    try {
      await dbConnect();
      const blogs = await Blog.find({}).sort({ createdAt: -1 });
      return NextResponse.json(blogs);
    } catch (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
