import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Blog from '@/models/Blog';

// GET: Fetch a single blog by ID
export async function GET(request, { params }) {
  try {
    const { id } = await params;
    await dbConnect();
    const blog = await Blog.findById(id);

    if (!blog) {
      return NextResponse.json({ success: false, message: 'Medical Insight not found' }, { status: 404 });
    }

    return NextResponse.json(blog);
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

// PATCH: Update a single blog by ID
export async function PATCH(request, { params }) {
  try {
    const { id } = await params;
    await dbConnect();
    const body = await request.json();
    
    // Process tags: Convert comma-separated string to array
    if (body.tags && typeof body.tags === 'string') {
      body.tags = body.tags.split(',').map(tag => tag.trim()).filter(tag => tag !== "");
    }
    
    const blog = await Blog.findByIdAndUpdate(id, body, { new: true, runValidators: true });

    if (!blog) {
      return NextResponse.json({ success: false, message: 'Medical Insight not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, message: 'Clinical record updated successfully' });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

// DELETE: Remove a single blog by ID
export async function DELETE(request, { params }) {
  try {
    const { id } = await params;
    await dbConnect();
    const blog = await Blog.findByIdAndDelete(id);

    if (!blog) {
      return NextResponse.json({ success: false, message: 'Medical Insight not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, message: 'Clinical record deleted successfully' });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
