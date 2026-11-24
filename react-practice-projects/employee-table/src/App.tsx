import { useState } from "react";
import Employee from "./components/Employee";
import AddEmployee from "./components/AddEmployee";
import "./index.css";

const initialEmployees: Employee[] = [
  { id: 1, name: "Eric Liu", position: "Product Manager", salary: 1000 },
  { id: 2, name: "Emily Ferguson", position: "Backend Engineer", salary: 2000 },
  { id: 3, name: "John Doe", position: "Frontend Engineer", salary: 3000 },
  { id: 4, name: "Jane Smith", position: "UX Designer", salary: 4000 },
];

function App() {
  const [employees, setEmployees] = useState<Employee[]>(initialEmployees);

  return (
    <div className="app">
      <div className="app-header">
        <div className="app-icon">📊</div>
        <h1>Editable Table</h1>
      </div>
      <table data-testid="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Salary</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <Employee
                idx={employee.id}
                employee={employee}
                setEmployees={setEmployees}
              />
            </tr>
          ))}
        </tbody>
      </table>
      <AddEmployee employees={employees} setEmployees={setEmployees} />
    </div>
  );
}

export default App;
