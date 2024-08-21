import { useNavigate } from 'react-router-dom';
import EmployeeForm from '../../components/EmployeeForm/employeeForm';
import { Header } from './../../components/Header/header';

const Home = () => {

  const saveEmployee = () => {
    // Logic to save employee (you can use localStorage or a mock API)
    alert('Employee Created!');
  };

  return (
    <div className="container">
      <Header />
      <EmployeeForm onSave={saveEmployee} />
    </div>
  );
};

export default Home;
