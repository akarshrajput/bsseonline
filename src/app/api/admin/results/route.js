import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import Result from '@/models/Result';

export async function POST(req) {
  try {
    await connectToDatabase();
    const data = await req.json();
    
    const existing = await Result.findOne({ rollNumber: data.rollNumber });
    if (existing) {
      return NextResponse.json({ success: false, message: 'Roll number already exists' }, { status: 400 });
    }

    const newResult = new Result(data);
    await newResult.save();

    return NextResponse.json({ success: true, message: 'Result added successfully' }, { status: 201 });
  } catch (error) {
    console.error("Error adding result:", error);
    return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 });
  }
}
