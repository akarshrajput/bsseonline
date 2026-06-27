"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AddResultForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    rollNumber: '',
    dateOfBirth: '',
    studentName: '',
    marksObtained: '',
    totalMarks: '',
    status: 'Pass'
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess('');
    
    try {
      const res = await fetch('/api/admin/results', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (data.success) {
        setFormData({ rollNumber: '', dateOfBirth: '', studentName: '', marksObtained: '', totalMarks: '', status: 'Pass' });
        setSuccess('Result added successfully!');
        router.refresh();
      } else {
        alert(data.message);
      }
    } catch (err) {
      alert("Error saving result");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-card" style={{ marginBottom: '40px' }}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px'}}>
        <h3 style={{ color: '#3b429f', margin: 0 }}>Add New Result</h3>
        {success && <span style={{color: '#00a859', fontWeight: '600', fontSize: '13px'}}>{success}</span>}
      </div>
      <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        <input className="admin-login-input" style={{marginBottom: 0}} placeholder="Roll Number" required value={formData.rollNumber} onChange={e => setFormData({...formData, rollNumber: e.target.value})} />
        <input className="admin-login-input" style={{marginBottom: 0}} type="date" required value={formData.dateOfBirth} onChange={e => setFormData({...formData, dateOfBirth: e.target.value})} />
        <input className="admin-login-input" style={{marginBottom: 0}} placeholder="Student Name" required value={formData.studentName} onChange={e => setFormData({...formData, studentName: e.target.value})} />
        <input className="admin-login-input" style={{marginBottom: 0}} type="number" placeholder="Marks Obtained" required value={formData.marksObtained} onChange={e => setFormData({...formData, marksObtained: e.target.value})} />
        <input className="admin-login-input" style={{marginBottom: 0}} type="number" placeholder="Total Marks" required value={formData.totalMarks} onChange={e => setFormData({...formData, totalMarks: e.target.value})} />
        <select className="admin-login-input" style={{marginBottom: 0}} required value={formData.status} onChange={e => setFormData({...formData, status: e.target.value})}>
          <option value="Pass">Pass</option>
          <option value="Fail">Fail</option>
        </select>
        <div style={{ gridColumn: 'span 2', textAlign: 'right' }}>
          <button type="submit" className="admin-login-btn" style={{width: 'auto', padding: '10px 30px'}} disabled={loading}>
            {loading ? 'Adding...' : 'Add Result'}
          </button>
        </div>
      </form>
    </div>
  );
}
