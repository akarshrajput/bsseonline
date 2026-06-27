import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import Result from '@/models/Result';
import { supabase } from '@/lib/supabase';

export async function DELETE(request, { params }) {
  try {
    await connectToDatabase();
    const resolvedParams = await params;
    const { id } = resolvedParams;
    
    // Find the result first to get the pdfUrl
    const result = await Result.findById(id);
    if (!result) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }

    // If it has a PDF, delete it from Supabase
    if (result.pdfUrl) {
      const filename = result.pdfUrl.split('/').pop();
      const { error } = await supabase.storage.from('results-pdfs').remove([filename]);
      if (error) {
        console.error("Failed to delete PDF from Supabase:", error);
      }
    }

    await Result.findByIdAndDelete(id);
    return NextResponse.json({ message: 'Deleted successfully' });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PUT(request, { params }) {
  try {
    await connectToDatabase();
    const resolvedParams = await params;
    const { id } = resolvedParams;
    const formData = await request.formData();
    
    const data = {
      rollNumber: formData.get('rollNumber'),
      dateOfBirth: formData.get('dateOfBirth'),
      studentName: formData.get('studentName'),
      marksObtained: formData.get('marksObtained'),
      totalMarks: formData.get('totalMarks'),
      status: formData.get('status')
    };

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
      } else {
        const { data: publicUrlData } = supabase.storage
          .from('results-pdfs')
          .getPublicUrl(filename);
        data.pdfUrl = publicUrlData.publicUrl;
      }
    }

    const updated = await Result.findByIdAndUpdate(id, data, { new: true });
    return NextResponse.json(updated);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
