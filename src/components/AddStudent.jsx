import React, { useState, useEffect } from "react";
import axios from "axios";

async function getGrades() {
  const res = await axios.get("/grades");
  return res.data;
}

async function getStudents() {
  const response = await axios.get("/students");
  console.log(response);
  return response.data;
}
function AddStudent() {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [email, setEmail] = useState("");
  const [grade, setGrade] = useState("Grade");
  const [grades, setGrades] = useState("");
  const [students, setStudents] = useState("");

  useEffect(() => {
    getStudents().then((res) => {
      setStudents(res);
    });
    getGrades().then((res) => {
      setGrades(res);
    });
  }, []);

  const addStudents = (student) => {
    setStudents(...students, student);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/student", {
        name,
        gender,
        dateOfBirth,
        email,
        gradeId: grade,
      });
      setName("");
      setEmail("");
      setGender("");
      setDateOfBirth("");
      setGrade("Grade");
      setStudents(...students);
      addStudents(response.data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  // console.log(students);

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
                required
              />
            </div>
            <div className="col">
              <input
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Gender"
                required
              />
            </div>
            <div className="col">
              <input
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Date of Birth"
                required
              />
            </div>
            <div className="col">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Email"
                required
              />
            </div>
            <div className="col">
              <select
                value={grade}
                onChange={(e) => setGrade(e.target.value)}
                className="custom-select my-1 mr-sm-2"
              >
                <option disabled>Grade</option>
                {grades &&
                  grades.map((grade) => (
                    <>
                      key={grade.id}
                      <option value={grade.id}>{grade.grade}</option>
                    </>
                  ))}
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
