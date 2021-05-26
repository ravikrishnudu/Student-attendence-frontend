import React, { useState, useEffect } from "react";

async function getStudents() {
  return fetch("http://localhost:8000/student").then((res) => {
    return res.json();
  });
}

function StudentList() {
  const [students, setStudents] = useState("");

  useEffect(() => {
    getStudents().then((students) => {
      setStudents(students);
    });
  }, []);
  console.log(students);
  return (
    <>
      <div className="list-group">
        <table className="table table-hover table-dark">
          <thead>
            <tr className="bg-primary">
              <th scope="col">Name</th>
              <th scope="col">Gender</th>
              <th scope="col">Date of Birth</th>
              <th scope="col">Email</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {students &&
              students.map((student) => {
                return (
                  <tr key={student.id}>
                    <td>{student.name}</td>
                    <td>{student.gender}</td>
                    <td>{student.dateOfBirth}</td>
                    <td>{student.email}</td>
                    <td>
                      <button className="btn btn-warning">Update</button>
                    </td>
                    <td>
                      <button className="btn btn-danger">Delete</button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default StudentList;
