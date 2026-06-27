import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import Result from '@/models/Result';

import { supabase } from '@/lib/supabase';

export async function POST(req) {
  try {
    await connectToDatabase();
    const formData = await req.formData();
    
    const data = {
      rollNumber: formData.get('rollNumber'),
      dateOfBirth: formData.get('dateOfBirth'),
      studentName: formData.get('studentName'),
      marksObtained: formData.get('marksObtained'),
      totalMarks: formData.get('totalMarks'),
      status: formData.get('status')
    };
    
    const existing = await Result.findOne({ rollNumber: data.rollNumber });
    if (existing) {
      return NextResponse.json({ success: false, message: 'Roll number already exists' }, { status: 400 });
    }

    const pdfFile = formData.get('pdfFile');
    if (pdfFile && pdfFile.size > 0) {
      const bytes = await pdfFile.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const filename = `result_${data.rollNumber}_${Date.now()}.pdf`;

      const { data: uploadData, error } = await supabase.storage
        .from('results-pdfs')
        .upload(filename, buffer, {
          contentType: 'application/pdf',
          upsert: false
        });

      if (error) {
        console.error("Supabase upload error:", error);
        return NextResponse.json({ success: false, message: 'Failed to upload PDF' }, { status: 500 });
      }

      const { data: publicUrlData } = supabase.storage
        .from('results-pdfs')
        .getPublicUrl(filename);
      
      data.pdfUrl = publicUrlData.publicUrl;
    }

    const newResult = new Result(data);
    await newResult.save();

    return NextResponse.json({ success: true, message: 'Result added successfully' }, { status: 201 });
  } catch (error) {
    console.error("Error adding result:", error);
    return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 });
  }
}
