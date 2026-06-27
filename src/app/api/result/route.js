import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import Result from '@/models/Result';

export async function POST(req) {
  try {
    await connectToDatabase();
    const { rollNumber, dateOfBirth } = await req.json();
    
    const result = await Result.findOne({ rollNumber, dateOfBirth }).lean();
    if (!result) {
      return NextResponse.json({ success: false, message: 'Result not found. Please check your credentials.' }, { status: 404 });
    }

    return NextResponse.json({ success: true, result }, { status: 200 });
  } catch (error) {
    console.error("Error fetching result:", error);
    return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 });
  }
}
