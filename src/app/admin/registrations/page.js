import connectToDatabase from '@/lib/mongodb';
import Register from '@/models/Register';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default async function AdminRegistrations({ searchParams }) {
  await connectToDatabase();
  
  const page = parseInt(searchParams.page) || 1;
  const limit = 10;
  const skip = (page - 1) * limit;
  
  const total = await Register.countDocuments();
  const totalPages = Math.ceil(total / limit) || 1;
  
  const registrations = await Register.find()
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limit)
    .lean();

  return (
    <div className="admin-card">
      <h2 style={{ fontSize: '24px', color: '#333', marginBottom: '20px', fontWeight: '500' }}>Registered Data</h2>
      
      <div className="schools-table-wrapper">
        <table className="schools-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Name</th>
              <th>Father Name</th>
              <th>Class</th>
              <th>Mobile</th>
              <th>City/District</th>
            </tr>
          </thead>
          <tbody>
            {registrations.length === 0 && (
              <tr>
                <td colSpan="6" style={{textAlign: 'center', padding: '20px'}}>No registrations found.</td>
              </tr>
            )}
            {registrations.map(reg => (
              <tr key={reg._id.toString()}>
                <td>{new Date(reg.createdAt).toLocaleDateString()}</td>
                <td style={{fontWeight: '600', color: '#3b429f'}}>{reg.fullName}</td>
                <td>{reg.fatherName}</td>
                <td>{reg.studentClass}</td>
                <td>{reg.mobile}</td>
                <td>{reg.cityDistrict}, {reg.state}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="admin-pagination">
        {page > 1 ? (
          <Link href={`/admin/registrations?page=${page - 1}`}>Previous</Link>
        ) : (
          <span>Previous</span>
        )}
        
        <span style={{background: 'transparent', color: '#333'}}>Page {page} of {totalPages}</span>
        
        {page < totalPages ? (
          <Link href={`/admin/registrations?page=${page + 1}`}>Next</Link>
        ) : (
          <span>Next</span>
        )}
      </div>
    </div>
  );
}
