import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import connectToDatabase from '@/lib/mongodb';
import User from '@/models/User';
import { encrypt } from '@/lib/auth';

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    await connectToDatabase();
    
    const user = await User.findOne({ email });
    
    if (!user) {
      return NextResponse.json({ success: false, message: 'Invalid credentials' }, { status: 401 });
    }

    const isValid = await bcrypt.compare(password, user.password);
    
    if (!isValid) {
      return NextResponse.json({ success: false, message: 'Invalid credentials' }, { status: 401 });
    }

    const sessionData = { email: user.email, role: user.role };
    const encryptedSessionData = await encrypt(sessionData);

    const res = NextResponse.json({ success: true }, { status: 200 });
    
    res.cookies.set('session', encryptedSessionData, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 24 * 60 * 60, // 24 hours
    });

    return res;
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 });
  }
}
