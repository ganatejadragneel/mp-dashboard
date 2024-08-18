import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard: React.FC = () => {
  const [userType, setUserType] = useState<string>('athlete');
  const [users, setUsers] = useState<Array<{ userType: string; email: string }>>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('/api/getUsers');
        const uniqueUsers = removeDuplicates(response.data);
        setUsers(uniqueUsers);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const removeDuplicates = (data: Array<{ userType: string; email: string }>) => {
    const uniqueEmails = new Set();
    return data.filter(user => {
      if (!uniqueEmails.has(user.email)) {
        uniqueEmails.add(user.email);
        return true;
      }
      return false;
    });
  };

  const filteredUsers = users.filter(user => user.userType === userType);

  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-400 to-blue-500 p-8">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center text-teal-800 mb-8">Registered Users Dashboard</h1>
        
        <div className="flex justify-center mb-8">
          <select
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
            className="px-4 py-2 border rounded-md bg-teal-100 text-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            <option value="athlete">Athlete</option>
            <option value="coach">Coach</option>
          </select>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full bg-white border border-teal-200">
            <thead>
              <tr className="bg-teal-100">
                <th className="px-6 py-3 text-left text-xs font-medium text-teal-800 uppercase tracking-wider">User Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-teal-800 uppercase tracking-wider">Email</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-teal-50' : 'bg-white'}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-teal-800">{user.userType}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-teal-800">{user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;