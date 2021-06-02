import React, { useState, useEffect } from "react";
import axios from "axios";

async function getGrades() {
  const res = await axios.get("http://localhost:8000/grades");
  return res.data;
}

function AddStudent() {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [email, setEmail] = useState("");
  const [grade, setGrade] = useState("Grade");
  const [grades, setGrades] = useState("");

  useEffect(() => {
    getGrades().then((res) => {
      setGrades(res);
    });
  }, []);

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

  // console.log(grade.id);

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
                onChange={(e) => setGender(e.target.value)}
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
                {grades &&
                  grades.map((grade) => (
                    <>
                      <option value={grade.id}>{grade.grade}</option>
                    </>
                  ))}
              </select>
            </div>

            <button className="btn btn-primary">Add</button>
          </div>
        </form>
      </div>
      {/* <div className="form-row">
          <div className="col">
            <Link to="/previewattendance" className="btn btn-warning">
              Preview Attendence
            </Link>
          </div>
        </div> */}
    </div>
  );
}

export default AddStudent;
