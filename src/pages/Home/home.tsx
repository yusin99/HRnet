import { useNavigate } from 'react-router-dom';
import EmployeeForm from '../../components/EmployeeForm/employeeForm';

const Home = () => {
  const navigate = useNavigate();

  const saveEmployee = () => {
    // Logic to save employee (you can use localStorage or a mock API)
    alert('Employee Created!');
  };

  return (
    <div className="container">
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <a onClick={() => navigate('/employee-list')} style={{ cursor: 'pointer', textDecoration: 'underline' }}>
        View Current Employees
      </a>
      <h2>Create Employee</h2>
      <EmployeeForm onSave={saveEmployee} />
    </div>
  );
};

export default Home;
