import React, { useState, useEffect } from 'react';
import "../EmployeeList.css";
import { Link } from 'react-router-dom';

const EmployeeList = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    async function fetchData() {
      console.log(import.meta.env.VITE_API_URL+"employees/");
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}`+'employees/');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        console.log(result);
        setData(result);
        setFilteredData(result); // Initialize filteredData with the fetched data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData(); // Fetch the data when the component mounts
  }, []);

  // Handle the search functionality
  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);

    // Filter the data based on the search term
    const filtered = data.filter(employee =>
      employee.first_name.toLowerCase().includes(value) ||
      employee.last_name.toLowerCase().includes(value) ||
      employee.email.toLowerCase().includes(value)
    );
    setFilteredData(filtered);
  };

  return (
    <div>
      <h1>EMPLOYEE LIST</h1>

      <div className='filter_employeelist'>
        {/* Filter Bar */}
        <input
          type="text"
          placeholder="Filter by name or email"
          value={searchTerm}
          onChange={handleSearch}
        />

        {/* Back Button */}
        <Link to="/employee"><div className='back'> Back</div> </Link>
      </div>

      {/* Employee Table */}
      <table>
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.length > 0 ? (
            filteredData.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.E_id}</td>
                <td>{employee.first_name}</td>
                <td>{employee.last_name}</td>
                <td>{employee.email}</td>
                <td>{employee.phone_number}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No matching employees found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
