import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

async function getGrades() {
  const response = await axios.get("http://localhost:8000/grades");
  return response.data;
}

function ClassList() {
  const [grades, setGrades] = useState("");

  useEffect(() => {
    getGrades().then((res) => {
      setGrades(res);
    });
  }, []);

  console.log(grades);

  return (
    <div>
      <div className="list-group">
        <table className="table table-hover table-dark">
          <thead>
            <tr className="bg-primary">
              <th scope="col">Grade</th>
              <th scope="col">Student Count</th>
              <th scope="col">Recod Attendance</th>
              <th scope="col">Show Attendance</th>
            </tr>
          </thead>
          <tbody>
            {grades &&
              grades.map((grade) => (
                <tr>
                  <td>{grade.grade}</td>
                  <td>{grade.students_count}</td>
                  <td>
                    {" "}
                    <Link
                      to={`/recodattendance/class/${grade.id}`}
                      className="btn btn-warning"
                    >
                      Recod Attendance
                    </Link>
                  </td>
                  <td>
                    <Link
                      to={`/recodedattendance/${grade.id}`}
                      className="btn btn-warning"
                    >
                      Show Attendance
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ClassList;
