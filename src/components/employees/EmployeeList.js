import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export const EmployeeList = () => {
  const [employees, assignEmployees] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8088/employees?_expand=location")
      .then((data) => data.json())
      .then((employeeArray) => {
        assignEmployees(employeeArray);
      });
  }, []);

  const history = useHistory();

  return (
    <>
      <div>
        <button onClick={() => history.push("/employees/create")}>
          Hire Employee
        </button>
      </div>
      <div>
        {employees.map((employeeObject) => {
          return (
            <p key={employeeObject.id}>
              {employeeObject.name} works at {employeeObject.location.name}
            </p>
          );
        })}
      </div>
    </>
  );
};
