import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export const EmployeeForm = () => {
  const [employee, assignEmployee] = useState({
    name: "",
    manager: false,
    fullTime: false,
    hourlyRate: "",
    locationId: 1,
  });

  const [locations, setLocation] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8088/locations")
      .then((data) => data.json())
      .then((locationArray) => {
        setLocation(locationArray);
      });
  }, []);

  const history = useHistory();

  const saveEmployee = (event) => {
    event.preventDefault();

    const newEmployee = {
      name: employee.name,
      manager: employee.manager,
      fullTime: employee.fullTime,
      hourlyRate: employee.hourlyRate,
      locationId: employee.locationId,
    };

    const fetchOption = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newEmployee),
    };

    return fetch("http://localhost:8088/employees", fetchOption).then(() => {
      history.push("/employees");
    });
  };

  return (
    <form className="employeeForm">
      <h2 className="employeeForm_title">New Employee</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Name: </label>
          <input
            onChange={(event) => {
              const copy = { ...employee };
              copy.name = event.target.value;
              assignEmployee(copy);
            }}
            required
            autoFocus
            type="text"
            className="form-control"
            placeholder="First and Last Name"
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="hourlyRate">HourlyRate: </label>
          <input
            onChange={(event) => {
              const copy = { ...employee };
              copy.hourlyRate = event.target.value;
              assignEmployee(copy);
            }}
            type="float"
            className="form-control"
            placeholder="HourlyRate"
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="fullTime">Full Time: </label>
          <input
            onChange={(event) => {
              const copy = { ...employee };
              copy.fullTime = event.target.checked;
              assignEmployee(copy);
            }}
            type="checkbox"
            className="form-control"
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="manager">Manager: </label>
          <input
            onChange={(event) => {
              const copy = { ...employee };
              copy.manager = event.target.checked;
              assignEmployee(copy);
            }}
            type="checkbox"
            className="form-control"
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="location">Location:</label>
          <select
            onChange={(event) => {
              const copy = { ...employee };
              copy.locationId = parseInt(event.target.value);
              assignEmployee(copy);
            }}
          >
            <option value="">Choose Your Location</option>
            {locations.map((locationObject) => {
              return (
                <option key={locationObject.id} value={locationObject.id}>
                  {locationObject.name}
                </option>
              );
            })}
          </select>
        </div>
      </fieldset>
      <button className="btn btn-primary" onClick={saveEmployee}>
        Finish Hire
      </button>
    </form>
  );
};
