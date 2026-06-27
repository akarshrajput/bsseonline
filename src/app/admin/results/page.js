import connectToDatabase from '@/lib/mongodb';
import Result from '@/models/Result';
import Link from 'next/link';
import AddResultForm from './AddResultForm';
import ResultActions from './ResultActions';

export const dynamic = 'force-dynamic';

export default async function AdminResults({ searchParams }) {
  const resolvedSearchParams = await searchParams;
  await connectToDatabase();
  
  const page = parseInt(resolvedSearchParams.page) || 1;
  const limit = 10;
  const skip = (page - 1) * limit;
  
  const total = await Result.countDocuments();
  const totalPages = Math.ceil(total / limit) || 1;
  
  const results = await Result.find()
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limit)
    .lean();

  return (
    <>
      <AddResultForm />
      <div className="admin-card">
        <h2 style={{ fontSize: '24px', color: '#333', marginBottom: '20px', fontWeight: '500' }}>Results Data</h2>
        
        <div className="schools-table-wrapper">
          <table className="schools-table">
            <thead>
              <tr>
                <th>Roll No</th>
                <th>Student Name</th>
                <th>DOB</th>
                <th>Marks Obtained</th>
                <th>Total Marks</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {results.length === 0 && (
                <tr>
                  <td colSpan="7" style={{textAlign: 'center', padding: '20px'}}>No results found.</td>
                </tr>
              )}
              {results.map(res => (
                <tr key={res._id.toString()}>
                  <td style={{fontWeight: '600', color: '#3b429f'}}>{res.rollNumber}</td>
                  <td>{res.studentName}</td>
                  <td>{res.dateOfBirth}</td>
                  <td>{res.marksObtained}</td>
                  <td>{res.totalMarks}</td>
                  <td>
                    <span style={{color: res.status === 'Pass' ? '#00a859' : '#ef4444', fontWeight: '600'}}>
                      {res.status}
                    </span>
                  </td>
                  <td>
                    <ResultActions result={JSON.parse(JSON.stringify(res))} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="admin-pagination">
          {page > 1 ? (
            <Link href={`/admin/results?page=${page - 1}`}>Previous</Link>
          ) : (
            <span>Previous</span>
          )}
          
          <span style={{background: 'transparent', color: '#333'}}>Page {page} of {totalPages}</span>
          
          {page < totalPages ? (
            <Link href={`/admin/results?page=${page + 1}`}>Next</Link>
          ) : (
            <span>Next</span>
          )}
        </div>
      </div>
    </>
  );
}
