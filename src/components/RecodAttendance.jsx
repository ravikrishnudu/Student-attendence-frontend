import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import DatePicker from "react-datepicker";

import styles from "./Styles.module.css";
import "react-datepicker/dist/react-datepicker.css";

async function getStudents(gradeId) {
  try {
    if (gradeId) {
      const response = await axios.get(`/students?gradeId=${gradeId}`);
      return response.data;
    } else {
      const response = await axios.get("/students");
      return response.data;
    }
  } catch (error) {
    console.error(error);
  }
}
function RecordAttendance() {
  const [students, setStudents] = useState("");
  const [isPresent, setIsPresent] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [presentStudents, setPresentStudents] = useState([]);

  let { gradeId } = useParams();
  useEffect(() => {
    getStudents(gradeId).then((res) => {
      setStudents(res);
    });
  }, [gradeId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/attendance", {
        presentStudents,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const checkPresent = (startDate, studentId) => {
    setIsPresent(true);
    const data = { isPresent, date: startDate, studentId, gradeId };
    setPresentStudents([...presentStudents, data]);
  };

  // console.log(students, gradeId);
  // console.log(presentStudents);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <h1 className="font-weight-light display-1 text-center">
            Recod Attendance
          </h1>
        </div>
        <div>
          <label className={styles.date} htmlFor="date">
            Date
          </label>
          <DatePicker
            selected={startDate}
            onSelect={(date) => {
              console.log(date);
              setStartDate(date);
            }}
          />
        </div>
        <div className="list-group">
          <table className="table table-hover table-dark">
            <thead>
              <tr className="bg-primary">
                <th scope="col">CheckBox</th>

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
          <button
            type="submit"
            className="btn btn-primary display-1 text-center"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default RecordAttendance;
