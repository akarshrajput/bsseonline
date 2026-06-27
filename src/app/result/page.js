"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ResultPage() {
  const [formData, setFormData] = useState({ rollNumber: "", dateOfBirth: "" });
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState(null);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setResultData(null);

    try {
      const res = await fetch('/api/result', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (data.success) {
        setResultData(data.result);
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError("An error occurred while fetching the result.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      <Header />
      
      {/* Page Hero */}
      <div className="page-hero">
        <h1 className="page-hero-title">Check Result</h1>
        <div className="page-hero-breadcrumb">
          <Link href="/">HOME</Link>
          <span>&gt;</span>
          <span className="active">CHECK RESULT</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="registration-container">
        <h2 className="registration-title">Check Your Result</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="reg-form-group">
            <div className="reg-form-label">Roll Number *</div>
            <input type="text" name="rollNumber" value={formData.rollNumber} onChange={handleChange} required className="reg-form-input" placeholder="e.g. BSSE123456" />
          </div>

          <div className="reg-form-group">
            <div className="reg-form-label">Date Of Birth *</div>
            <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} required className="reg-form-input" style={{flex: 'none', width: '200px'}} />
          </div>

          <div style={{ clear: 'both' }}>
            <button type="submit" disabled={loading} className="submit-btn">
              {loading ? 'CHECKING...' : 'SUBMIT'}
            </button>
          </div>
          
          {error && <div style={{ color: '#ef4444', textAlign: 'right', marginTop: '20px', fontWeight: '600', clear: 'both' }}>{error}</div>}
        </form>

        {resultData && (
          <div style={{marginTop: '70px', padding: '30px', border: '1px solid #00a859', borderRadius: '8px', background: '#f4fbf7'}}>
            <h3 style={{color: '#00a859', marginBottom: '20px'}}>Result Details</h3>
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', fontSize: '14px', color: '#333'}}>
              <div><strong>Roll Number:</strong> {resultData.rollNumber}</div>
              <div><strong>Student Name:</strong> {resultData.studentName}</div>
              <div><strong>Date of Birth:</strong> {resultData.dateOfBirth}</div>
              <div><strong>Status:</strong> <span style={{color: resultData.status === 'Pass' ? '#00a859' : 'red', fontWeight: 'bold'}}>{resultData.status}</span></div>
              <div><strong>Marks Obtained:</strong> {resultData.marksObtained}</div>
              <div><strong>Total Marks:</strong> {resultData.totalMarks}</div>
            </div>
            {resultData.pdfUrl && (
              <div style={{ marginTop: '30px' }}>
                <h4 style={{ color: '#333', marginBottom: '10px' }}>Result Certificate:</h4>
                <object data={resultData.pdfUrl} type="application/pdf" width="100%" height="600px" style={{ border: '1px solid #ccc', borderRadius: '4px' }}>
                  <p>Your browser does not support PDFs. <a href={resultData.pdfUrl} target="_blank" rel="noopener noreferrer">Download the PDF</a>.</p>
                </object>
              </div>
            )}
          </div>
        )}
      </div>

      <Footer />
    </main>
  );
}
