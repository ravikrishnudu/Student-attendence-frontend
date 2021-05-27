import axios from "axios";
import React, { useState } from "react";
import { useHistory, useParams } from "react-router";

function UpdateStudent() {
  const { id } = useParams();
  let history = useHistory();

  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [email, setEmail] = useState("");
  const [grade, setGrade] = useState("Grade");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const UpdateStudent = await axios.put(
      `http://localhost:8000/student/${id}`,
      {
        name,
        gender,
        dateOfBirth,
        email,
        gradeId: grade,
      }
    );
    history.push("/");
  };
  return (
    <div>
      <div>
        <h1 className="font-weight-light display-1 text-center">
          Update Student Details
        </h1>{" "}
      </div>
      <form action="">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="name"
            className="form-control"
            type="text"
          />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender</label>
          <input
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            id="gender"
            className="form-control"
            type="text"
          />
        </div>
        <div className="form-group">
          <label htmlFor="dateOfBirth">Date of Birth</label>
          <input
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
            id="dateOfBirth"
            className="form-control"
            type="text"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            className="form-control"
            type="text"
          />
          <div className="from-group">
            <label htmlFor="email">Email</label>
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
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default UpdateStudent;
