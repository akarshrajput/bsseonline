import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import Register from '@/models/Register';

export async function POST(req) {
  try {
    await connectToDatabase();
    const data = await req.json();
    
    const newRegistration = new Register(data);
    await newRegistration.save();

    return NextResponse.json({ success: true, message: 'Registered successfully' }, { status: 201 });
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 });
  }
}
