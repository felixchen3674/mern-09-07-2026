import { useState } from 'react';

interface Employee {
  id: number;
  name: string;
  position: string;
  salary: number;
}

interface AddEmployeeProps {
  employees?: Employee[];
  setEmployees?: React.Dispatch<React.SetStateAction<Employee[]>>;
}

const AddEmployee = ({ employees, setEmployees }: AddEmployeeProps) => {
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [salary, setSalary] = useState('');

  return (
    <div className='add-employee'>
      <input
        data-testid='add-employee-name-input'
        type='text'
        placeholder='Name'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        data-testid='add-employee-position-input'
        type='text'
        placeholder='Position'
        value={position}
        onChange={(e) => setPosition(e.target.value)}
      />
      <input
        data-testid='add-employee-salary-input'
        type='number'
        placeholder='Salary'
        value={salary}
        onChange={(e) => setSalary(e.target.value)}
      />
      <button
        data-testid='add-employee-button'
        disabled
      >
        Add
      </button>
    </div>
  );
};

export default AddEmployee;
