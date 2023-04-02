import { useState, useEffect } from 'react';

function App() {
  const [officers, setOfficers] = useState([]);

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 10000);
    return () => clearInterval(interval);
  }, []);

  async function fetchData() {
    const response = await fetch('/api/officers');
    const data = await response.json();
    setOfficers(data);
  }

  return (
    <div>
      <h1>Remote Police Officer Tracking System</h1>
      <table>
        <thead>
          <tr>
            <th>Officer ID</th>
            <th>Last seen</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {officers.map(officer => (
            <tr key={officer.officer_id}>
              <td>{officer.officer_id}</td>
              <td>{officer.last_seen}</td>
              <td>{officer.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
