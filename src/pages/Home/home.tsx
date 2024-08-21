import { useNavigate } from 'react-router-dom';
import EmployeeForm from '../../components/EmployeeForm/employeeForm';
import { Header } from './../../components/Header/header';

const Home = () => {

  return (
    <div className="container">
      <Header />
      <EmployeeForm />
    </div>
  );
};

export default Home;
