import React, { useState, useEffect } from "react";
async function getGrades() {
  return fetch("http://localhost:8000/grade").then((res) => {
    return res.json();
  });
}

function ClassList() {
  const [grades, setGrades] = useState("");

  useEffect(() => {
    getGrades().then((grades) => {
      setGrades(grades);
    });
  }, []);
  return (
    <div>
      <div className="list-group">
        <table className="table table-hover table-dark">
          <thead>
            <tr className="bg-primary">
              <th scope="col">Grade</th>
              <th scope="col">Student Count</th>
            </tr>
          </thead>
          <tbody>
            {grades &&
              grades.map((grade) => (
                <tr>
                  <td>{grade.grade}</td>
                  <td>{grade.students_count}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ClassList;
