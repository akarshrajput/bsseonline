"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ResultActions({ result }) {
  const router = useRouter();
  const [isDeleting, setIsDeleting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    rollNumber: result.rollNumber,
    studentName: result.studentName,
    dateOfBirth: result.dateOfBirth,
    marksObtained: result.marksObtained,
    totalMarks: result.totalMarks,
    status: result.status
  });

  const handleDelete = async () => {
    if (confirm('Are you sure you want to delete this result?')) {
      setIsDeleting(true);
      try {
        await fetch(`/api/results/${result._id}`, { method: 'DELETE' });
        router.refresh();
      } catch (e) {
        console.error(e);
      }
      setIsDeleting(false);
    }
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    try {
      await fetch(`/api/results/${result._id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      setShowModal(false);
      router.refresh();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <div style={{ display: 'flex', gap: '10px' }}>
        <button onClick={() => setShowModal(true)} className="action-btn edit-btn" title="Edit">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
        </button>
        <button onClick={handleDelete} disabled={isDeleting} className="action-btn delete-btn" title="Delete">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
        </button>
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Edit Result</h3>
            <form onSubmit={handleEdit} className="edit-form">
              <input type="text" value={formData.rollNumber} onChange={e => setFormData({...formData, rollNumber: e.target.value})} placeholder="Roll Number" required />
              <input type="text" value={formData.studentName} onChange={e => setFormData({...formData, studentName: e.target.value})} placeholder="Student Name" required />
              <input type="date" value={formData.dateOfBirth} onChange={e => setFormData({...formData, dateOfBirth: e.target.value})} required />
              <input type="number" value={formData.marksObtained} onChange={e => setFormData({...formData, marksObtained: e.target.value})} placeholder="Marks Obtained" required />
              <input type="number" value={formData.totalMarks} onChange={e => setFormData({...formData, totalMarks: e.target.value})} placeholder="Total Marks" required />
              <select value={formData.status} onChange={e => setFormData({...formData, status: e.target.value})} required>
                <option value="Pass">Pass</option>
                <option value="Fail">Fail</option>
              </select>
              <div className="modal-actions">
                <button type="button" onClick={() => setShowModal(false)} className="cancel-btn">Cancel</button>
                <button type="submit" className="save-btn">Save Changes</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
