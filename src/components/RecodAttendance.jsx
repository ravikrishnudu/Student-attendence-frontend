import React, { useState, useEffect } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import { Link, useParams } from "react-router-dom";

import "react-datepicker/dist/react-datepicker.css";

async function getStudents(gradeId) {
  if (gradeId) {
    return fetch(`http://localhost:8000/student?gradeId=${gradeId}`).then(
      (res) => {
        // console.log(res);
        return res.json();
      }
    );
  } else {
    return fetch("http://localhost:8000/student").then((res) => {
      // console.log(res);
      return res.json();
    });
  }
}

function RecordAttendance() {
  const [students, setStudents] = useState("");
  const [isPresent, setIsPresent] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [presentStudents, setPresentStudents] = useState([]);

  let { gradeId } = useParams();
  useEffect(() => {
    getStudents(gradeId).then((students) => {
      setStudents(students);
    });
  }, []);
  console.log(students, gradeId);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/attendance", {
        isEntered: isPresent,
        date: startDate,
        // gradeId,
        // studentId,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const checkPresent = (startDate, studentId) => {
    setIsPresent(true);
    const data = { isEntered: isPresent, date: startDate, studentId, gradeId };
    setPresentStudents([...presentStudents, data]);
  };
  console.log(presentStudents);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {" "}
        <div>
          <h1 className="font-weight-light display-1 text-center">
            Recod Attendance
          </h1>{" "}
        </div>
        <div className="list-group">
          <table className="table table-hover table-dark">
            <thead>
              <tr className="bg-primary">
                <th scope="col">CheckBox</th>
                <th scope="col">Date</th>
                <th scope="col">Name</th>
                <th scope="col">Gender</th>
                <th scope="col">Date of Birth</th>
                <th scope="col">Email</th>
              </tr>
            </thead>
            <tbody>
              {students &&
                students.map((student) => {
                  return (
                    <tr key={student.id}>
                      <td>
                        <input
                          selected={isPresent}
                          onChange={() => checkPresent(startDate, student.id)}
                          type="checkbox"
                        />
                      </td>
                      <td>
                        {" "}
                        <DatePicker
                          selected={startDate}
                          onSelect={(date) => {
                            console.log(date);
                            setStartDate(date);
                          }}
                        />
                      </td>
                      <td>{student.name}</td>
                      <td>{student.gender}</td>
                      <td>{student.dateOfBirth}</td>
                      <td>{student.email}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
        <div>
          <button className="btn btn-primary display-1 text-center">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default RecordAttendance;
