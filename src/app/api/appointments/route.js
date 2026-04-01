import dbConnect from '../../../lib/mongodb';
import Appointment from '../../../models/Appointment';
import { NextResponse } from 'next/server';

// POST: Create a new appointment
export async function POST(req) {
  try {
    await dbConnect();
    const body = await req.json();
    
    // Server-side simple validation (Captcha verification is handled on the client in this implementation, 
    // but the API ensures the model is valid)
    const appointment = await Appointment.create(body);
    
    return NextResponse.json({ success: true, data: appointment }, { status: 201 });
  } catch (error) {
    console.error('Appointment API Error:', error);
    return NextResponse.json({ success: false, message: error.message }, { status: 400 });
  }
}

// GET: Fetch all appointments (usually for admin)
export async function GET() {
  try {
    await dbConnect();
    const appointments = await Appointment.find({}).sort({ createdAt: -1 });
    
    return NextResponse.json({ success: true, data: appointments }, { status: 200 });
  } catch (error) {
    console.error('Appointment API Error:', error);
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
