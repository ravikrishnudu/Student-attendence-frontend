import React, { useState } from "react";
import axios from "axios";
function AddStudent() {
  const [name, setName] = useState("");
  const [gender, setgender] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [email, setEmail] = useState("");
  const [grade, setGrade] = useState("Grade");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/student", {
        name,
        gender,
        dateOfBirth,
        email,
        gradeId: grade,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div>
        <h1 className="font-weight-light display-1 text-center">
          Student Details
        </h1>{" "}
      </div>

      <div className="mb-4">
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="col">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Name"
              />
            </div>
            <div className="col">
              <input
                value={gender}
                onChange={(e) => setgender(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Gender"
              />
            </div>
            <div className="col">
              <input
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Date of Birth"
              />
            </div>
            <div className="col">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Email"
              />
            </div>
            <div className="col">
              <select
                value={grade}
                onChange={(e) => setGrade(e.target.value)}
                className="custom-select my-1 mr-sm-2"
              >
                <option disabled>Grade</option>
                <option value="10">10</option>
                <option value="9">9</option>
                <option value="8">8</option>
                <option value="7">7</option>
                <option value="6">6</option>
                <option value="5">5</option>
                <option value="4">4</option>
                <option value="3">3</option>
                <option value="2">2</option>
                <option value="1">1</option>
              </select>
            </div>
            <button className="btn btn-primary">Add</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddStudent;
