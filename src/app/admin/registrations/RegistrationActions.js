"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function RegistrationActions({ registration }) {
  const router = useRouter();
  const [isDeleting, setIsDeleting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    fullName: registration.fullName,
    fatherName: registration.fatherName,
    studentClass: registration.studentClass,
    mobile: registration.mobile,
    cityDistrict: registration.cityDistrict,
    state: registration.state,
    motherName: registration.motherName,
    emailAddress: registration.emailAddress,
    dateOfBirth: registration.dateOfBirth,
    addressLine1: registration.addressLine1
  });

  const handleDelete = async () => {
    if (confirm('Are you sure you want to delete this registration?')) {
      setIsDeleting(true);
      try {
        await fetch(`/api/registrations/${registration._id}`, { method: 'DELETE' });
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
      await fetch(`/api/registrations/${registration._id}`, {
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
            <h3>Edit Registration</h3>
            <form onSubmit={handleEdit} className="edit-form">
              <input type="text" value={formData.fullName} onChange={e => setFormData({...formData, fullName: e.target.value})} placeholder="Full Name" required />
              <input type="text" value={formData.fatherName} onChange={e => setFormData({...formData, fatherName: e.target.value})} placeholder="Father Name" required />
              <input type="text" value={formData.studentClass} onChange={e => setFormData({...formData, studentClass: e.target.value})} placeholder="Class" required />
              <input type="text" value={formData.mobile} onChange={e => setFormData({...formData, mobile: e.target.value})} placeholder="Mobile" required />
              <input type="text" value={formData.cityDistrict} onChange={e => setFormData({...formData, cityDistrict: e.target.value})} placeholder="City/District" required />
              <input type="text" value={formData.state} onChange={e => setFormData({...formData, state: e.target.value})} placeholder="State" required />
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
