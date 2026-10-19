import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getEmployee } from '../services/authservices';

export const ListEmployee = () => {
    const [employees, setEmployees] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        let isMounted = true;

        const loadEmployees = async () => {
            try {
                const response = await getEmployee();
                if (!Array.isArray(response.data)) {
                    throw new Error('Expected the employee API to return an array.');
                }
                if (isMounted) {
                    setEmployees(response.data);
                }
            } catch (error) {
                console.error('Failed to load employees:', error);
                if (isMounted) {
                    setError('Unable to load employees. Please try again later.');
                }
            } finally {
                if (isMounted) {
                    setIsLoading(false);
                }
            }
        };

        loadEmployees();
        return () => {
            isMounted = false;
        };
    }, []);

    return (
        <div className="container">
            <div>
                <h2 className="text-center myheading">Employee Management</h2>
                <button className="btn btn-primary mybtn" onClick={() => navigate('/addemployee')}>
                    Add Employee
                </button>
                <table className="table table-striped">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col">Employee ID</th>
                            <th scope="col">Employee First Name</th>
                            <th scope="col">Employee Last Name</th>
                            <th scope="col">Employee Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {isLoading ? (
                            <tr><td colSpan="4">Loading employees...</td></tr>
                        ) : error ? (
                            <tr><td colSpan="4" role="alert">{error}</td></tr>
                        ) : employees.length === 0 ? (
                            <tr><td colSpan="4">No employees found.</td></tr>
                        ) : (
                            employees.map((employee) => (
                                <tr key={employee.id}>
                                    <td>{employee.id}</td>
                                    <td>{employee.firstname}</td>
                                    <td>{employee.lastname}</td>
                                    <td>{employee.email}</td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};